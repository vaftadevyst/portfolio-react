import React from 'react'
import './Portfolio.css'
import 'swiper/css'
import {Swiper, SwiperSlide} from 'swiper/react'
import project1 from '../../img/8.png'
import project2 from '../../img/9.png'
import project3 from '../../img/10.png'
import project4 from '../../img/11.png'
import project5 from '../../img/12.png'
import project6 from '../../img/13.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Portfolio = () => {  
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={project1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={project2} alt="" />
            </SwiperSlide>{" "}
            <SwiperSlide>
                <img src={project3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={project4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={project5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={project6} alt="" />
            </SwiperSlide>
        </Swiper>
    </div> 
  )
}

export default Portfolio