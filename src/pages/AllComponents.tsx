import { useEffect, useState } from "react";
import { Component, getComponents } from "../api/components";
import { Category, getCategories } from "../api/category";
import { getUsers, User } from "../api/users";
import { LiveError, LivePreview, LiveProvider } from "react-live";
import { motion } from "motion/react";

const AllComponents = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [user, setUser] = useState<User[]>([]);
    const [components, setComponents] = useState<Component[]>([]);
    const [showCode, setShowCode] = useState<{ [key: string]: boolean }>(
        {}
    );

    const toggleView = (id: string) => {
        setShowCode((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        getComponents(null!)
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
        <div className="gap-4 p-4 min-h-screen font-space-mono">
            <section className="border-t-2 border-cyan-500 p-8 space-y-4">
                {components.length
                    ? (
                        <>
                            <h2 className="text-white text-5xl p-10">
                                List of All Components
                            </h2>
                            <div className="flex flex-col items-center gap-8 text-white">
                                {components.map((comp) => (
                                    <div
                                        key={comp.id}
                                        className="border rounded-2xl border-cyan-500 flex flex-col w-6xl bg-black/80 shadow-lg"
                                    >
                                        <div className="flex flex-col md:flex-row justify-between items-center p-5">
                                            <div>
                                                <h2 className="text-3xl text-center">
                                                    {comp.name}
                                                </h2>
                                                <p className="text-cyan-400 text-center text-sm">
                                                    {categories.find((t) =>
                                                        t.id === comp.category_id
                                                    )?.name || ""}
                                                </p>
                                            </div>
                                            <button
                                                className="border border-cyan-500 rounded px-4 py-2 text-cyan-400 hover:bg-cyan-900 transition"
                                                onClick={() => toggleView(comp.id)}
                                            >
                                                {showCode[comp.id]
                                                    ? "Show Preview"
                                                    : "Show Code"}
                                            </button>
                                        </div>
                                        <div className="px-5 pb-2">
                                            {showCode[comp.id] ? (
                                                <pre className="bg-black text-green-400 rounded p-4 overflow-x-auto text-xs">
                                                    {comp.code}
                                                </pre>
                                            ) : (
                                                <LiveProvider scope={{motion}} language="jsx" code={comp.code}>
                                                    <LivePreview />
                                                    <LiveError />
                                                </LiveProvider>
                                            )}
                                        </div>
                                        <div className="flex justify-between pb-2">
                                            <p className="pl-5 text-left">
                                                About this component:{" "}
                                                {comp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pr-5">
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
                                        <div className="flex flex-row justify-between w-full text-xs pb-5">
                                            <p className=" pl-5">
                                                Developed by{" "}
                                                <span className="text-cyan-500">
                                                    {user.find((u) =>
                                                        u.id === comp.user_id
                                                    )?.name || ""}
                                                </span>
                                            </p>
                                            <p className="pr-5 text-right">
                                                Created at {comp.created_at
                                                    ? new Date(comp.created_at)
                                                        .toLocaleDateString()
                                                    : ""}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )
                    : (
                        <>
                            <h2 className="text-3xl text-white text-center">
                                There is not Components yet!!
                            </h2>
                        </>
                    )}
            </section>
        </div>
    );
};

export default AllComponents;
