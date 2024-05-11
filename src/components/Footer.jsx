import React from 'react'
import "./Footer.css"
import Avatar from '@mui/material/Avatar';

const Footer = () => {
  return (
    <footer>
        <div className='about'>
            <h2>Work together!</h2>
            <div>
              <Avatar
                alt="Darshan Odedara"
                src="/Profile.jpg"
                sx={{ width: 150, height: 150 }}
              />
            </div>
            <p>Here goes the description about the company</p>
        </div>
        <div className='social-medias'></div>
    </footer>
  )
}

export default Footer
