import './Header.css'
import React from 'react'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header-section'>
            <img src={logo} alt="logo" />
            <div className='nav-item-section'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}

export default Header