import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar />
            <Outlet />
            <footer className="flex items-center justify-center mt-16">
                copyright ART
            </footer>
        </div>
    );
}

export default Home;