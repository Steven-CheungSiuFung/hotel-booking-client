import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { register } from '../../actions/auth.action';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./RegisterForm.styles.css";

const RegisterForm = () => {
    const navigate = useNavigate();

    const INITIAL_STATE = {
        name: "",
        email: "",
        password: "",
    };

    const [ formState, setFormState ] = useState(INITIAL_STATE);
    const { name, email, password } = formState;


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await register({
                name,
                email,
                password,
            });

            console.log("REGISTER USER ===> ", response);
            toast.success("Register Success!", {theme: "colored"});
            setFormState(INITIAL_STATE);
            setTimeout(() => {navigate("/login")}, 2000);

        } catch (error) {
            toast.error(error.response.data, {theme: 'dark'});
        }
    }

    const handleChange = (event) => {
        const key= event.target.name;
        const value= event.target.value;

        setFormState((prevState) => ({...prevState, [key]: value}));
    }
    
    return (
        <div className="p-4">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input required type="text" className="form-control" name="name" value={name} placeholder="Enter Name" onChange={handleChange} autoComplete="off"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input required type="email" className="form-control" name="email" value={email} placeholder="Enter email" onChange={handleChange} autoComplete="off"/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input required type="password" className="form-control" name="password" value={password} placeholder="Enter password" onChange={handleChange} autoComplete="off"/>
                    <label htmlFor="password">password</label>
                </div>
                <div class="d-grid gap-2 py-2">
                    <button className="btn-theme">Submit</button>
                </div> 
            </form>
        </div>
        
    )
}

export default RegisterForm;