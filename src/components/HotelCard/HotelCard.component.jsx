import React from 'react'
import { Link } from 'react-router-dom';

const HotelCard = ({hotel}) => {
    const location = JSON.parse(hotel.location);
    
    return (
        <>
            <Link to={`/hotel/${hotel._id}`} className="col-lg-3 col-md-4 d-flex justify-content-center">
            <div className="card text-center" style={{width: "16rem"}}>
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
            </div>
            </Link>
        </>
    )
}

export default HotelCard;