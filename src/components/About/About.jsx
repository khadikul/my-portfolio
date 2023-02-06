import React from 'react'

//import css
import './about.css';

//import image
import MeImg from '../../assets/web4.png';

//import icons
import {FaAward, FaUser} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'; 

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__image">
            <img src={MeImg} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FaUser className='about__icons' />
              <h5>Clients</h5>
              <small>30 World Wide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icons' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>"Hi there! My name is Khadikul Islam and I am a full-stack web developer and WordPress theme developer. I have a passion for creating functional and visually appealing websites. I have experience in developing websites from scratch, using modern technologies and frameworks. I also have expertise in customizing WordPress themes to meet the specific requirements of clients. I am committed to delivering high-quality results, and I am constantly striving to improve my skills. Let's work together to bring your web development vision to life!"</p>
          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About