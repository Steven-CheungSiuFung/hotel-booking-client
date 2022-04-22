import React, { useState } from 'react';
import InputBox from '../InputBox/InputBox.component';
import AutoComplete from '../AutoComplete/AutoComplete.component';
//
// import PlacesAutocomplete, {geocodeByAddress,geocodeByPlaceId,getLatLng,} from 'react-places-autocomplete';
//
const INITIAL_STATE = {
    title: "",
    location: "",
    content: "",
    bed: "",
    price: "",
    image: {},
    from: "",
    to: ""
}

const NewHotelForm = () => {
    console.log("NEW HOTEL FORM RENDER");
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [preview, setPreview] = useState("https://via.placeholder.com/150.png?text=Preview");

    //
    // const [address, setAddress] = useState("");
    // const [coordinates, setCoordinates] = useState({
    //     lat: null,
    //     lng: null
    // })

    // const handleSelect = async (value) => {
    //     const result = await geocodeByAddress(value);

    //     const ll = await getLatLng(result[0]);
    //     console.log(ll);
    //     setAddress(value);
    //     setCoordinates(ll);
    // }
    //

    const { title, location, content, bed, price, image, from, to } = formData;

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [name]: value});
    }

    const uploadImage = (event) => {
        setPreview(URL.createObjectURL(event.target.files[0]));
        setFormData({...formData, image: event.target.files[0]});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

  return (
    <>
        <div className="container-fluid p-4">
            <div className="row">
                <div className="col-10">
                    <form onSubmit={handleSubmit}>
                        <label className="btn btn-outline-secondary my-3">
                            Upload Image
                            <input type="file" accept="image/*" name="input-image" onChange={uploadImage} hidden/>
                        </label>
                        <InputBox type="text" name="title" value={title} onChange={onChangeHandler} />
                        <InputBox textarea={true} name="content" value={content} onChange={onChangeHandler} />

                        <AutoComplete />
                        {/* <p>lat: {coordinates.lat}</p>
                        <p>lng: {coordinates.lng}</p>
                        <p>Address: {address}</p>
                        <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <input
                                        {...getInputProps({
                                            placeholder: 'Search Places ...',
                                            className: 'location-search-input',
                                        })}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                            <div
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                })}
                                            >
                                                <span>{suggestion.description}</span>
                                            </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete> */}

                        <InputBox type="text" name="bed" value={bed} onChange={onChangeHandler} />
                        <InputBox type="text" name="price" value={price} onChange={onChangeHandler} />
                        <button className="btn btn-outline-primary">Save</button>
                    </form>
                </div>
                <div className="col-2">
                        <img src={preview} alt="preview-placeholder" className="img img-fluid"/>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default NewHotelForm;