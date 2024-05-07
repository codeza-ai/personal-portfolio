import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header2 = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link className='nav-buttons' to="/home">Home</Link></li>
                <li><a className='nav-buttons' href="/home#skills">Skills</a></li>
                <li><a className='nav-buttons' href="/home#projects">Projects</a></li>
                <li><Link className='nav-buttons' to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header2
