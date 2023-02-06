import React, { useState } from 'react'

//import css
import './nav.css';

//import icons
import {FcHome} from 'react-icons/fc';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';


const Nav = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><FcHome /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setActive('#serives')} className={active === '#serives' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contacts" onClick={() => setActive('#contacts')} className={active === '#contacts' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav