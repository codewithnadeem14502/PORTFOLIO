import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const data = [

  {
    id:1,
    image:IMG1,
    title: 'title of the project',
    github:'https://github.com',
    demo:'https://facebook.com'
  },
  {
    id:2,
    image:IMG2,
    title: 'title of the project',
    github:'https://github.com',
    demo:'https://facebook.com'
  },
  {
    id:3,
    image:IMG3,
    title: 'title of the project',
    github:'https://github.com',
    demo:'https://facebook.com'
  },
  {
    id:4,
    image:IMG4,
    title: 'title of the project',
    github:'https://github.com',
    demo:'https://facebook.com'
  },
  {
    id:5,
    image:IMG5,
    title: 'title of the project',
    github:'https://github.com',
    demo:'https://facebook.com'
  },
  {
    id:6,
    image:IMG6,
    title: 'title of the project',
    github:'https://github.com',
    demo:'https://dribble.com'
  }
]



export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container protfolio_container">
     {
       data.map(({id,image,title,github,demo}) =>{
        return(
          <article key={id} className='protfolio_item'>
          <div className="protfolio_item_image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
           <div className="protfolio_item_cta">
           <a href={github}className='btn' target='_blank'> GitHub</a>
         
         <a href={demo}className='btn btn-primary' target='_blank'> Live Demo</a>
           </div>
        
        </article>
        )
       })
     }
       
      </div>
    </section>
  )
}
export default Portfolio;