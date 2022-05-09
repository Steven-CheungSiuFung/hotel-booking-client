import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../store/user/user.action";

import "./TopNav.styles.css";

const TopNav = () => {
    const dispatch = useDispatch();
    const auth = useSelector(selectCurrentUser);

    const logout = () => {
        dispatch(signOutUser());
        window.localStorage.removeItem("auth");
    }

    return (
        <Fragment>
            <div className="top-nav-bar position-sticky top-0 shadow-sm bg-white rounded d-flex justify content-center p-0 m-0">
                <div className="nav bg-white d-flex justify-content-between mx-auto py-2 w-75">
                    <div className="d-flex">
                        <Link className="nav-link nav-bar-icon" to="/">HOTELS</Link>
                    </div>
                    <div className="d-flex">
                        {auth 
                            ? 
                            <Fragment>
                                <Link className="nav-link nav-bar-link" to="/dashboard">Dashboard</Link>
                                <Link className="nav-link nav-bar-link" to="/login" onClick={logout}>Logout</Link>
                            </Fragment> 
                            : 
                            <Fragment>
                                <Link className="nav-link nav-bar-link" to="/login">Login</Link>
                                <Link className="nav-link nav-bar-link" to="/register">Register</Link>
                            </Fragment>
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

  export default TopNav;