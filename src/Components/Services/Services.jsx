import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Humble from "../../img/humble.png" 
import Glasses from "../../img/glasses.png" 
import Card from "../Card/Card"
import Resume from "../../pdf/resume.pdf"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration : 2, type : 'spring'};
    return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>Services</span>
            <span>
            Analyze raw data accurately, 
            valuable and easy to understand for 
            decision making. <br /> Also, build 
            websites with attractive appearance, 
            features and amazing user interface 
            <br /> for user convenience.
            </span>
            <a href={Resume} download>
                <button className="button s-button">
                    Download CV
                </button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <motion.div 
            initial = {{left : '19rem'}}
            whileInView = {{left : '14rem'}}
            transition = {transition}           
            style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Data Analyst'}
                detail = {'Python, Excel, Tableau, Power BI, Data Studio, MySQL'}
                />
            </motion.div> 
            <motion.div 
            initial = {{left : '-9rem'}}
            whileInView = {{left : '-4rem'}}
            transition = {transition}            
            style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Web Developer'}
                detail = {'HTML, CSS, Javascript, React, PHP, MySQL'}
                />
            </motion.div>
            <motion.div 
            initial = {{left : '17rem'}}
            whileInView = {{left : '12rem'}}
            transition = {transition} 
            style={{top: '19rem', left: '12rem'}}>
                <Card
                emoji = {Humble}
                heading = {'Ad Operations'}
                detail = {'Ecommerce Ads, Tiktok Ads, Facebook Ads, Google Ads'}
                />
            </motion.div>
            <div className="blur s-blur2"></div>
        </div>
    </div>
  )
}

export default Services