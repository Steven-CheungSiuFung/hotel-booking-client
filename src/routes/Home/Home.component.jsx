import React from 'react'
import HotelsList from '../../components/HotelsList/HotelsList.component';
import Footer from '../../components/Footer/Footer.component';

const Home = () => {
    return (
        <>
            <div className="container-fluid text-center px-0 mb-5">
                <HotelsList />
            </div>
            <div className="container-fluid text-center px-0 mt-5">
                <Footer footerTheme="footer-container-color" />
            </div>        
        </>

    )
}

export default Home;