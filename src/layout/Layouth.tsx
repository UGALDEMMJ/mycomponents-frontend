import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { Outlet, useLocation } from "react-router";

const Layouth = () => {
    const location = useLocation();
    const isWelcome = location.pathname === "/";
    const isLogin = location.pathname === "login";

    const [showSidebar, setShowSidebar] = useState(false);
    const [showSidebarMovil, setShowSidebarshowSidebarMovil] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleSidebarMobile = () => {
        setShowSidebarshowSidebarMovil(!showSidebarMovil);
    };

    return (
        <div className="flex min-h-screen flex-col bg-black">
            {!isWelcome && !isLogin && (
                <Header
                    onToggleSidebar={toggleSidebar}
                    onToggleSidebarMobile={toggleSidebarMobile}
                    isSidebarOpen={showSidebar}
                    isSidebarOpenMovil={showSidebarMovil}
                />
            )}
            <div className="flex flex-1">
                <main className="flex-1 p-4 transition-all duration-1000 ease-in-out">
                    <Outlet />
                </main>
                <aside
                    className={`hidden sm:block bg-black border-b-4 border-s-4 border-cyan-200 rounded-2xl transition-all duration-1000 ease-in-out
                        ${
                        showSidebar
                            ? "w-64 opacity-90 translate-x-0"
                            : "translate-x-full w-0 overflow-hidden"
                    }`}
                >
                    <div
                        className={`${
                            showSidebar
                                ? ""
                                : "fixed right-0 top-0 pointer-events-none opacity-0 translate-x-full"
                        }
                            transition-all duration-1000 ease-in-out`}
                    >
                        <Sidebar />
                    </div>
                </aside>
                <aside className="fixed inset-0 z-40 flex sm:hidden">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50"
                        onClick={toggleSidebarMobile}
                    />
                    {/* Drawer ocupa toda la pantalla */}
                    <div className="flex flex-col relative w-full h-full bg-black border-4 border-cyan-200 rounded-2xl shadow-lg z-50">
                        <button
                            className="absolute top-2 right-2 text-cyan-400"
                            onClick={toggleSidebarMobile}
                        >
                            Close
                        </button>
                        <div className="pt-14 px-2 h-full overflow-y-auto">
                            <Sidebar />
                        </div>
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default Layouth;
