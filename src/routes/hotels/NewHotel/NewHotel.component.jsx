import React from 'react';
import NewHotelForm from '../../../components/NewHotelForm/NewHotelForm.component';
import { createHotel } from '../../../actions/hotel.action';


const NewHotel = () => {

    return (
        <>
            <div className="container-fluid bg-light p-5">
                <h1>Add New Hotel</h1>
            </div>
            <NewHotelForm formSubmitAction={createHotel} />
        </>
        
    )
}

export default NewHotel