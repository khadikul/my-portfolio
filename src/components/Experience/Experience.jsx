import React from 'react'

//import css
import './experience.css';

//import icons
import {AiFillHtml5} from 'react-icons/ai';
import {DiBootstrap, DiCss3, DiDatabase, DiJavascript, DiReact} from 'react-icons/di';
import {SiLaravel, SiPhp, SiTailwindcss} from 'react-icons/si';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontent">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiBootstrap />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiReact />
              <div>
                <h4>React js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiPhp />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiLaravel />
              <div>
                <h4>Larevl</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiDatabase />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience