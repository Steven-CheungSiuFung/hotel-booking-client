import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../../components/DashboardNav/DashboardNav.component';
import StripeConnect from '../../components/StripeConnect/StripeConnect.component';

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid bg-light p-5">
                <StripeConnect />
            </div>
            <DashboardNav />
            <div className="container-fluid py-3">
                <div className="row d-flex align-items-center">
                    <div className="col-md-10">
                        <h2 className="my-auto">Your booking</h2>
                    </div>
                    <div className="col-md-2">
                        <Link to="/" className="btn btn-primary">Browse Hotels</Link>
                    </div>
                </div>
            </div>
        </>
        

    )
};

export default Dashboard;