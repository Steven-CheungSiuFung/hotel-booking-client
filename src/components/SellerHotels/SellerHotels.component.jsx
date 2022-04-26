import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { getSellerHotels } from '../../actions/hotel.action';

import HotelCard from '../HotelCard/HotelCard.component';


const SellerHotels = () => {
    const [hotels, setHotels] = useState([]);
    const {token, user} = useSelector(selectCurrentUser);

    const getHotelsList = async () => {
        const hotelsData = await getSellerHotels(token);
        console.log(hotelsData.data);
        setHotels(hotelsData.data);
        console.log(hotels);
    }

    useEffect(() => {
        getHotelsList();
    }, [])

    return (
        <>
            <div className="container-fluid py-4">
                <div className="row gap-0 d-flex justify-content-start">
                    {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} user={user} />)}
                </div>
            </div> 
        </>
    )
}

export default SellerHotels;