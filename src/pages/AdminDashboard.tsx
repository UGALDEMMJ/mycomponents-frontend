import { Link } from "react-router-dom"


const AdminDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(250px,_auto)] gap-4 p-4 min-h-screen font-space-mono">
      {/*Primer card*/}
      <Link
        to="/"
        className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 border rounded-lg shadow-md flex items-center justify-center group overflow-hidden p-4 transition-transform duration-300 ease-out"
      >
        {/* Overlay animado */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-30deg) rotateX(15deg)",
          }}
          className="rounded-2xl bg-gradient-to-br from-black to-cyan-500 p-1 shadow-2xl h-full w-full"
        >
          <div
            className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-black p-8 shadow-xl w-full h-full outline-3 outline-white"
          >
            <h2 className="mb-4 text-center text-3xl font-semibold text-white">
              All Components
            </h2>
            <p className="text-lg text-white p-10">
              Browse the complete collection of available components. Find,
              reuse, or edit the elements you need to speed up your development
              and maintain consistency across your projects.
            </p>
          </div>
        </div>
      </Link>

      {/*Segundo card*/}
      <Link
        to={"/"}
        className="col-span-1 border rounded-lg shadow-md flex items-center justify-center group overflow-hidden p-4 transition-transform duration-300 ease-out min-h-[300px]"
      >
        {/* Overlay animado */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-30deg) rotateX(15deg)",
          }}
          className="rounded-2xl bg-gradient-to-br from-black to-cyan-500 p-1 shadow-2xl h-full w-full"
        >
          <div
            className="relative rounded-2xl bg-black p-8 shadow-xl w-full h-full outline-3 outline-white"
          >
            <h2 className="mb-4 text-center text-2xl font-semibold text-white">
              Most Used Components
            </h2>
            <p className="text-ms text-white p-2">
              Quick access to the most frequently used components. Save time by
              reusing popular and proven elements across your projects.
            </p>
          </div>
        </div>
      </Link>

      {/*Tercer card*/}
      <Link
        to={"/"}
        className="col-span-1 border rounded-lg shadow-md flex items-center justify-center group overflow-hidden p-4 transition-transform duration-300 ease-out min-h-[300px]"
      >
        {/* Overlay animado */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-30deg) rotateX(15deg)",
          }}
          className="rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br from-black to-cyan-500 p-1 shadow-2xl h-full w-full"
        >
          <div
            className="relative flex flex-col items-center justify-center rounded-2xl bg-black p-8 shadow-xl w-full h-full outline-3 outline-white"
          >
            <h2 className="mb-4 text-center text-2xl font-semibold text-white">
              Component Categories
            </h2>
            <p className="text-ms text-white p-2">
              Explore components organized by category. Quickly find what you
              need by browsing through different types, styles, or
              functionalities.
            </p>
          </div>
        </div>
      </Link>

      {/*Cuarto card*/}
      <Link
        to={"/"}
        className="col-span-1 sm:col-span-2 lg:col-span-3 border rounded-lg shadow-md flex items-center justify-center group overflow-hidden p-4 transition-transform duration-300 ease-out"
      >
        {/* Overlay animado */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-30deg) rotateX(15deg)",
          }}
          className="rounded-2xl bg-gradient-to-br from-black to-cyan-500 p-1 shadow-2xl h-full w-full"
        >
          <div
            className="relative flex flex-col items-center justify-center rounded-2xl bg-black p-8 shadow-xl w-full h-full outline-3 outline-white"
          >
            <h2 className="mb-4 text-center text-3xl font-semibold text-white">
              Component Categories
            </h2>
            <p className="text-xl text-white p-2">
              Explore components organized by category. Quickly find what you
              need by browsing through different types, styles, or
              functionalities.
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AdminDashboard