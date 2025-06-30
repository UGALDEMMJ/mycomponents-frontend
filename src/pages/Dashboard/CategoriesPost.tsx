import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { getCategoriesPosts } from "../../api/category";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import { motion } from "motion/react";
import { Component } from "../../api/components";
import { Category, getCategories } from "../../api/category";
import { getUsers, User } from "../../api/users";

const CategoriesPost = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const categoryId = query.get("category");

    const [categories, setCategories] = useState<Category[]>([]);
    const [user, setUser] = useState<User[]>([]);
    const [components, setComponents] = useState<Component[]>([]);
    const [showCode, setShowCode] = useState<{ [key: string]: boolean }>(
        {},
    );

    const toggleView = (id: string) => {
        setShowCode((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        getCategoriesPosts(categoryId!)
            .then(setComponents)
            .catch((err) => console.log({ msg: err.message, error: true }));

        getCategories(null!)
            .then(setCategories)
            .catch((err) => console.log({ msg: err.message, error: true }));

        getUsers()
            .then(setUser)
            .catch((err) => console.log({ msg: err.message, error: true }));
    }, []);

    return (
        <div className="gap-4 p-2 sm:p-4 min-h-screen font-space-mono">
            <section className="border-t-2 border-cyan-500 px-2 sm:px-8 py-4 sm:py-8 space-y-4">
                {components.length ? (
                    <>
                        <h2 className="text-white text-2xl sm:text-4xl p-2 sm:p-6 text-center">
                            List of All Components
                        </h2>
                        <div className="flex flex-col items-center gap-4 text-white">
                            {components.map((comp) => (
                                <div
                                    key={comp.id}
                                    className="border rounded-xl border-cyan-500 flex flex-col max-w-full w-full sm:max-w-2xl bg-black/80 shadow-lg"
                                >
                                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center p-2 sm:p-4">
                                        <div>
                                            <h2 className="text-lg sm:text-2xl text-center">
                                                {comp.name}
                                            </h2>
                                            <p className="text-cyan-400 text-center text-xs sm:text-sm">
                                                {categories.find((t) =>
                                                    t.id === comp.category_id
                                                )?.name || ""}
                                            </p>
                                        </div>
                                        <button
                                            className="border border-cyan-500 rounded px-2 py-1 sm:px-3 sm:py-1 text-cyan-400 hover:bg-cyan-900 transition mt-2 sm:mt-0 text-xs sm:text-base"
                                            onClick={() => toggleView(comp.id)}
                                        >
                                            {showCode[comp.id]
                                                ? "Show Preview"
                                                : "Show Code"}
                                        </button>
                                    </div>
                                    <div className="px-2 sm:px-4 pb-1">
                                        {showCode[comp.id] ? (
                                            <pre className="bg-black text-green-400 rounded p-2 sm:p-3 overflow-x-auto text-xs">
                                                {comp.code}
                                            </pre>
                                        ) : (
                                            <LiveProvider
                                                scope={{ motion }}
                                                language="jsx"
                                                code={comp.code}
                                            >
                                                <LivePreview />
                                                <LiveError />
                                            </LiveProvider>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between pb-1 sm:pb-2">
                                        <p className="pl-2 sm:pl-4 text-left text-xs sm:text-sm">
                                            About: {comp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 pr-2 sm:pr-5">
                                            {comp.tags?.map((
                                                tag: {
                                                    name: string;
                                                    id: string;
                                                },
                                            ) => (
                                                <span
                                                    key={tag.id}
                                                    className="bg-cyan-900 border border-cyan-500 rounded-full px-3 py-1 text-xs text-white"
                                                >
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between w-full text-xs pb-2 sm:pb-3">
                                        <p className="pl-2 sm:pl-4">
                                            By{" "}
                                            <span className="text-cyan-500">
                                                {user.find((u) =>
                                                    u.id === comp.user_id
                                                )?.name || ""}
                                            </span>
                                        </p>
                                        <p className="pr-2 sm:pr-4 text-right">
                                            {comp.created_at
                                                ? new Date(comp.created_at)
                                                    .toLocaleDateString()
                                                : ""}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <h2 className="text-xl sm:text-2xl text-white text-center">
                        There are no Components yet!
                    </h2>
                )}
            </section>
        </div>
    );
};

export default CategoriesPost;
