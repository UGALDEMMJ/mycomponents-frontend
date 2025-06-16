import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SidebarAdmin } from "../components/SidebarAdmin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
    const [showSidebar, setShowSidebar] = useState(false);
        const toggleSidebar = () =>{
            setShowSidebar(!showSidebar);
        };
    const { auth, loading } = useAuth();
    if (loading) return "loading...";

    return (
        <div className="flex min-h-screen flex-col bg-black">
            {/* Pasa funcion para usar el sidebar */}
            <Header
                onToggleSidebar={toggleSidebar}
                isSidebarOpen={showSidebar}
            />
            <div className="flex flex-1">
                {auth?.id
                    ? (
                        <main className="flex-1 p-4 transition-all duration-1000 ease-in-out">
                            <Outlet />
                        </main>
                    )
                    : <Navigate to="/login" />}
                <aside
                    className={`bg-black border-b-4 border-s-4 border-cyan-200 rounded-2xl transition-all duration-1000 ease-in-out
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
                        <SidebarAdmin />
                    </div>
                </aside>
            </div>
            <Footer />
        </div>
    );
};

export default ProtectedRoute;
