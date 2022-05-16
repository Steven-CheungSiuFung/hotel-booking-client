import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { getSellerHotels, deleteHotel } from '../../actions/hotel.action';

import HotelCard from '../HotelCard/HotelCard.component';
import Footer from '../Footer/Footer.component';


const SellerHotels = () => {
    const [hotels, setHotels] = useState([]);
    const {token, user} = useSelector(selectCurrentUser);

    const getHotelsList = async () => {
        const hotelsData = await getSellerHotels(token);
        setHotels(hotelsData.data);
    }

    useEffect(() => {
        getHotelsList();
    }, [])

    const handleDeleteHotel = async (hotelId) => {
        if (!window.confirm("Are you sure delete this hotel?")) return;
        const response = await deleteHotel(token, hotelId);
        getHotelsList();
    }

    return (
        <>
            <div className="container-fluid pt-4 d-flex flex-column">
                <div className="row gap-0 d-flex justify-content-start">
                    {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} user={user} handleDeleteHotel={handleDeleteHotel} />)}
                </div>           
            </div> 
        </>
    )
}

export default SellerHotels;