import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_contianer">
        <article className="service">
          <div className="service_head">
            <h2 className="titlehead">Web Development</h2>
          </div>
          <div className="serivesContaineItem">
            {/* list one */}
            <div>
              <ul className="service_list1">
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Website design and development</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>E-commerce website development</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Content management system (CMS) development</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Web application development</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Search engine optimization (SEO)</p>
                </li>
              </ul>
            </div>
            {/* list two  */}
            <div>
              <ul className="service_list2">
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Website redesign</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Social media integration</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>User experience (UX) design</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Website speed optimization</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Mobile application development </p>
                </li>
              </ul>
            </div>
            {/* list three  */}
            <div>
              <ul className="service_list3">
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Event Booking System</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Document Management System</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Web Application / Business Software</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Blog / News Management</p>
                </li>
                <li>
                  <BsCheckLg className="service_list_icon" />
                  <p>Social Media Integration </p>
                </li>
              </ul>
            </div>
          </div>
        </article>
        {/* end card 1  */}
        {/* <article className='service'>
          <div className="service_head">
            <h3>App Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
          </ul>
        </article> */}
        {/* end of card 2 */}
        {/* <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
            <li>
              <BsCheckLg className='service_list_icon'/>
              <p>COMING - SOON</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
