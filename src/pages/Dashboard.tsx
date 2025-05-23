import React from "react";
import { Link } from "react-router-dom";
const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-2 md:grid-rows-3 gap-4 p-6 h-screen font-space-mono">
      {/*Primer card*/}
      <Link
        to={"/"}
        className="relative col-span-1 row-span-1 md:col-span-1 md:row-span-2 p-6 border
      rounded-lg shadow-md flex items-center justify-center group bg-black shadow-cyan-400
      border-cyan-400">
        <div className="text-justify">
          <h2 className="text-white underline transition-opacity duration-300 font-bold text-2xl pb-3 pl-10">
            All Components
          </h2>
          <p className="text-lg text-white p-10">
            Browse the complete collection of available components. Find, reuse, or edit the elements you need to speed up your development and maintain consistency across your projects.
          </p>
        </div>
      </Link>

      {/*Segundo card*/}
      <Link
        to={"/"}
        className="realtive col-span-2 row-span-1 md:col-span-1 md:row-span-1 p-6 border
      rounded-lg shadow-md flex items-center justify-center group bg-black shadow-cyan-400 border-cyan-400"
      >
        <div className="text-justify">
          <h2 className="text-white underline transition-opacity duration-300 font-bold text-2xl pb-3 pl-10">
            Most Used Components
          </h2>
          <p className="text-lg text-white p-10">
            Quick access to the most frequently used components. Save time by reusing popular and proven elements across your projects.
          </p>
        </div>
      </Link>

      {/*Tercer card*/}
      <Link
        to={"/"}
        className="realtive col-span-2 row-span-2 md:col-span-1 md:row-span-1 p-6 border 
      rounded-lg shadow-md flex items-center justify-center group bg-black shadow-cyan-400 border-cyan-400"
      >
         <div className="text-justify">
          <h2 className="text-white underline transition-opacity duration-300 font-bold text-2xl pb-3 pl-10">
            Component Categories
          </h2>
          <p className="text-lg text-white p-10">
            Explore components organized by category. Quickly find what you need by browsing through different types, styles, or functionalities.
          </p>
        </div>
      </Link>

      {/*Cuarto card*/}
      <Link
        to={"/"}
        className="realtive col-span-1 row-span-3  md:col-span-2 md:row-span-2 p-6 border
      rounded-lg shadow-md flex items-center justify-center group bg-black shadow-cyan-400 border-cyan-400"
      >
         <div className="text-justify">
          <h2 className="text-white underline transition-opacity duration-300 font-bold text-2xl pb-3 pl-10">
            About This Project
          </h2>
          <p className="text-lg text-white p-10">
            Learn more about the purpose, features, and vision behind this platform. Discover how it helps streamline development through reusable components..
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
