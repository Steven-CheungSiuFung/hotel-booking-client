import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../store/user/user.action";

const TopNav = () => {
    const dispatch = useDispatch();
    const auth = useSelector(selectCurrentUser);

    const logout = () => {
        dispatch(signOutUser());
        window.localStorage.removeItem("auth");
    }

    return (
        <Fragment>
            <div className="nav bg-light d-flex justify-content-between">
                <Link className="nav-link" to="/">Home</Link>
                {auth 
                    ? 
                    <Fragment>
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        <Link className="nav-link" to="/login" onClick={logout}>Logout</Link>
                    </Fragment> 
                    : 
                    <Fragment>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                    </Fragment>
                }
            </div>
            <Outlet />
        </Fragment>
    )
}

  export default TopNav;