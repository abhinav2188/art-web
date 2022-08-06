import React from "react";
import { NavLink, Outlet, Routes } from "react-router-dom";

const Portal = (props) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-2 p-2 items-center shadow-sm">
                <span>PANELs</span>
                <NavLink to="users" className={({ isActive }) => [" p-1 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Users</NavLink>
                <NavLink to="dropdowns" className={({ isActive }) => [" p-1 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Dropdowns</NavLink>
                <NavLink to="party" className={({ isActive }) => [" p-1 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Party</NavLink>
                <NavLink to="deals" className={({ isActive }) => [" p-1 bg-gray-100 rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Deals</NavLink>
            </div>
            <div className="flex p-2 w-full">
                <Outlet />
            </div>
        </div>
    );
}

export default Portal;