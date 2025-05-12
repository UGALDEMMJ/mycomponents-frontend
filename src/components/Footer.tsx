import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 flex flex-wrap justify-center items-center">
            <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center px-4">
                <div className="text-sm text-center sm:text-left mb-4 sm:mb-0 font-space-mono">
                    <p>©2025 MyComponents. Developed by <a className="hover:text-blue-500" href="https://github.com/UGALDEMMJ">UGALDEMMJ.</a></p>
                </div>
            </div>
        </footer>
    );
};
