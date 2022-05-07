import React, { useEffect, useState } from 'react';
import { getFilteredHotels, getHotels } from '../../actions/hotel.action';
import HotelCard from '../HotelCard/HotelCard.component';
import SearchHotelForm from '../SearchHotelForm/SearchHotelForm.component';

import "./HotelList.styles.css"

const HotelsList = () => {
    const [hotels, setHotels] = useState([]);

    const getHotelsList = async () => {
        const hotelsData = await getHotels();
        setHotels(hotelsData.data);
    }

    const searchHotels = async (formData) => {
        console.log("FORM DATA ===>", formData);
        const response = await getFilteredHotels(formData);
        console.log("RESPONSE DATA ===>", response.data);
        setHotels(response.data);
    }

    useEffect(() => {
        getHotelsList();
    }, [])

    return (
        <>
            <div className="container-fluid py-3 px-0">
                <div className="d-flex py-3">
                    <SearchHotelForm searchHotels={searchHotels} />
                </div>
                <div className="row gap-0 d-flex justify-content-start py-3 px-2">
                    {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
                </div>
            </div> 
        </>
    )
}

export default HotelsList;