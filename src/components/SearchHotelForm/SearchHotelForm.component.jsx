import React, { useState } from 'react';

import AutoComplete from '../AutoComplete/AutoComplete.component';
import DateSelect from '../DateSelect/DateSelect.component';
import NumberSelect from "../NumberSelect/NumberSelect.component";

import "./SearchHotelForm.styles.css";

const INITIAL_STATE = {
    location: "",
    bed: "",
    from: "",
    to: "",
}

const SearchHotelForm = ({searchHotels}) => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (event) => {
        event.preventDefault();
        searchHotels(formData);
    }

    return (
        <div className="container-fluid py-3 px-0">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <AutoComplete formData={formData} setFormData={setFormData} />
                    </div>
                    <div className="col-12 row pe-0">
                        <div className="col-md-6 col-12">
                            <DateSelect formData={formData} setFormData={setFormData} />
                        </div>
                        <div className="col-md-6 col-12 row pe-0">
                            <div className="col-6">
                                <NumberSelect formData={formData} setFormData={setFormData} />
                            </div>
                            <div className="col-6 d-flex pe-0 pt-2">
                                <button className="btn btn-outline-primary search-button">Search</button>
                            </div> 
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SearchHotelForm;