import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'


const data = [
  {
    avatar: AVTR1,
    name: "Name 1",
    review: "dfasdfewt adipisicing elit. Amet laborum quasi minima reprehenderit maxime, exercitationem itaque nisi, nihil debitis fuga cupiditate quam consequuntur pariatur voluptate!"
  },
  {
    avatar: AVTR2,
    name: "Name 2",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet laborum quasi minima reprehenderit maxime, exercitationem itaque nisi, nihil debitis fuga cupiditate quam consequuntur pariatur voluptate!"
  },
  {
    avatar: AVTR3,
    name: "Name 3",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet laborum quasi minima reprehenderit maxime, exercitationem itaque nisi, nihil debitis fuga cupiditate quam consequuntur pariatur voluptate!"
  },
  {
    avatar: AVTR4,
    name: "Name 4",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet laborum quasi minima reprehenderit maxime, exercitationem itaque nisi, nihil debitis fuga cupiditate quam consequuntur pariatur voluptate!"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>

                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials