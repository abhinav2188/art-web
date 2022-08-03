import React, { useState } from "react";
import TextInput from "../components/input/TextInput";
import TextPassword from "../components/input/TextPassword";
import { loginUser } from "../services/authService";
import SubmitButton from "../components/button/SubmitButton";
import { useNavigate } from "react-router-dom";


const Login = (props) => {

    let [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    let [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name, value);
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function submitLoginForm(event) {
        setLoading(true);
        event.preventDefault();
        loginUser(formData.email, formData.password)
            .then((isUserLogged) => {
                console.log(isUserLogged);
                setLoading(false);
                if (isUserLogged) {
                    navigate("/", { replace: true });
                    setFormData({
                        email: "",
                        password: ""
                    });
                }
            });
    }

    return (
        <div className="flex flex-col p-4 border-sm w-96 border shadow-md rounded-lg my-16 self-center">
            <h2>Login User</h2>
            <form className="flex flex-col items-center w-full mt-8 mb-2">
                <TextInput name="email" label="Email" value={formData.email} onChange={handleChange} />
                <TextPassword name="password" label="Password" value={formData.password} onChange={handleChange} />
                <SubmitButton onClick={submitLoginForm} loading={loading} />
            </form>
        </div>
    );
}

export default Login;