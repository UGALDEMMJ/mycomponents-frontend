import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Modal from "../components/Modal";

const AddCategory = () => {
  type Category = {
    name: string;
    id: string;
  };

  interface AlertaType {
    msg: string;
    error: boolean;
  }

  interface DeleteResponse {
    msg?: string;
    [key: string]: any;
  }

  const [category, setCategory] = useState<Category>({ name: "", id: "" });
  const [categories, setCategories] = useState<Category[]>([]);
  const [alert, setAlert] = useState<AlertaType | null>(null);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = async (
    e: React.FormEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(category),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        setAlert({
          msg: data.msg || "Failed to save the category",
          error: true,
        });
        return;
      }
      setAlert({ msg: data.msg || "Succesfully saved", error: false });
      getCategories();
    } catch (error) {
      setAlert({ msg: "Conexion Error", error: true });
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    const confirmar = confirm("This category will be deleted, Delete anyway?");
    if (!confirmar) return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id }), // El id va en el body
        },
      );
      const data = await response.json();
      if (!response.ok) {
        setAlert({
          msg: data.msg || "Failed to delete the category",
          error: true,
        });
        return;
      }
      setAlert({ msg: data.msg || "Successfully deleted", error: false });
      getCategories(); // Actualiza la lista después de borrar
    } catch (error) {
      setAlert({ msg: "Conexion Error", error: true });
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/categories/dashboard`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      setCategories(data);
      if (!response.ok) {
        setAlert({ msg: data.msg || "Failed to save the tag", error: true });
        return;
      }
    } catch (error) {
      setAlert({ msg: "Conexion Error", error: true });
    }
  };

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, [token]);

  return (
    <div className="gap-4 p-4 min-h-screen font-space-mono">
      <div>
        <h2 className="text-3xl text-white">Let's Add a new Category</h2>
        <div className="flex justify-center p-8">
          <button
            className=" text-white text-3xl relative inline-flex items-center justify-center mb-2 me-2 overflow-hidden font-medium rounded-lg hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors to-black p-4 outline-cyan-500 outline-1"
            onClick={() => setModalOpen(true)}
          >
            Add Category
          </button>
        </div>
        <div className="border-t-2 border-gray-500 p-8">
          {categories.length
            ? (
              <>
                <h2 className="text-white text-5xl p-10">List of Categories</h2>
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="border border-cyan-500 flex justify-between items-center"
                  >
                    <p className="text-white p-5">
                      {cat.name}
                    </p>
                    <div className="p-5 space-x-4">
                      <button className="text-white p-4 border border-cyan-500 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors">
                        Update
                      </button>
                      <button
                        className="text-white p-4 border border-red-500 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors"
                        onClick={() => handleDelete(cat.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )
            : (
              <>
                <h2 className="text-3xl text-white text-center">
                  There is not Tags yet!!
                </h2>
              </>
            )}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-white">Category Name</label>
          <input
            type="text"
            value={category.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
            className=" rounded p-2 w-2xs h-10 mb-4 outline-1 outline-cyan-500 placeholder-white text-white text-xs"
            placeholder="(Tailwind, css, Bootstrap)"
            required
          />
          <div className="flex flex-col">
            <button
              type="submit"
              className="outline outline-cyan-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors"
            >
              Save
            </button>
            <button
              type="submit"
              className="outline outline-cyan-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
          {alert && (
            <div
              className={`mt-4 p-2 rounded ${
                alert.error
                  ? "bg-red-200 text-red-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {alert.msg}
            </div>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default AddCategory;
