import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div>
            <nav>
                <NavLink to='/'>About</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/user/:fname'>User</NavLink>
                <NavLink to='/search'>Search</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
    )
}

export default Menu
