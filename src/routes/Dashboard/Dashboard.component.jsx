import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import DashboardNav from '../../components/DashboardNav/DashboardNav.component';
import StripeConnect from '../../components/StripeConnect/StripeConnect.component';
import OrderCard from '../../components/OrderCard/OrderCard.component';

import { getHotelBooking } from '../../actions/hotel.action';

const Dashboard = () => {
    const {token} = useSelector(selectCurrentUser);
    const [order, setOrder] = useState([]);

    const loadHotelBooking = async () => {
        const response = await getHotelBooking(token);
        console.log(response.data);
        setOrder(response.data);
    }

    useEffect(() => {
        loadHotelBooking();
    }, [])

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
                <div className="py-3">
                    {order.map((order) => <OrderCard key={order._id} order={order} />)}
                </div>
            </div>
        </>
        

    )
};

export default Dashboard;