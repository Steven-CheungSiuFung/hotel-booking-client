import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import DashboardNav from '../../components/DashboardNav/DashboardNav.component';
import StripeConnect from '../../components/StripeConnect/StripeConnect.component';
import OrderCard from '../../components/OrderCard/OrderCard.component';

import { getHotelBooking } from '../../actions/hotel.action';
import Footer from '../../components/Footer/Footer.component';

const Dashboard = () => {
    const {token} = useSelector(selectCurrentUser);
    const [order, setOrder] = useState([]);

    const loadHotelBooking = async () => {
        const response = await getHotelBooking(token);
        console.log(response.data);
        setOrder(response.data);                 
        
        // try {
        //     const response = await getHotelBooking(token);
        //     console.log(response.data);
        //     if (response.data.hotel) {
        //         setOrder(response.data);                 
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

    }

    useEffect(() => {
        loadHotelBooking();
    }, [])

    return (
        <>
            <div className="container-fluid dashboard-stripe-container p-5">
                <StripeConnect />
            </div>
            <DashboardNav />
            <div className="container-fluid p-3">
                <div className="d-flex align-items-center justify-content-between p-2">
                    <div className="d-flex">
                        <h2 className="my-auto">Your booking</h2>
                    </div>
                    <div className="d-flex">
                            <Link to="/" className="btn-theme">Browse Hotels</Link>
                    </div>
                </div>
                <div className="py-3">
                    {order.map((order) => <OrderCard key={order._id} order={order} />)}
                </div>
            </div>
            <div className="container-fluid text-center px-0 mt-5">
                <Footer footerTheme="footer-container-white" />
            </div>   
        </>
        

    )
};

export default Dashboard;