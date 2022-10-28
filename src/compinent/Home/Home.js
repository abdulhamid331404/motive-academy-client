import React from 'react';
import logo from '../../images/home-logo.png'

const Home = () => {
    return (
        <div>
            
                <h1 className='text-success'>Welcome to....</h1>
                
            <div>
                 <img src={logo} className="w-100" alt="" />
            </div>
        </div>
    );
};

export default Home;