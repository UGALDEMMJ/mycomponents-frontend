import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { getTags, AlertaType, Tag } from "../../api/tags";

const AddTag = () => {
  const [tag, setTag] = useState<Tag>({ name: "", id: "" });
  const [tags, setTags] = useState<Tag[]>([]);
  const [alert, setAlert] = useState<AlertaType | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleSubmit = async (
    e: React.FormEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/tags`;
      const method = isEditing ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tag),
      });
      const data = await response.json();
      if (!response.ok) {
        setAlert({ msg: data.msg || "Failed to save the tag", error: true });
        return;
      }
      setAlert({ msg: data.msg || "Successfully saved", error: false });
      const updatedTags = await getTags(token!);
      setTags(updatedTags);
      setModalOpen(false);
      setTag({ name: "", id: "" });
      setIsEditing(false);
    } catch (error) {
      setAlert({ msg: "Conexion Error", error: true });
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    const confirmar = confirm("This tag will be deleted, Delete anyway?");
    if (!confirmar) return;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/tags`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id }),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        setAlert({
          msg: data.msg || "Failed to delete the tag",
          error: true,
        });
        return;
      }
      setAlert({ msg: data.msg || "Successfully deleted", error: false });
      const updatedTags = await getTags(token!);
      setTags(updatedTags);
    } catch (error) {
      setAlert({ msg: "Conexion Error", error: true });
    }
  };

  useEffect(() => {
    getTags(token!)
      .then(setTags)
      .catch((err) => setAlert({ msg: err.message, error: true }));
  }, [token]);

  return (
    <div className="gap-4 p-2 sm:p-4 min-h-screen font-space-mono bg-black">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl text-white text-center mt-4">
          Let's Add a new Tag
        </h2>
        <div className="flex justify-center p-4 sm:p-8">
          <button
            className="text-white text-xl sm:text-2xl relative inline-flex items-center justify-center mb-2 me-2 overflow-hidden font-medium rounded-lg hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors to-black p-3 sm:p-4 outline-cyan-500 outline-1"
            onClick={() => setModalOpen(true)}
          >
            Add Tag
          </button>
        </div>
        <div className="border-t-2 border-gray-500 p-2 sm:p-8">
          {tags.length ? (
            <>
              <h2 className="text-white text-2xl sm:text-4xl p-4 sm:p-10 text-center">
                List of Tags
              </h2>
              <div className="flex flex-col gap-2">
                {tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="border border-cyan-500 flex flex-col sm:flex-row justify-between items-center rounded-lg bg-black/80 shadow-sm"
                  >
                    <p className="text-white p-3 sm:p-5 text-base sm:text-lg">
                      {tag.name}
                    </p>
                    <div className="flex gap-2 p-3 sm:p-5">
                      <button
                        className="text-white px-3 py-2 border border-cyan-500 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors text-xs sm:text-base"
                        onClick={() => {
                          setTag({ name: tag.name, id: tag.id });
                          setIsEditing(true);
                          setModalOpen(true);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="text-white px-3 py-2 border border-red-500 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors text-xs sm:text-base"
                        onClick={() => handleDelete(tag.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h2 className="text-xl sm:text-3xl text-white text-center py-8">
              There are no Tags yet!
            </h2>
          )}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <form className="w-full max-w-xs sm:max-w-sm mx-auto" onSubmit={handleSubmit}>
          <label className="block mb-2 text-white">Tag Name</label>
          <input
            autoFocus
            type="text"
            value={tag.name}
            onChange={(e) => setTag({ ...tag, name: e.target.value })}
            className="rounded p-2 w-full h-10 mb-4 outline-1 outline-cyan-500 placeholder-white text-white text-xs bg-black border border-cyan-500"
            placeholder="(ui, form, button)"
            required
          />
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="outline outline-cyan-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br hover:from-black hover:to-cyan-400 transition-colors"
            >
              {isEditing ? "Update" : "Save"}
            </button>
            <button
              type="button"
              className="outline outline-cyan-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br hover:from-black hover:to-red-400 transition-colors"
              onClick={() => {
                setModalOpen(false);
                setTag({ name: "", id: "" });
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
          {alert && (
            <div
              className={`mt-4 p-2 rounded text-center ${
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

export default AddTag;
