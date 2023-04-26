import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
      <div className="about_me">
   <div className="about_me_image">
     <img src={ME} alt="about image" />
   </div>
      </div>
   <div className="about_content">
      <div className="about_cards">
        <article className="about_card">
          <FaAward className='about_icon'/>
     <h5> Experience</h5>
     <small>0-1 Years</small>
        </article>
        <article className="about_card">
          <FiUsers className='about_icon'/>
     <h5> Clients</h5>
     <small>5+ Clients</small>
        </article>
        <article className="about_card">
          <VscFolderLibrary className='about_icon'/>
     <h5> Projects</h5>
     <small>20+ prjects</small>
        </article>
      </div>
      <p>"Hello, my name is Mohd Nadeem and I am a prefinal year B.Tech CSE student with a passion for web development. I have honed my skills in this area through various projects and am confident in my ability to create dynamic and user-friendly web applications. Additionally, I have experience in contributing to open-source projects, which has allowed me to further develop my problem-solving skills and stay up-to-date with the latest technologies.

As a student, I am always seeking opportunities to learn and grow both personally and professionally. I am eager to apply my expertise and work collaboratively with a team of like-minded individuals to develop innovative solutions that can make a difference."</p>
      <a href='#contact' className='btn btn-primary '> Let's Connect </a>
   </div>

      </div>
    </section>
  )
}

export default About;
