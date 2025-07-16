import React, { useEffect, useState } from "react";
import Select from "react-select";
import Modal from "../../components/Modal";
import { Component, getComponents } from "../../api/components";
import { AlertaType } from "../../api/tags";
import { Category, getCategories } from "../../api/category";
import { getTags, Tag } from "../../api/tags";
import { getUser, User } from "../../api/users";
import { customStyles } from "../../config/customStyles";

const AddPost = () => {
  const [component, setComponent] = useState<Component>({
    id: "",
    user_id: "",
    category_id: "",
    name: "",
    description: "",
    code: "",
    tags: []
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [components, setComponents] = useState<Component[]>([]);
  const [alert, setAlert] = useState<AlertaType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLElement>,
    idUser: string,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const url = isEditing
        ? `${import.meta.env.VITE_BACKEND_URL}/api/components/${idUser}`
        : `${import.meta.env.VITE_BACKEND_URL}/api/components`;
      const method = isEditing ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers:
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        body: JSON.stringify({ ...component, tags: selectedTags }),
      });
      const data = await response.json();
      if (!response.ok) {
        setAlert({ msg: data.msg || "Failed to save component", error: true });
        return;
      }
      setAlert({ msg: data.msg || "Succesfully saved", error: false });
      const updatedComponents = await getComponents();
      setComponents(updatedComponents);
      setModalOpen(false);
      setComponent({
        id: "",
        user_id: "",
        category_id: "",
        name: "",
        description: "",
        code: "",
      });
      setIsEditing(false);
    } catch (error) {
      setAlert({ msg: "Conexion Error", error: true });
    }
  };

  const handleDelete = async (
    idPost: string,
    idUser: string,
  ): Promise<void> => {
    const confirmar = confirm("This component will be deleted, Delete anyway?");
    if (!confirmar) return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/components/${idUser}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ idPost }),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        setAlert({
          msg: data.msg || "Failed to delete the component",
          error: true,
        });
        return;
      }
      setAlert({ msg: data.msg || "Succesfully deleted", error: false });
      const updatedComponents = await getComponents();
      setComponents(updatedComponents);
    } catch (error) {
      setAlert({ msg: "Conexion Error", error: true });
    }
  };

  useEffect(() => {
    getComponents()
      .then(setComponents)
      .catch((err) => setAlert({ msg: err.message, error: true }));

    getCategories(token!)
      .then(setCategories)
      .catch((err) => setAlert({ msg: err.message, error: true }));

    getUser(token!)
      .then(setUser)
      .catch((err) => setAlert({ msg: err.message, error: true }));

    getTags(token!)
      .then(setTags)
      .catch((err) => setAlert({ msg: err.message, error: true }));
  }, [token]);

  return (
    <div className="gap-4 p-2 sm:p-4 min-h-screen font-space-mono bg-black">
      <div className="border-t-2 border-cyan-500"></div>
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl text-white text-center mt-4">Let's Add a new Component</h2>
        <div className="flex justify-center p-4 sm:p-8">
          <button
            className="text-white text-xl sm:text-2xl relative inline-flex items-center justify-center mb-2 me-2 overflow-hidden font-medium rounded-lg hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors to-black p-3 sm:p-4 outline-cyan-500 outline-1"
            onClick={() => setModalOpen(true)}
          >
            Add Component
          </button>
        </div>
        <div className="p-2 sm:p-8">
          {components.length
            ? (
              <>
                <h2 className="text-white text-2xl sm:text-4xl p-4 sm:p-10 text-center">List of Components</h2>
                <div className="flex flex-col gap-2">
                  {components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="border border-cyan-500 flex flex-col sm:flex-row justify-between items-center rounded-lg bg-black/80 shadow-sm"
                    >
                      <p className="text-white p-3 sm:p-5 text-base sm:text-lg">
                        {comp.name}
                      </p>
                      <p className="text-white p-3 sm:p-5 text-xs sm:text-base">
                        {comp.user_id === user?.id ? user?.name : ""}
                      </p>
                      <div className="flex gap-2 p-3 sm:p-5">
                        <button
                          className="text-white px-3 py-2 border border-cyan-500 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-xs sm:text-base"
                          onClick={() => {
                            setComponent({
                              id: comp.id,
                              user_id: comp.user_id,
                              category_id: comp.category_id,
                              name: comp.name,
                              description: comp.description,
                              code: comp.code,
                            });
                            setSelectedTags((comp.tags as Tag[] ?? []).map((tag) => tag.id))
                            setIsEditing(true);
                            setModalOpen(true);
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="text-white px-3 py-2 border border-red-500 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors text-xs sm:text-base"
                          onClick={() => handleDelete(comp.id, comp.user_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )
            : (
              <h2 className="text-xl sm:text-3xl text-white text-center py-8">
                There are no Components yet!
              </h2>
            )}
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="w-fit h-fit mx-auto  ">
          <form
            onSubmit={(e) => handleSubmit(e, isEditing ? component.user_id : "")}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Component Name */}
            <div className="col-span-1">
              <label className="block mb-1 text-white text-sm">Component Name</label>
              <input
                type="text"
                value={component.name}
                onChange={(e) =>
                  setComponent({ ...component, name: e.target.value })}
                className="rounded p-2 w-full h-10 mb-3 outline-1 outline-cyan-500 placeholder-white text-white text-sm bg-black border border-cyan-500"
                placeholder="(Login, Animate button, sidebar)"
                required
              />
            </div>

            {/* Component Code */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block mb-1 text-white text-sm">Component Code</label>
              <textarea
                value={component.code}
                onChange={(e) =>
                  setComponent({ ...component, code: e.target.value })}
                className="rounded p-2 w-full h-40 sm:h-60 mb-3 outline-1 outline-cyan-500 placeholder-white text-white text-sm bg-black border border-cyan-500"
                placeholder="<Code>"
                required
              />
            </div>

            {/* Component Category */}
            <div className="col-span-1">
              <label className="block mb-1 text-white text-sm">Component Category</label>
              <select
                value={component.category_id || ""}
                onChange={(e) =>
                  setComponent({ ...component, category_id: e.target.value })}
                className="rounded p-2 w-full h-10 mb-3 outline-1 outline-cyan-500 text-white text-sm bg-black border border-cyan-500"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Component Tags */}
            <div className="col-span-1">
              <label className="block mb-1 text-white text-sm">Component Tags</label>
              <Select
                isMulti
                options={tags.map((tag) => ({ value: tag.id, label: tag.name }))}
                value={tags.filter((tag) => selectedTags.includes(tag.id)).map(
                  (tag) => ({ value: tag.id, label: tag.name })
                )}
                onChange={(selected) => {
                  setSelectedTags(selected.map((option: any) => option.value));
                }}
                styles={customStyles}
                placeholder="Select tags..."
              />
            </div>

            {/* Component Description */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block mb-1 text-white text-sm">Component Description</label>
              <textarea
                value={component.description}
                onChange={(e) =>
                  setComponent({ ...component, description: e.target.value })}
                className="rounded p-2 w-full h-20 sm:h-24 mb-3 outline-1 outline-cyan-500 placeholder-white text-white text-sm bg-black border border-cyan-500"
                placeholder="(Describe your component)"
                required
              />
            </div>

            {/* Buttons */}
            <div className="col-span-1 sm:col-span-2">
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto outline outline-cyan-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors"
                >
                  {isEditing ? "Update" : "Save"}
                </button>
                <button
                  type="button"
                  className="w-full sm:w-auto outline outline-cyan-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors"
                  onClick={() => {
                    setModalOpen(false);
                    setComponent({
                      id: "",
                      user_id: "",
                      category_id: "",
                      name: "",
                      description: "",
                      code: "",
                    });
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </button>
              </div>
              {alert && (
                <div
                  className={`mt-4 p-3 rounded text-center ${
                    alert.error
                      ? "bg-red-200 text-red-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {alert.msg}
                </div>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddPost;
