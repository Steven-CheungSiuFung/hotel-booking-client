import React, { useEffect, useRef } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/user/user.selector';
import { getAccountStatus } from '../../../actions/stripe.action';
import { updateUserInLocalStorage } from '../../../actions/auth.action';
import { signInUser } from '../../../store/user/user.action';

// 1. get user.stripe_account_id from database
// 2. get user's stripe account status from stripe by user.stripe_account_id
// 3. update user data in database with the stripe account object as user.stripe_seller
// 4. send back the updated user object to frontend
// 5. store updated user in localStorage and redux user state
// 6. redirect to some where
const StripeCallback = () => {
    const isLoading = useRef(false);
    const dispatch = useDispatch();
    const auth = useSelector(selectCurrentUser);

    const accountStatus = async () => {
        try {
            const response = await getAccountStatus(auth.token);
            //update localStorage
            updateUserInLocalStorage(response.data, () => {
                // update redux
                dispatch(signInUser(response.data));
                // redirect
                window.location.href = "/dashboard/seller";
            });
            isLoading.current = false;
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (auth && auth.token && !isLoading.current) {
            isLoading.current = true;
            accountStatus();
        }
    }, []);


    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <LoadingOutlined className="h1" />
        </div>
    )
};

export default StripeCallback;