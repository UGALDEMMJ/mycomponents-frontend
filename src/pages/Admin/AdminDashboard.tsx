import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 sm:p-4 min-h-screen font-space-mono">
      {/* Primer card */}
      <Link
        to="/admin/addpost"
        className="col-span-1 sm:col-span-2 border rounded-lg shadow-md flex items-center justify-center p-2 sm:p-4 group overflow-hidden"
      >
        <div className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-black p-4 sm:p-8 shadow-xl w-full h-full outline-3 outline-white overflow-hidden">
          {/* Fondo animado */}
          <span className="absolute -inset-1 bg-gradient-to-t from-cyan-500 to-black transform scale-y-1 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0 rounded-2xl"></span>
          <h2 className="mb-2 sm:mb-4 text-center text-2xl sm:text-3xl font-semibold text-white z-10 relative">
            Manage Your Components
          </h2>
          <p className="text-base sm:text-lg text-white p-4 sm:p-10 z-10 relative">
            View, create, edit, and delete your saved components with ease. Keep
            your collection clean and up-to-date by managing tags, categories, and
            component details as your project evolves.
          </p>
        </div>
      </Link>

      {/* Segunda card */}
      <Link
        to="/admin/addcategory"
        className="col-span-1 border rounded-lg shadow-md flex items-center justify-center p-2 sm:p-4 group overflow-hidden"
      >
        <div className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-black p-4 sm:p-8 shadow-xl w-full h-full outline-3 outline-white overflow-hidden">
          {/* Fondo animado */}
          <span className="absolute -inset-1 bg-gradient-to-t from-cyan-500 to-black transform scale-y-1 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0 rounded-2xl"></span>
          <h2 className="mb-2 sm:mb-4 text-center text-2xl sm:text-3xl font-semibold text-white z-10 relative">
            Manage Categories
          </h2>
          <p className="text-base sm:text-lg text-white p-4 sm:p-10 z-10 relative">
            Create custom categories to better organize your components. Group
            similar components together to make browsing and managing your
            collection faster and more intuitive. Easily update or remove
            categories as your project structure changes.
          </p>
        </div>
      </Link>

      {/* Tercera card */}
      <Link
        to="/admin/addtag"
        className="col-span-1 border rounded-lg shadow-md flex items-center justify-center p-2 sm:p-4 group overflow-hidden"
      >
        <div className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-black p-4 sm:p-8 shadow-xl w-full h-full outline-3 outline-white overflow-hidden">
          {/* Fondo animado */}
          <span className="absolute -inset-1 bg-gradient-to-t from-cyan-500 to-black transform scale-y-1 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0 rounded-2xl"></span>
          <h2 className="mb-2 sm:mb-4 text-center text-2xl sm:text-3xl font-semibold text-white z-10 relative">
            Manage Tags
          </h2>
          <p className="text-base sm:text-lg text-white p-4 sm:p-10 z-10 relative">
            Assign descriptive tags to your components to improve searchability
            and organization. Manage your tags to keep your component library
            clean and relevant. Tags help you quickly filter and identify
            components based on functionality, style, or any custom keyword you
            choose.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AdminDashboard;
