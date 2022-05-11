import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateCurrentHotel } from '../../store/hotel/hotel.action';

import "./HotelCard.styles.css";

const HotelCard = ({hotel, user, handleDeleteHotel}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = JSON.parse(hotel.location);

    const onClickEdit = () => {
        dispatch(updateCurrentHotel(hotel));
        navigate("/hotels/edit-hotel");
    }

    const onClickDelete = () => {
        handleDeleteHotel(hotel._id);
    }
    
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center px-1 py-1">
                <div className="card h-100 text-center" style={{width: "16rem"}}>
                    <Link to={`/hotel/${hotel._id}`}>
                        {hotel.image && hotel.image.contentType 
                            ? 
                            (
                            <div className="bg-light d-flex justify-content-center align-items-center ratio ratio-4x3">
                                <img className="img img-fluid hotel-card-img" src={`${process.env.REACT_APP_API}/hotel/image/${hotel._id}`} alt="hotel" />
                            </div>     
                            ) 
                            : 
                            (<div className="bg-light d-flex justify-content-center align-items-center ratio ratio-4x3">
                                <img className="card-img-top" src="https://via.placeholder.com/200.png?text=Preview" alt="hotel" />
                            </div>
                            )
                        }
                        
                        <div className="card-body">
                            <h5 className="card-title">{hotel.title}</h5>

                            <div className="card-body-location">
                                <p className="card-text text-muted">{`${location.address}`}</p>                                
                            </div>

                            <div className="d-flex justify-content-around align-items-center">
                                <p className="d-flex my-1 card-footer-info">{`${hotel.bed} bed`}</p>
                                <p className="d-flex my-1 card-footer-info">{`USD $${hotel.price} / day`}</p>
                            </div>
                        </div>
                    </Link>
                    {user?._id === hotel.postedBy._id 
                        ? 
                        (<div className="d-flex justify-content-around">
                            <div onClick={onClickEdit}>Edit</div>
                            <div onClick={onClickDelete}>Delete</div>
                        </div>) 
                        : null}
                </div>
            </div>
            
        </>
    )
}

export default HotelCard;