import React from 'react'

//import css
import './services.css';

//import icons
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__icons' />
              <p>PSD To Frontend Design</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Figma To Frontend Design</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>React Frontend Development</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>E-commecre Frontend Design</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Blog Frontend Design</p>
            </li>
            <li>
              <p><br /><br /></p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__icons' />
              <p>Any Website Backend Develop Using Php, laravel</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>E-Commerce Website Development</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Website Controll Panel Develop</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Most Functional Website Develop</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Shcool Managment Application</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Hospital Managment Application</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Blog Managment Application</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Wordpress Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='services__icons' />
              <p>PSD To Wordpress Custom Theme</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>PSD To WooCommerce Custom Theme</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Blog Custom Theme Development</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Wordpress Custom Theme Option Using Framework(redux, codestart)</p>
            </li>
            <li>
              <BiCheck className='services__icons' />
              <p>Wordpress Theme Customization Using Elementor</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services