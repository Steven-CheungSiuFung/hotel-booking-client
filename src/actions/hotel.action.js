import axios from "axios";

export const createHotel = async (token, data) => await axios.post(
    `${process.env.REACT_APP_API}/create-hotel`, 
    data, 
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
);

export const getHotels = async () => await axios.get(
    `${process.env.REACT_APP_API}/hotels`,
)

export const getSellerHotels = async (token) => await axios.get(
    `${process.env.REACT_APP_API}/seller-hotels`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
);

export const editHotel = async (token, data) => await axios.post(
    `${process.env.REACT_APP_API}/edit-hotel`,
    data,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
)