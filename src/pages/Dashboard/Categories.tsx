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
    <div className="gap-4 p-4 min-h-screen font-space-mono">
      <section className="border-t-2 border-cyan-500 p-8 space-y-4">
        {categories.length
          ? (
            <>
              <h2 className="text-white text-5xl p-10">
                List of All Categories
              </h2>
              <div className="grid grid-cols-3 gap-8 text-white">
                {categories.map((cat) => (
                  <Link
                    to={`/categoriesposts?category=${cat.id}`}
                    key={cat.id}
                    className="border rounded-2xl border-cyan-500 flex flex-col w-2xs hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors to-black shadow-lg"
                  >
                    <div className="justify-between items-center p-5">
                      <div>
                          {cat.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )
          : (
            <>
              <h2 className="text-3xl text-white text-center">
                There is not Categories yet!!
              </h2>
            </>
          )}
      </section>
    </div>
  );
};

export default Categories;
