import React from 'react';
import "./Footer.styles.css";

const Footer = ({footerTheme}) => {
    return (
        <div className={`d-flex justify-content-center py-4 ${footerTheme}`}>
            <div className="d-flex justify-content-center align-content-center">
                <p className="d-flex text-opacity-75 my-0"><small>@Steven Cheung 2022</small></p>                
            </div>
        </div>
    )
}

export default Footer;