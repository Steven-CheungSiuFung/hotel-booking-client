import React from 'react';
import EditHotelForm from '../../../components/EditHotelForm/EditHotelForm.component';
import { editHotel } from '../../../actions/hotel.action';

const EditHotel = () => {

    return (
        <>
            <div className="container-fluid bg-light p-5">
                <h1>Edit Hotel</h1>
            </div>
            <EditHotelForm formSubmitAction={editHotel} />
        </>
        
    )
}

export default EditHotel