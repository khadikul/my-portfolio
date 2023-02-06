import React from 'react'

//import css
import './footer.css';

//import icons
import { FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Khadikul</a>
      <ul className='footer__nav'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      <div className="footer__sociels">
        <a href="https://web.facebook.com/profile.php?id=100015347142188" target='_blank'><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="https://twitter.com/mdkhadikul" target='_blank'><FaTwitter /></a>
      </div>
      <div className="footer__copyRight">
        <small>&copy; khadikul 2023. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer