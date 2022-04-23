import React from 'react'
import NewHotelForm from '../../../components/NewHotelForm/NewHotelForm.component'


const NewHotel = () => {

    return (
        <>
            <div className="container-fluid bg-light p-5">
                <h1>Add New Hotel</h1>
            </div>
            <NewHotelForm />
        </>
        
    )
}

export default NewHotel