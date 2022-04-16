import React from 'react'
import Counter from '../../components/Counter/Counter.component';

const Home = () => {
    return (
        <div className="container-fluid h1 p-5 text-center">
            <h1>Home Page</h1>
            <Counter />
        </div>
    )
}

export default Home;