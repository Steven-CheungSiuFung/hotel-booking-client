import React from 'react'
import NewHotelForm from '../../../components/NewHotelForm/NewHotelForm.component'
import StripeConnect from '../../../components/StripeConnect/StripeConnect.component'

const NewHotel = () => {

    return (
        <>
            <div className="container-fluid bg-light p-5">
                <StripeConnect />
            </div>
            <NewHotelForm />
        </>
        
    )
}

export default NewHotel