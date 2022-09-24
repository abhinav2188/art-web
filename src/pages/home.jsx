import React, { useContext, useEffect } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserContext from "../context/UserContext";
import { validateToken } from "../services/tokenService";

const Home = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        // console.log("user",userContext.user);
        if (userContext.user) {
            navigate("/portal", { replace: true })
            validateToken().then(
                response => {
                    // console.log("home token status:", response);
                    if (response.statusCode === 200) {
                        navigate("/portal", { replace: true })
                    }
                    else {
                        navigate("/login", { replace: true });
                    }
                }
            )
        }
        else {
            navigate("/login", { replace: true });
        }
    }, [userContext.user]);

    return (
        <div className="w-screen h-screen flex flex-col">
            <Navbar />
            <Outlet />
            <footer className="flex items-center justify-center mt-16">
            © AR Thermosets
            </footer>
        </div>
    );

}

export default Home;

