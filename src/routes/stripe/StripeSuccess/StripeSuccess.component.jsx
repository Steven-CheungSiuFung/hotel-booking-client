import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { selectCurrentUser } from '../../../store/user/user.selector';
import { stripeSuccessRequest } from '../../../actions/stripe.action';

const StripeSuccess = () => {
    const navigate = useNavigate();
    const { hotelId } = useParams();
    const { token } = useSelector(selectCurrentUser);

    const stripeSuccess = async () => {
        const response = await stripeSuccessRequest(token, hotelId);
        if (response.data.success) {
            navigate("/dashboard");
        } else {
            navigate("/stripe/checkout-failure");
        }
    }

    useEffect(() => {
        stripeSuccess();
    }, [])

    return (
        <div className="container">
            <div className="d-flex justify-content-center p-5">
                <h1>Payment Success</h1>
            </div>
        </div>
    )
}

export default StripeSuccess;