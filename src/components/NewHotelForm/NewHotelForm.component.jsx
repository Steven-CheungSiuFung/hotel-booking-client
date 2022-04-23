import React, { useState } from 'react';
import InputBox from '../InputBox/InputBox.component';
import AutoComplete from '../AutoComplete/AutoComplete.component';
import DateSelect from "../DateSelect/DateSelect.component";

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

const NewHotelForm = () => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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
                        <InputBox textarea={true} name="content" value={content} onChange={onChangeHandler} />
                        <AutoComplete formData={formData} setFormData={setFormData} />
                        <InputBox type="text" name="bed" value={bed} onChange={onChangeHandler} />
                        <InputBox type="text" name="price" value={price} onChange={onChangeHandler} />
                        <DateSelect formData={formData} setFormData={setFormData} />
                        <div className="d-grid py-2">
                            <button className="btn btn-outline-primary">Save</button>
                        </div>
                        

                    </form>
                </div>
    </>
  )
}

export default NewHotelForm;