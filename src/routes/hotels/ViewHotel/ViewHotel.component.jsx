import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getHotelDetail } from '../../../actions/hotel.action';
import { getSessionId } from '../../../actions/stripe.action';
import { selectCurrentUser } from '../../../store/user/user.selector';

const INITIAL_STATE = {
    title: "",
    location: {
        address: "",
    },
    content: "",
    bed: "",
    price: "",
    image: {},
    from: "",
    to: "",
    postedBy: {
        _id: "",
        name: "",
    }
}

const ViewHotel = () => {
    let { hotelId } = useParams();
    const [hotel, setHotel] = useState(INITIAL_STATE);
    const auth = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    const readHotel = async () => {
        const response = await getHotelDetail(hotelId);
        const hotelData = response.data;
        hotelData.location = await JSON.parse(hotelData.location);
        console.log(hotelData);
        setHotel(hotelData);
    }

    useEffect(() => {
        readHotel();
    },[])

    const handleClick = async (event) => {
        event.preventDefault();
        if (auth && auth.token) {
            console.log("Booking", auth.token, hotel._id);
            let response = await getSessionId(auth.token, hotel._id);
            window.location.href = response.data.sessionURL;
        } else {
            navigate("/login");
        }
    }

    return (
        <div className="container-fluid px-0">
            <div className="bg-light p-5">
                <h1>{hotel.title}</h1>
            </div>
            <div className="row px-md-4 px-4">
                <div className="col-md-5 col-12 py-4 text-center">
                    <img className="img-fluid" src={`${process.env.REACT_APP_API}/hotel/image/${hotelId}`} alt="hotel-preview" />
                </div>
                <div className="col-md-7 col-12 d-flex flex-column p-3">
                    <h3>{`${hotel.title}`}</h3>
                    <div className="w-auto mb-2" style={{height: "3rem"}}>
                        <p>{`${hotel.content}`}</p>
                    </div>
                    <p>{`${hotel.location?.address}`}</p>
                    <p>{`${hotel.bed} bed`}</p>
                    <p><strong>{`$${hotel.price}`}</strong></p>
                    <div className="d-flex">
                        <p className="me-1"><strong>From: </strong></p>
                        <p className="mx-2">{`${moment(hotel.from).format("DD MMMM YYYY")}`}</p>
                        <p className="mx-1">-</p>
                        <p className="mx-2">{`${moment(hotel.to).format("DD MMMM YYYY")}`}</p> 
                    </div>
                    
                    <i className="mb-3">{`Posted by: ${hotel.postedBy?.name}`}</i>
                    <button onClick={handleClick} className="btn btn-primary">
                        {auth ? "Book Now" : "Login"}
                    </button>
                </div>
            </div>

        </div>
        
    )
};

export default ViewHotel;