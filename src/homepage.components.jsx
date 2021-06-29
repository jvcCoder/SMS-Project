import React from 'react';
import './homepage.style.scss';


const HomePage = () => (
    <div className="homepage">
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> Sign in </h1>
                    <span className='subtitle'> Welcome again </span>
                </div>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'> Sign up </h1>
                <span className='subtitle'> First time here ? Register </span>
            </div>
        </div>
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'> Contact us </h1>
                <span className='subtitle'> Can we help you with something? </span>
            </div>
        </div>
    </div>
);

export default HomePage;