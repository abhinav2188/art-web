import React, { useState } from "react";
import ActionButton from "../../components/button/ActionButton";
import { updateUserAuth } from "../../services/userService";

const UserRow = (props) => {

    const [userData, setUserData] = useState(props.userData);
    const [edited, setEdited] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        // console.log("handleChange(" + name + "," + value + ")");
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
        setEdited(true);
    }

    function saveUpdate() {
        setLoading(true);
        updateUserAuth(userData.id, userData).then((response) => {
            if (response) {
                setLoading(false);
                setEdited(false);
            }
        })
    }


    return (
        <tr>
            <td className="p-1 border">{userData.email}</td>
            <td className="p-1 border">{userData.mobile}</td>
            <td className="p-1 border" >
                <select name="roles" value={userData.roles == null ? userRoles[3] : userData.roles} onChange={handleChange}>
                    {
                        userRoles.map((role, i) =>
                            <option key={i} value={role}>{role}</option>
                        )
                    }
                </select>
            </td>
            <td className="p-1 border">
                <select name="isActive" value={userData.isActive} onChange={handleChange}>
                    <option value={true}>active</option>
                    <option value={false}>blocked</option>
                </select>
            </td>
            {
                edited &&
                <td className="p-1 border">
                    <ActionButton loading={loading} onClick={saveUpdate}>save</ActionButton>
                </td>
            }
        </tr>
    );

}

const userRoles = [
    "ADMIN",
    "APP_MODERATOR",
    "BACKEND_MODERATOR",
    "None"
];

const userStatus = [
    "ACTIVE",
    "BLOCKED"
]

const selectUserRole = (props) => {
    return (
        <select name="roles" value={props.roles}>
            {
                userRoles.map(role =>
                    <option value={role}>{role}</option>
                )
            }
        </select>
    );
}

export default UserRow;