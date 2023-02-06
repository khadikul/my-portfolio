import React from 'react'

//import css
import './portfolio.css';

//import portfolio data
import { portfolioData } from '../../portfolioData';

const Portfolio = () => {
  const data = portfolioData;

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map((items, id) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className="portfolio__item__image">
                  <img src={items.img} alt="" />
                </div>
                <h3>{items.title}</h3>
                <div className="portfolio__item__cta">
                  <a href={items.gitHubLink} target='_blank' className='btn'>Github</a>
                  <a href={items.liveLink} target='_blank' className={items.liveLink === '#' ? 'btn btn-primary disabled__link' : 'btn btn-primary'}>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio