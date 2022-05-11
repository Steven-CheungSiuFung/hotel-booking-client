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
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center px-0">
                <div className="d-flex flex justify-content-center align-items-center hotels-list-header">
                    <div className="d-flex hotel-list-header-banner justify-content-center align-items-center">
                        <div className="d-flex flex-column w-75 align-items-start">
                            <h1 className="text-white">Start your next trip</h1>
                            <h5 className="text-white">Search for your destination and discover new experiences...</h5>
                        </div>
                    </div>
                    <div className="w-75 serach-form-container">
                        <SearchHotelForm searchHotels={searchHotels} />
                    </div>
                </div>
                {/* <div className="container-fluid d-flex justify-content-center py-3 mt-5">
                    <div className="d-flex w-75">
                        <SearchHotelForm searchHotels={searchHotels} />
                    </div>
                </div> */}
                <div className="container-fluid d-flex justify-content-center py-3">
                    <div className="row gap-0 d-flex justify-content-start py-3 w-75">
                        <h3 className="pb-3">Explore the World</h3>
                        {hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel} />)}
                    </div>
                </div>
            </div> 
        </>
    )
}

export default HotelsList;