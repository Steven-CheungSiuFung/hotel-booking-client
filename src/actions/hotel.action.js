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

export const editHotel = async (token, data) => await axios.put(
    `${process.env.REACT_APP_API}/edit-hotel`,
    data,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
)

export const deleteHotel = async (token, hotelId) => await axios.delete(
    `${process.env.REACT_APP_API}/delete-hotel/${hotelId}`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
)

export const getHotelDetail = async (hotelId) => await axios.get(
    `${process.env.REACT_APP_API}/hotel-detail/${hotelId}`,
)

export const getHotelBooking = async (token) => await axios.get(
    `${process.env.REACT_APP_API}/user-hotel-booking`,
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    },
)

export const getFilteredHotels = async (formData) => await axios.post(
    `${process.env.REACT_APP_API}/search-hotels`,
    {
        formData
    },
)