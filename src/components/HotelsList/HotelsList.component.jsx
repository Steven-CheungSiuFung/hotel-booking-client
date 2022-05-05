import React, { useEffect, useState } from 'react';
import { getHotels } from '../../actions/hotel.action';
import HotelCard from '../HotelCard/HotelCard.component';

const HotelsList = () => {
    const [hotels, setHotels] = useState([]);

    const getHotelsList = async () => {
        const hotelsData = await getHotels();
        setHotels(hotelsData.data);
    }

    useEffect(() => {
        getHotelsList();
    }, [])

    return (
        <>
            <div className="container-fluid py-3">
                <div className="row gap-0 d-flex justify-content-start">
                    {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
                </div>
            </div> 
        </>
    )
}

export default HotelsList