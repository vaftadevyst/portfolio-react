import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context'
import { useContext } from 'react' 
import { motion } from 'framer-motion'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
    <div className="works">
        {/* left side */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}
            >Works for All these</span>
            <span>Brands & Clients</span>
            <span>
            Analyze raw data accurately, 
            valuable and easy to understand for 
            decision making. <br /> Also, build 
            websites with attractive appearance, 
            features and amazing user interface 
            <br /> for user convenience.
            </span>
            <a>
                <button className="button s-button">
                    Hire me
                </button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div 
            initial = {{rotate: 90}}
            whileInView = {{rotate: 0}}
            viewport = {{margin: '-40px'}}
            transition = {{duration: 3.5, type: 'spring'}}
            className="w-mainCircle">
                <div className="secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle greenCircle"></div>

            
        </div>
    </div>
  )
}

export default Works