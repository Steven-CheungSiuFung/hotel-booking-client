import React from 'react';
import { Link } from "react-router-dom";

import "./DashboardNav.styles.css";

const DashboardNav = () => {
    const active = window.location.pathname;
    return (
        <div className="container-fluid px-0 dashboard-nav d-flex justify-content-start">
            <ul className="dashboard-nav-tabs d-flex">
                <li className="dashboard-nav-item d-flex justify-content-center">
                    <Link className={`dashboard-nav-item-link ${active === "/dashboard" ? "dashboard-nav-active" : "dashboard-nav-inactive"}`} to="/dashboard">Your booking</Link>
                </li>
                <li className="dashboard-nav-item d-flex justify-content-center">
                    <Link className={`dashboard-nav-item-link ${active === "/dashboard/seller" ? "dashboard-nav-active" : "dashboard-nav-inactive"}`} to="/dashboard/seller">Your hotels</Link>
                </li>
            </ul>
            <div className="d-flex dashboard-nav-placeholder"></div>     
        </div>

    )
};

export default DashboardNav;