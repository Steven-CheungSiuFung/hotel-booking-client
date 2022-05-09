import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../../actions/auth.action';
import { signInUser } from '../../store/user/user.action';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const INITIAL_STATE ={
        email: "",
        password: "",
    }

    const [ loginFormState, setLoginFormState ] = useState(INITIAL_STATE);
    const { email, password } = loginFormState;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setLoginFormState((prevState) => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login({
                email: email,
                password: password,
            });
            window.localStorage.setItem("auth", JSON.stringify(response.data));
            dispatch(signInUser(response.data));
            navigate("/dashboard");
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div className="p-4">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input required type="email" className="form-control" name="email" value={email} placeholder="Enter email" onChange={handleChange} autoComplete="off"/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input required type="password" className="form-control" name="password" value={password} placeholder="Enter password" onChange={handleChange} autoComplete="off"/>
                    <label htmlFor="password">password</label>
                </div>
                <div class="d-grid gap-2 py-2">
                    <button className="btn btn-outline-secondary">Login</button>
                </div> 
            </form>
        </div>
    )
}

export default LoginForm