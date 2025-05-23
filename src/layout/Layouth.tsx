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
        <div className="flex min-h-screen flex-col bg-black">
            {/* Pasa funcion para usar el sidebar */}
            <Header onToggleSidebar={toggleSidebar} />
            <div className="flex flex-1">
                <main className="flex-1 p-4 transition-all duration-1000 ease-in-out">
                    <Outlet />
                </main>
                 <aside className={`bg-black border-b-4 border-s-4 border-amber-200 rounded-2xl transition-all duration-1000 ease-in-out
                    ${showSidebar ? 'w-64 opacity-90 translate-x-0' : 'translate-x-full w-0 overflow-hidden'}`}>
                    <div className={`${showSidebar ? '' : 'fixed right-0 top-0 pointer-events-none opacity-0 translate-x-full'}
                         transition-all duration-1000 ease-in-out`}>
                        <Sidebar />
                    </div>
                </aside>
            </div>
                <Footer />
        </div>
    );
};

export default Layouth;
