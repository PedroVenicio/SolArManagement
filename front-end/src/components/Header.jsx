import React from 'react';
import logo from '../assets/logo/logo.png'
import SearchBar from './SearchBar';


const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt="logo" className='header__logo' />
            </div>

            <SearchBar />
        </div>
    )
}

export default Header