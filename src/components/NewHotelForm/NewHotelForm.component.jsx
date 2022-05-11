import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import InputBox from '../InputBox/InputBox.component';
import AutoComplete from '../AutoComplete/AutoComplete.component';
import DateSelect from "../DateSelect/DateSelect.component";
import NumberSelect from "../NumberSelect/NumberSelect.component";


// import { createHotel } from "../../actions/hotel.action";

const INITIAL_STATE = {
    title: "",
    location: {},
    content: "",
    bed: "",
    price: "",
    image: {},
    from: "",
    to: ""
}

const NewHotelForm = ({formSubmitAction}) => {
    const auth = useSelector(selectCurrentUser);
    const { token } = auth;

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [preview, setPreview] = useState("https://via.placeholder.com/150.png?text=Preview");

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const fd = new FormData();
        Object.keys(formData).map((key) => {
            return fd.append(key, formData[key]);
        })
        const response = await formSubmitAction(token, fd);
        console.log(response.data);
        setFormData(INITIAL_STATE);
    }

  return (
    <>
        <div className="container-fluid p-4">
                    <form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-8">
                                <label className="btn btn-outline-secondary my-3">
                                    Upload Image
                                    <input type="file" accept="image/*" name="input-image" onChange={uploadImage} hidden/>
                                </label>
                            </div>

                            <div className="col-4 w-10 h-10 d-flex justify-content-end">
                                <img src={preview} alt="preview-placeholder" className="img img-fluid"/>
                            </div>
                        </div>

                        <InputBox type="text" name="title" value={title} onChange={onChangeHandler} />
                        <AutoComplete formData={formData} setFormData={setFormData} />
                        <InputBox textarea={true} name="content" value={content} onChange={onChangeHandler} />
                        
                        <div className="d-flex justify-content-between py-3">
                            <div className="d-flex px-2">
                                <NumberSelect formData={formData} setFormData={setFormData} />
                                {/* <InputBox type="text" name="bed" value={bed} onChange={onChangeHandler} /> */}
                            </div>
                            <div className="d-flex">
                                <DateSelect formData={formData} setFormData={setFormData} />
                            </div>
                        </div>
                        
                        <InputBox type="text" name="price" value={price} onChange={onChangeHandler} />
                        <div className="d-grid py-2">
                            <button className="btn btn-outline-primary">Save</button>
                        </div>
                        

                    </form>
                </div>
    </>
  )
}

export default NewHotelForm;