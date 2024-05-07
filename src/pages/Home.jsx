import React from 'react'
import './Home.css'
import Avatar from '@mui/material/Avatar';
import TagButton from '../components/TagButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const Home = () => {
  return (
    <>
      <main>
        <div className='hero-section'>
          <div className='hero-left'>
            <Avatar
              alt="Darshan Odedara"
              src="/Profile.jpg"
              sx={{ width: 300, height: 300 }}
            />
          </div>
          <div className='hero-right'>
            <h1>Hi, I'm <span className='gradient-font'>Darshan</span></h1>
            <h1 className='gradient-font'>Odedara</h1>
            <h2>A Full-Stack web developer and a Tech enthusiast</h2>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione ex in labore provident esse cum earum. Quibusdam, debitis? Minus.</h3>
            <br />
            <div className='sm-buttons'>
                <TagButton iconButton={<GitHubIcon />} tag='GitHub'/>
                <TagButton iconButton={<LinkedInIcon />} tag='LinkedIn'/>
                <TagButton iconButton={<ConnectWithoutContactIcon />} tag='Contact' href='/contact'/>
            </div>
          </div>
        </div>
      </main>
      <div id='skills'>
        <h1>These are my skills</h1>
      </div>
      <div id='projects'>
        <h1>These are the projects I have worked on</h1>
      </div>
    </>
  )
}

export default Home
