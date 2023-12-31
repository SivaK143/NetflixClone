import React from 'react'
import logo from "../logo.png"
import "../App.css"
import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi"

const Header = () => {
  return (
    <nav className="header">

        <img src={logo} alt="logo" />
        <div>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/tvshows">Movies</Link>
            <Link to="/tvshows">Recently Added</Link>
            <Link to="/tvshows">My List</Link>
        </div>
        <FiSearch className='icon'/>
    </nav>
  )
}

export default Header
