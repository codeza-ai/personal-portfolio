import React from 'react'
import './Home.css'
import Avatar from '@mui/material/Avatar';
import TagButton from '../components/TagButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SkillCard from '../components/SkillCard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Home = () => {
  return (
    <>
      <main className='hero'>
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
            <h2>A front-end React developer and a tech enthusiast</h2>
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
        <div className='skill-cards'>
          <SkillCard skillName='HTML' skillLevel={80} imgSource='skills/html.png'/>
          <SkillCard skillName='CSS' skillLevel={70} imgSource='skills/css.png'/>
          <SkillCard skillName='JavaScript' skillLevel={60} imgSource='skills/javascript.png'/>
          <SkillCard skillName='React' skillLevel={50} imgSource='skills/react.png'/>
          <SkillCard skillName='MUI' skillLevel={40} imgSource='skills/mui.png'/>
          <SkillCard skillName='MongoDB' skillLevel={30} imgSource=''/>
        </div>
      </div>
      <div id='projects'>
        <h1>These are the projects I have worked on</h1>
        <div className='project-overview'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam voluptatem modi odit ipsum consequatur cumque ipsam deleniti rerum dolorem maxime, quasi fugit quod esse tempora minus, molestias blanditiis! Consectetur iusto repellat voluptate unde esse ab fugiat dolorum itaque quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam voluptatem modi odit ipsum consequatur cumque ipsam deleniti rerum dolorem maxime, quasi fugit quod esse tempora minus, molestias blanditiis! Consectetur iusto repellat voluptate unde esse ab fugiat dolorum itaque quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam voluptatem modi odit ipsum consequatur cumque ipsam deleniti rerum dolorem maxime, quasi fugit quod esse tempora minus, molestias blanditiis! Consectetur iusto repellat voluptate unde esse ab fugiat dolorum itaque quod.</p>
        </div>
        <TagButton iconButton={<ManageAccountsIcon/>} tag='View Projects' href='/projects'/>
      </div>
    </>
  )
}

export default Home
