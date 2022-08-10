import React, { useContext, useEffect } from "react";
import logo from "../logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("logged change");
    }, [userContext.user])

    const logoutUser = () => {
        userContext.setUser(null);
        window.sessionStorage.clear();
        navigate("/login", { replace: true });
    }

    return (
        <nav className="shadow-sm w-full flex items-center gap-4 justify-between px-16">
            <NavLink to="/">
                <img src={logo} alt="logo" className="h-16" />
            </NavLink>
            {
                userContext.user === null ?
                    <div className="flex items-center gap-4">
                        <NavLink to="/login" className={({ isActive }) => ["p-2 rounded-sm", isActive ? "bg-gray-200" : ""].join(" ")}>Login</NavLink>
                        <NavLink to="/register" className={({ isActive }) => ["p-2 rounded-sm", isActive ? "bg-gray-200" : ""].join(" ")}>Register</NavLink>
                    </div> :
                    <div className="flex items-center gap-4">
                        <button>{userContext.user.email}</button>
                        <button onClick={logoutUser}>Logout</button>
                    </div>
            }
        </nav>
    );
}

export default Navbar;