import React from 'react';
import './Header.css';
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='header__img' src={logo} alt="" />
        </div>
    )
}

export default Header;