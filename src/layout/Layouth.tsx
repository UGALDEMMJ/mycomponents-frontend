import React, {useState} from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router";

const Layouth = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () =>{
        setShowSidebar(!showSidebar);
    };
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-blue-950 to-black">
            {/* Pasa funcion para usar el sidebar */}
            <Header onToggleSidebar={toggleSidebar} />
            <div className="flex flex-1">
                <main className="flex-1 p-4">
                    <Outlet />
                </main>
                {showSidebar && (
                    <aside className="w-64 bg-gray-100">
                        <Sidebar />
                    </aside>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Layouth;
