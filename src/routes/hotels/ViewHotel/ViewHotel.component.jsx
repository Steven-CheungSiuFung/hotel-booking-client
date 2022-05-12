import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { getHotelDetail } from '../../../actions/hotel.action';
import { getSessionId } from '../../../actions/stripe.action';
import { selectCurrentUser } from '../../../store/user/user.selector';
import DateSelect from "../../../components/DateSelect/DateSelect.component";

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

const INITIAL_FORM = {
    hotelId: "",
    from: "",
    to: "",
}

const ViewHotel = () => {
    let { hotelId } = useParams();
    const [hotel, setHotel] = useState(INITIAL_STATE);
    const [formData, setFormData] = useState(INITIAL_FORM);
    const auth = useSelector(selectCurrentUser);
    const navigate = useNavigate();

    const readHotel = async () => {
        const response = await getHotelDetail(hotelId);
        const hotelData = response.data;
        hotelData.location = await JSON.parse(hotelData.location);
        setHotel(hotelData);
        setFormData({...formData, hotelId: hotelId});
    }

    useEffect(() => {
        readHotel();
    },[])


    const handleClick = async (event) => {
        event.preventDefault();
        console.log(formData);
        if (auth && auth.token) {
            let response = await getSessionId(auth.token, formData);
            window.location.href = response.data.sessionURL;
        } else {
            navigate("/login");
        }
    }

    return (
        <div className="container-fluid px-0">
            <div className="bg-theme-color bg-primary-header d-flex justify-content-center align-items-center p-5">
                <h1 className="d-flex text-white">{hotel.title}</h1>
            </div>
            <div className="row px-4 py-3">
                <div className="col-md-5 col-12 py-4 text-center">
                    <img className="img-fluid" src={`${process.env.REACT_APP_API}/hotel/image/${hotelId}`} alt="hotel-preview" />
                </div>
                <div className="col-md-7 col-12 d-flex flex-column p-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h3>{`${hotel.title}`}</h3>                            
                        </div>
                        <div className="d-flex">
                            <i className="py-1 text-muted">{`Posted by: ${hotel.postedBy?.name}`}</i>
                        </div>
                    </div>

                    <div className="w-auto mb-2" style={{height: "3rem"}}>
                        <p>{`${hotel.content}`}</p>
                    </div>
                    <p>{`${hotel.location?.address}`}</p>
                    <p>{`${hotel.bed} bed`}</p>
                    <p><strong>{`USD $${hotel.price} / day`}</strong></p>
                 
                    <div className="d-flex">
                        <p className="me-1"><strong>Available From: </strong></p>
                        <p className="mx-2">{`${moment(hotel.from).format("DD MMMM YYYY")}`}</p>
                        <p className="mx-1">-</p>
                        <p className="mx-2">{`${moment(hotel.to).format("DD MMMM YYYY")}`}</p> 
                    </div>
                    <div className="d-flex py-3">
                        <DateSelect formData={formData} setFormData={setFormData} to={moment(hotel.to).format("DD MMMM YYYY")}/>
                    </div>   

                    <button onClick={handleClick} className="btn btn-outline-secondary btn-theme-color">
                        {auth ? "Book Now" : "Login"}
                    </button>
                </div>
            </div>

        </div>
        
    )
};

export default ViewHotel;