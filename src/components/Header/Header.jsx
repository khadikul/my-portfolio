import React from 'react'

//import css
import './header.css';

//import icons
import {} from 'react-icons/bs';

//import components
import CTA from'./CTA';

//import image
import MeImg from '../../assets/web2.png';

//import Sociel
import HeaderSociel from './HeaderSociel';

//import type writer
import Typewriter from 'typewriter-effect';


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Khadikul Islam</h1>
        <h5 className='text-light'>
          <Typewriter
            options={{
              strings: ['Full-Stack Web Developer', 'WordPress Theme Developer'],
              autoStart: true,
              loop: true,
              deleteAll: 3000,
              deleteChars : 50,
            }}
          />
        </h5>
        <CTA />
        <HeaderSociel />
        <div className="me">
          <img src={MeImg} alt="" />
        </div>
        <a href="#contacts" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header