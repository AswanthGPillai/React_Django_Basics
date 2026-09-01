import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
    return (
        <div>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
            </NavLink>


            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                Contact
            </NavLink>
            
        </div>
    )
}

export default Header