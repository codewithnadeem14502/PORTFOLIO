import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_contianer">
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
          </ul>
        </article>
        {/* end card 1  */}
        <article className='service'>
          <div className="service_head">
            <h3>App Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
          </ul>
        </article>
{/* end of card 2 */}
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
