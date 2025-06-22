import React, { useEffect, useState } from "react";
import { Component, getComponents } from "../api/components";
import { Category, getCategories } from "../api/category";
import { getUsers, User } from "../api/users";
import { AlertaType } from "../api/tags";
import { LivePreview } from "react-live";

const AllComponents = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [user, setUser] = useState<User[]>([]);
    const [components, setComponents] = useState<Component[]>([]);
    const [alert, setAlert] = useState<AlertaType | null>(null);

    useEffect(() => {
        getComponents(null!)
            .then(setComponents)
            .catch((err) => setAlert({ msg: err.message, error: true }));

        getCategories(null!)
            .then(setCategories)
            .catch((err) => setAlert({ msg: err.message, error: true }));

        getUsers()
            .then(setUser)
            .catch((err) => setAlert({ msg: err.message, error: true }));
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
                                {components.map((comp, idx) => (
                                    <div
                                        key={idx}
                                        className="border rounded-2xl border-cyan-500 flex flex-col w-6xl"
                                    >
                                        <h2 className="p-5 text-3xl text-center">
                                            {comp.name}
                                        </h2>
                                        <p className="text-left pl-5">
                                            {categories.find((t) =>
                                                t.id === comp.category_id
                                            )?.name || ""}
                                        </p>
                                        <LivePreview code={comp.code} />
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
