import { Link } from "react-router-dom";
import RegisterForm from "../../../components/RegisterForm/RegisterForm.component";

import "./Register.styles.css";

const Register = () => {

    return (
        <>
            <div className="container-fluid bg-white p-5 text-center">
                <h2>REGISTER</h2>
            </div>

            <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                      <RegisterForm />
                  </div>
                  <div className="col-md-6 offset-md-3 px-3">
                    <div className="px-3 d-flex align-items-center">
                      <h6 className="d-flex">Already have an account?</h6>
                      <Link className="d-flex px-3" to="/login"><h6 className="register-to-login">Login</h6></Link>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Register