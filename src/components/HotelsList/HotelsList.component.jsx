import React, { useEffect, useState } from 'react';
import { getHotels } from '../../actions/hotel.action';
import HotelCard from '../HotelCard/HotelCard.component';

const HotelsList = () => {
    const [hotels, setHotels] = useState([]);

    const getHotelsList = async () => {
        const hotelsData = await getHotels();
        console.log(hotelsData.data);
        setHotels(hotelsData.data);
        console.log(hotels);
    }

    useEffect(() => {
        getHotelsList();
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div>HotelsList</div>
                <div className="row gap-3 d-flex justify-content-start">
                    {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
                </div>
            </div> 
        </>
    )
}

export default HotelsList