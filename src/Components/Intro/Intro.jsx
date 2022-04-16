import React from 'react'
import './Intro.css'
import Github from '../../img/github-ungu.png'
import LinkedIn from '../../img/linkedin-ungu.png'
import Instagram from '../../img/ig-ungu.png'
import Behance from '../../img/behance-ungu.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import profile from '../../img/profile-home.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Python from '../../img/python.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const Intro = () => {
    const transition = {duration : 2, type : 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
    <div className="intro">
          <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
                <span>Abizar Egi</span>
                <span>Bachelor of economics, Passionate on 
                    data analytics, data visualization, 
                    machine learning and programming. 
                    Entry level experience in data analytics 
                    with python & excel and data visualization 
                    with business intelligence tools like 
                    power BI, tableau, and excel macro
                </span>
            </div>
            <button className="button i-button">
                Hire me
            </button>
            <div className="i-icons">
                <a href="https://github.com/abizaregi">
                    <img width="60px" src={Github} alt="Github Abizar Egi" />
                </a>
                <a href="https://linkedin.com/in/abizar-egi-mahendra">
                    <img width="60px" src={LinkedIn} alt="LinkedIn Abizar Egi" />
                </a>
                <a href="https://instagram.com/abizaregi">
                    <img width="60px" src={Instagram} alt="Instagram Abizar Egi" />
                </a>
                <img width="60px" src={Behance} alt="Behance Abizar Egi" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={profile} alt="" />
            <motion.img 
            initial = {{left : '-45rem'}}
            whileInView = {{left : '-40rem'}}
            transition = {transition}
            src={Python} alt="" />
            <motion.div 
            initial = {{left : '25rem'}}
            whileInView = {{left : '20rem'}}
            transition = {transition}
            className = 'floating-div'
            style={{top: '-1rem', left: '20rem'}}>
                <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
            </motion.div>
            <motion.div 
            initial = {{left : '-9rem'}}
            whileInView = {{left : '-4rem'}}
            transition = {transition}
            className = 'floating-div'
            style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbup} text1='Data' text2='Analyst'/>
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{background: "rgb(328 210 255)"}}>
            </div>
            <div className="blur"
            style={{
                background: '#c1f5ff',
                top: '13rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
            }}></div>
        </div>
    </div>
        
  )
}

export default Intro