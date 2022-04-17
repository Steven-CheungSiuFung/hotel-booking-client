import React, { useState } from 'react';
import axios from "axios";

import "./RegisterForm.styles.css";

const RegisterForm = () => {
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
            const response = await axios.post(`http://localhost:8000/api/register`, {
                name,
                email,
                password,
            });
            console.log("REGISTER USER ===> ", response);

            setFormState(INITIAL_STATE);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const key= event.target.name;
        const value= event.target.value;

        setFormState((prevState) => ({...prevState, [key]: value}));
    }
    
    return (
        <div className="p-4">
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
                <button className="btn btn-primary btn-lg">Submit</button>
            </form>
        </div>
        
    )
}

export default RegisterForm;