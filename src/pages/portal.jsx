import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ExportExcel from "./portal/ExportExcel";

const Portal = (props) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-2 p-2 items-center shadow-sm justify-between px-4">
                <div className="flex gap-2 items-center">
                    <NavLink to="users" className={({ isActive }) => [" p-1 border rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Users</NavLink>
                    <NavLink to="dropdowns" className={({ isActive }) => [" p-1 border rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Dropdowns</NavLink>
                    <NavLink to="party" className={({ isActive }) => [" p-1 border rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Party</NavLink>
                    <NavLink to="deals" className={({ isActive }) => [" p-1 border rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Deals</NavLink>
                    <NavLink to="brochures" className={({ isActive }) => [" p-1 border rounded-sm", isActive ? "bg-blue-200" : ""].join(" ")} >Brochures</NavLink>
                </div>
                <div>
                    <ExportExcel />
                </div>
            </div>
            <div className="flex p-2 w-full">
                <Outlet />
            </div>
        </div>
    );
}

export default Portal;