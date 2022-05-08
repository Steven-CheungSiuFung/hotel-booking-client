import React, { useState } from 'react';

import AutoComplete from '../AutoComplete/AutoComplete.component';
import DateSelect from '../DateSelect/DateSelect.component';
import NumberSelect from "../NumberSelect/NumberSelect.component";

import { SearchOutlined } from "@ant-design/icons";

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
                <div className="d-flex justify-content-center">
                    <div className="d-flex mt-2">
                        <AutoComplete formData={formData} setFormData={setFormData} />
                    </div>
                    <div className="d-flex">
                        <DateSelect formData={formData} setFormData={setFormData} />
                    </div>
                    <div className="d-flex">
                        <NumberSelect formData={formData} setFormData={setFormData} />
                    </div>
                    <div className="d-flex">
                        <button className="btn border-0"><SearchOutlined /></button>
                    </div>             
                </div>
            </form>
        </div>
    )
}

export default SearchHotelForm;