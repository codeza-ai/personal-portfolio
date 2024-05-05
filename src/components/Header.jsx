import React from 'react'
import { Link } from 'react-router-dom'
import "../Header.css"

const Header = () => {
  return (
    <header>
      <div className='searchBox'>
        <input type="text" />
        <button>Search</button>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
