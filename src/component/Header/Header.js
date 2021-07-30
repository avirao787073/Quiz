import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="title">Quiz Hub</Link>
            <hr className="devider" />
        </div>
    )
}

export default Header;
