import React from 'react';
import moment from 'moment';
import "./OrderCard.styles.css";

const OrderCard = ({order}) => {
    const locationAndCoordinates = JSON.parse(order.hotel.location);

    return (
        <div className="cotainer-fluid order-card-container">
            <div className="row">
                <div className="col-sm-2 col-12 p-3 d-flex">
                    <div className="bg-light d-flex justify-content-center align-items-center ratio ratio-1x1">
                        <img className="img w-100 h-100 order-card-img" src={`${process.env.REACT_APP_API}/hotel/image/${order.hotel._id}`} alt="hotel" />
                    </div>
                </div>
                <div className="col-sm-10 col-12 d-flex flex-column p-3">
                    <div className="d-flex justify-content-between">
                        <p className="h5">{order.hotel.title}</p>
                        <p className="h6 d-flex align-items-center"><small className="text-muted">Booking ID: {order._id}</small></p>
                    </div>
                    <p>{locationAndCoordinates.address}</p>
                    <div className="d-flex">
                        <p className="me-1 h6">From: </p>
                        <p className="mx-2">{`${moment(order.hotel.from).format("DD MMMM YYYY")}`}</p>
                        <p className="mx-1">-</p>
                        <p className="mx-2">{`${moment(order.hotel.to).format("DD MMMM YYYY")}`}</p> 
                    </div>
                    <p className="h6">{`USD $${order.hotel.price} / day`}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;