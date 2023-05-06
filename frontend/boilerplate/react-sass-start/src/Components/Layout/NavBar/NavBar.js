import React from 'react'
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}
