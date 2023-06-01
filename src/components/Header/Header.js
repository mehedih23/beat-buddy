import React from 'react';
import './Header.css';
import logo from '../../assets/beat-buddy-logo.png'

const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col md:flex-row md:items-center md:justify-between bg-green-200'>
            <div>
                <a href="/beat">
                    <img src={logo} alt="Beat Buddy" />
                </a>
            </div>
            <div className='flex flex-col md:flex-row'>
                <a className='my-2 md:my-0 mx-0 md:mx-4' href="/shop">Shop</a>
                <a className='my-2 md:my-0 mx-0 md:mx-4' href="/orders">Orders</a>
                <a className='my-2 md:my-0 mx-0 md:mx-4' href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;