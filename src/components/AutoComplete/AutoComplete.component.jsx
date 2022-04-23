import { useState } from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

const AutoComplete = ({ formData, setFormData }) => {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    })

    const handleSelect = async (value) => {
        const result = await geocodeByAddress(value);

        const ll = await getLatLng(result[0]);
        setAddress(value);
        setCoordinates(ll);
        const location = {
            address: value,
            coordinates: ll,
        }
        setFormData({...formData, location: location});
    }

    return (
        <div className="container-fluid px-0 mb-1">
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <div className="form-floating mb-1">
                            <input name="location"
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input form-control',
                                })}
                            />
                            <label htmlFor="loaction">Location</label>
                        </div>

                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div key={index}
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
            </PlacesAutocomplete>
            <div className="container-fluid d-flex justify-content-end px-0">
                {/* <p>Address: {address}</p> */}
                <small className="mx-4 text-muted">lat: {coordinates.lat}</small>
                <small className="mx-0 text-muted">lng: {coordinates.lng}</small>
            </div>
        </div>
    )
}

export default AutoComplete;
