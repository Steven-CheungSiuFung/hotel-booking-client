import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm/LoginForm.component';

import "./Login.styles.css";

const Login = () => {
    return (
        <>
            <div className="container-fluid bg-white p-5 text-center">
                <h2>LOGIN</h2>
            </div>

            <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <LoginForm />
                  </div>
                  <div className="col-md-6 offset-md-3 px-3">
                    <div className="px-3 d-flex align-items-center">
                      <h6 className="d-flex">Don't have an account?</h6>
                      <Link className="d-flex px-3" to="/register"><h6 className="login-to-register">Register</h6></Link>
                    </div>
                  </div>
                </div>
                
            </div>
        </>
    )
}

export default Login;