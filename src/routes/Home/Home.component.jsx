import React from 'react'
import Counter from '../../components/Counter/Counter.component';
import HotelsList from '../../components/HotelsList/HotelsList.component';

const Home = () => {
    return (
        <div className="container-fluid text-center">
            <h1>Home Page</h1>
            <Counter />
            <HotelsList />
        </div>
    )
}

export default Home;