import React from "react";
import { NavLink, Outlet, Routes } from "react-router-dom";

const Portal = (props) => {
    return (
        <div className="grid gap-2 grid-cols-4">
            <div className="grid col-span-1 gap-2 p-2">
                <NavLink to="users" className={({ isActive }) => ["w-full p-2 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Users</NavLink>
                <NavLink to="dropdowns" className={({ isActive }) => ["w-full p-2 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Dropdowns</NavLink>
                <NavLink to="party" className={({ isActive }) => ["w-full p-2 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Party</NavLink>
                <NavLink to="deals" className={({ isActive }) => ["w-full p-2 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Deals</NavLink>
            </div>
            <div className="grid col-span-3 p-2">
                <Outlet />
            </div>
        </div>
    );
}

export default Portal;