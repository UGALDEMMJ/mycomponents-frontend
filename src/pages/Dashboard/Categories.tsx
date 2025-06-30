import { useEffect, useState } from "react";
import { Category, getCategories } from "../../api/category";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories(null!)
      .then(setCategories)
      .catch((err) => console.log({ msg: err.message, error: true }));
  }, []);

  return (
    <div className="gap-4 p-2 sm:p-4 min-h-screen font-space-mono">
      <section className="border-t-2 border-cyan-500 px-2 sm:px-8 py-4 sm:py-8 space-y-4">
        {categories.length ? (
          <>
            <h2 className="text-white text-2xl sm:text-5xl p-4 sm:p-10 text-center">
              List of All Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 text-white">
              {categories.map((cat) => (
                <Link
                  to={`/categoriesposts?category=${cat.id}`}
                  key={cat.id}
                  className="border rounded-2xl border-cyan-500 flex flex-col w-full hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors to-black shadow-lg"
                >
                  <div className="flex justify-between items-center p-4 sm:p-5">
                    <div className="text-lg sm:text-xl font-semibold text-center w-full">
                      {cat.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <h2 className="text-xl sm:text-3xl text-white text-center">
            There are no Categories yet!
          </h2>
        )}
      </section>
    </div>
  );
};

export default Categories;
