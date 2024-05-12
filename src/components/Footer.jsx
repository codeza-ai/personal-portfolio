import React from 'react'
import "./Footer.css"
import Avatar from '@mui/material/Avatar';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TagButton from './TagButton';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer>
      <div className='about'>
        <div>
          <Avatar
            alt="Darshan Odedara"
            src="Profile.jpg"
            sx={{ width: 200, height: 200 }}
          />
        </div>
        <h3>Want to collaborate for exciting projects?</h3>
        <h3>Let's work together</h3>
        <TagButton iconButton={<ConnectWithoutContactIcon />} tag='Collaborate >' href='contact' />
      </div>
      <div className='social-medias'>
        <h1>Reach out to me</h1>
        <div className='sm-links'>
          <a href="https://www.linkedin.com/in/darshan-odedara-0b7b4a1b0/">
            <LinkedInIcon style={{ fontSize: 40 }} />
          </a>
          <a href="">
            <MailIcon style={{ fontSize: 40 }} />
          </a>
          <a href="">
            <WhatsAppIcon style={{ fontSize: 40 }} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
