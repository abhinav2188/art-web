import React, { useEffect, useState } from "react";
import PageButton from "../../components/button/PageButton";
import { getAllUsers } from "../../services/userService";
import UserRow from "./userRow";

const UsersPanel = (props) => {

    let [usersData, setUsersData] = useState({
        usersList: [],
        totalUsers: 0,
        totalPages: 0
    });
    let [pageNo, setPageNo] = useState(0);

    useEffect(() => {
        getAllUsers(pageNo).then(data => {
            console.log("data:", data);
            if (data) setUsersData(data);
        })
    }, [pageNo]);


    return (
        <div className="w-full">
            <p>Users Panel </p>
            <p>Total Users : {usersData.totalUsers}</p>
            <PageButton pageNo={pageNo} setPageNo={setPageNo} totalPagesCount={usersData.totalPages} />
            <table className="border-spacing-2">
                <thead className="bg-slate-500 text-white">
                    <tr className="font-bold">
                        <td className="p-1 border">Email</td>
                        <td className="p-1 border">Mobile</td>
                        <td className="p-1 border">Role</td>
                        <td className="p-1 border">Status</td>
                        <td className="p-1 border">Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.usersList.map(user => {
                            return (
                                <UserRow userData={user} key={user.id} />
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsersPanel;