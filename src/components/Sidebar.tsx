import { Link } from "react-router-dom";
import { Category, getCategories } from "../api/category";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories(null!)
      .then(setCategories)
      .catch((err) => console.log({ msg: err.message, error: true }));
  }, []);

  const toggle = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="p-3 text-white font-space-mono">
      <div className="">
        <button
          className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
          onClick={() => toggle(1)}
        >
          <h2 className="text-2xl">Categories</h2>
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
          <div className="flex-col text-white">
            {categories.map((cat) => (
              <Link
                to={`/categoriesposts?category=${cat.id}`}
                key={cat.id}
                className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b border-gray-500 mb-4 mt-4"></div>
      <div className="">
        <button
          className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
          onClick={() => toggle(2)}
        >
          <h2 className="text-2xl">Admin</h2>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${
              openIndex === 2 ? "rotate-180" : ""
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
          className={`overflow-hidden transition-all duration-300 ${
            openIndex === 2 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <Link
            to={"/login"}
            className="flex items-center gap-3 p-2 w-full rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-white"
          >
            Manage Components
          </Link>
        </div>
      </div>
      <div className="border-b border-gray-500 mb-4 mt-4"></div>
    </div>
  );
};
