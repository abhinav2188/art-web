import React, { useContext } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserContext from "../context/UserContext";

const Home = () => {
    const userContext = useContext(UserContext);
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

            // {
            //     userContext.user ?
            //         <Navigate to="portal" replace={true} /> :
            //         <Navigate to="login" replace={true} />
            // }
