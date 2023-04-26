import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assests/avatar1.jpg';
import AVTR2 from '../../assests/avatar2.jpg';
import AVTR3 from '../../assests/avatar3.jpg';
import AVTR4 from '../../assests/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';




const data = [
  {
    avatar : AVTR1,
     name: 'Olivia',
      review: '""As the CEO of a major corporation, I have had the pleasure of working with many talented frontend developers over the years. However, [your name] stands out as one of the most impressive developers I have ever had the pleasure of working with. Her expertise in ReactJS and frontend development is second to none, and her ability to deliver high-quality work on time and within budget is truly remarkable."',
  
  },
  {
    avatar : AVTR2,
     name: 'Shatta Wale',
     review: '"What I appreciated most about working with [your name] was their willingness to collaborate with the team and take on new challenges. They were always eager to share their knowledge and expertise, and their hardworking attitude and positive energy were contagious."',
  },
  {
    avatar : AVTR3,
     name: 'Kwame Despite',
     review: '"I had the pleasure of working with [your name] on a complex ReactJS project, and I was thoroughly impressed with her skills as a frontend developer. Her attention to detail and ability to translate design concepts into functional, responsive user interfaces was truly remarkable."',
  },
  {
    avatar : AVTR4,
     name: 'Elizabeth',
    review: '"I had the pleasure of working with Nadeem on a ReactJS project, and I must say that their passion and hardworking attitude towards technology is truly inspiring. As a frontend developer, they are highly skilled in ReactJS and have an excellent eye for detail when it comes to designing and developing user interfaces."',
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
  
      <Swiper className="container testimonials_container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
    
       pagination={{ clickable: true }}
       >
        {data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'> {review}</small>
            </SwiperSlide>
          )
       })
     }
     </Swiper>
    </section>
  )
}

export default Testimonials;
