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
        spaceBetween={80}
        slidesPerView={4}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a target='_blank' href={project1}><img src={project1} alt="" /></a> 
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href={project2}><img src={project2} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href={project3}><img src={project3} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href={project4}><img src={project4} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href={project5}><img src={project5} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href={project6}><img src={project6} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    </div> 
  )
}

export default Portfolio