import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateCurrentHotel } from '../../store/hotel/hotel.action';

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
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center px-1">
                <div className="card text-center" style={{width: "16rem"}}>
                    <Link to={`/hotel/${hotel._id}`}>
                        {hotel.image && hotel.image.contentType 
                            ? 
                            (<img className="card-img-top" src={`${process.env.REACT_APP_API}/hotel/image/${hotel._id}`} alt="hotel" />) 
                            : 
                            (<img className="card-img-top" src="https://via.placeholder.com/200.png?text=Preview" alt="hotel" />)
                        }
                        
                        <div className="card-body">
                            <h5 className="card-title">{hotel.title}</h5>
                            <p className="card-text">{`${location.address}`}</p>
                            <div className="d-flex justify-content-around">
                                <p className="d-flex">{`${hotel.bed} bed`}</p>
                                <p className="d-flex">{`price: ${hotel.price}`}</p>
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