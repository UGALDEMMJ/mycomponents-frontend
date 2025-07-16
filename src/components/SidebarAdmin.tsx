import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

export const SidebarAdmin = () => {
  const { logOut } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const closeSidebar = () => {
    setOpenIndex(null); // Cierra el sidebar móvil
  };

  return (
    <div className="p-3 text-white font-space-mono">
      <div className="">
        <button
          className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
          onClick={() => toggle(1)}
        >
          <h2 className="text-2xl">Admin</h2>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${
              openIndex === 1 ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`scrollbar-none overflow-hidden overflow-y-auto transition-all duration-300 ${
            openIndex === 1 ? "max-h-[70vh]" : "max-h-0"
          }`}
        >
          <Link
            to={"/admin"}
            className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white"
            onClick={closeSidebar}
          >
            Admin Dashboard
          </Link>
          <Link
            to={"/admin/addpost"}
            className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white"
            onClick={closeSidebar}
          >
            Manage Components
          </Link>
          <Link
            to={"/admin/addcategory"}
            className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white"
            onClick={closeSidebar}
          >
            Manage Categories
          </Link>
          <Link
            to={"/admin/addtag"}
            className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white"
            onClick={closeSidebar}
          >
            Manage Tags
          </Link>
          <Link
            to={"/dashboard"}
            className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white"
            onClick={closeSidebar}
          >
            Public Dashboard
          </Link>
          <button
            type="button"
            onClick={() => {
              logOut();
              closeSidebar();
            }}
            className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors text-white"
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="border-b border-gray-500 mb-4 mt-4"></div>
    </div>
  );
};
