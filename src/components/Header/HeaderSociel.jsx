import React from 'react'

//import icons
import {FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';

const HeaderSociel = () => {
  return (
    <div className='header__sociel'>
        <a href="https://www.linkedin.com/in/md-khadikul-islam-91b80821b/" target='_blank'> <FaLinkedin /> </a>
        <a href="https://github.com/khadikul" target='_blank'> <FaGithub /> </a>
        <a href="https://web.facebook.com/profile.php?id=100015347142188" target='_blank'> <FaFacebook /> </a>
    </div>
  )
}

export default HeaderSociel