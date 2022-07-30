import React from "react";
import logo from "../logo.png";
import {NavLink} from "react-router-dom"; 

const Navbar = () => {
    return (
        <nav className="shadow-sm w-full flex items-center gap-4 justify-between px-16">
            <NavLink to="/">
                <img src={logo} alt="logo" className="h-16"/>
            </NavLink>
            <div className="flex items-center gap-4">
                <NavLink to="/login" className={({isActive}) => ["p-2 rounded-sm",isActive ? "bg-gray-200" : ""].join(" ")}>Login</NavLink>
                <NavLink to="/register" className={({isActive}) => ["p-2 rounded-sm",isActive ? "bg-gray-200" : ""].join(" ")}>Register</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;