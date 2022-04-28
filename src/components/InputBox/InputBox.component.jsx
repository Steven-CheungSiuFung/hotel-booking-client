import React from 'react'

const InputBox = ({ type, name, value, placeholder, onChange, textarea }) => {
    const capName = name[0].toUpperCase()+name.slice(1);
    const placeholderWords = placeholder ? placeholder : `Enter ${capName}`;
    return (
        <div className="form-floating mb-3">
            {textarea 
                ? 
                <textarea className="form-control" placeholder={placeholderWords} name={name} value={value} style={{height: "100px"}} onChange={onChange} autoComplete="off" /> 
                : 
                <input required type={type} className="form-control" name={name} value={value} placeholder={placeholderWords} onChange={onChange} autoComplete="off"/>
            }
            <label htmlFor={value}>{capName}</label>
        </div>
    )
}

export default InputBox