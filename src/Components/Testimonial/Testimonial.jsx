import React from 'react'
import './Testimonial.css'
import 'swiper/css'
import 'swiper/css/pagination'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'

const Testimonial = () => {
    const clients=[
        {
            img: profilePic1,
            review:
            "lorem ipsum dolor",
        },
        {
            img: profilePic2,
            review:
            "lorem ipsum dolor",
        },
        {
            img: profilePic3,
            review:
            "lorem ipsum dolor",
        },
        {
            img: profilePic4,
            review:
            "lorem ipsum dolor",
        },

    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>My Blogs</span>
            <span> About Data Science</span>
            <div className="blur t-blur1" style={{background: "#ABF1FF94"}}></div>
            <div className="blur t-blur2" style={{background: "#edd0ff"}}></div>
        </div>

        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
                })}
        </Swiper>
    </div>
  )
}

export default Testimonial