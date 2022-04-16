import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom"

const TopNav = () => (
    <Fragment>
        <div className="nav bg-light d-flex justify-content-between">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Register</Link>
        </div>
        <Outlet />
    </Fragment>
    
  )

  export default TopNav;