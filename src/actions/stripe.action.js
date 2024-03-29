import axios from "axios";

export const createConnectAccount = async (token) => await axios.post(
    `${process.env.REACT_APP_API}/create-connect-account`, 
    {}, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
);

export const getAccountStatus = async (token) => await axios.post(
    `${process.env.REACT_APP_API}/get-account-status`,
    {},
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    },
);

export const getAccountBalance = async (token) => await axios.post(
    `${process.env.REACT_APP_API}/get-account-balance`,
    {},
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    },
);

export const getPayoutSetting = async (token) => await axios.post(
    `${process.env.REACT_APP_API}/get-payout-setting`,
    {},
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    },
);

export const getSessionId = async (token, formData) => await axios.post(
    `${process.env.REACT_APP_API}/stripe-session-id`,
    {
        formData
    },
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    },
);

export const stripeSuccessRequest = async (token, hotelId) => await axios.post(
    `${process.env.REACT_APP_API}/stripe-checkout-success`,
    {
        hotelId
    },
    {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    },
)