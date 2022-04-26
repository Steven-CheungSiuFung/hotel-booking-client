import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import DashboardNav from '../../components/DashboardNav/DashboardNav.component';
import StripeConnect from '../../components/StripeConnect/StripeConnect.component';

import { createConnectAccount } from '../../actions/stripe.action';

import { BankOutlined, LoadingOutlined } from "@ant-design/icons";
import SellerHotels from '../../components/SellerHotels/SellerHotels.component';

const DashboardSeller = () => {
    const auth = useSelector(selectCurrentUser);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        // 1. create a stripe account by user._id and save the stripe_account_id to db,
        // 2. create a login link by stripe_account_id,
        // 3. redirect to the stripe login page,
        // 4. redirect user to <StripeCallback /> after connected to stripe 
        setIsLoading(true);
        try {
            const response = await createConnectAccount(auth.token);
            window.location.href = response.data;
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const connected = () => {
        return (
            <div className="container-fluid py-3">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex">
                        <h2 className="my-auto">Your hotels</h2>
                    </div>
                    <div className="d-flex">
                            <Link to="/hotels/new-hotel" className="btn btn-primary">+ Add Hotels</Link>
                    </div>
                </div>
                <div className="d-flex">
                    <SellerHotels />
                </div>
            </div>
        )
    }

    const notConnected = () => {
        return(
            <div className="container-fluid py-3">
                <div className="d-flex flex-column align-items-center justify-content-center text-center py-5">
                        <BankOutlined className="h1 my-2" />
                        <h4 className="mb-1">Please setup payout to post hotel rooms</h4>
                        <p className="lead my-2">Connect with Stripe to transfer earnings to your bank account</p>
                        {isLoading 
                            ? <LoadingOutlined className="h3 my-3" /> 
                            : <button onClick={handleClick} className="btn btn-primary my-3">Connect Stripe</button>
                        }
                        <p className="text-muted my-0"><small>You will be redirected to Stripe to complete the onboarding process</small></p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container-fluid bg-light p-5">
                <StripeConnect />
            </div>
            <DashboardNav />
            {auth 
                && auth.user 
                && auth.user.stripe_seller 
                && auth.user.stripe_seller.charges_enabled 
                ? connected() 
                : notConnected()
            }
        </>
        

    )
};

export default DashboardSeller;