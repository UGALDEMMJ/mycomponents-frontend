import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router";

const Layouth = () => {
    return (
        <main>
            <Header />
            <Outlet/>
            <Footer />
        </main>
    );
};

export default Layouth;
