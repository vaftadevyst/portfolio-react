import React from 'react'
import './Works.css'
import python from "../../img/python.png"
import javascript from "../../img/js.png"
import reacticon from "../../img/React.png"
import sql from "../../img/sql.png"
import powerbi from "../../img/power-bi.png"
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
            >Current Skills</span>
            <span>Programming Language</span>
            <span>
            Analyze data using Python and Excel, create interactive dashboard <br />
            using Excel macro & VBA or Business Intelligence tools like Tableau <br />
            and Power BI. Learn to build responsive and interactive website with <br />
            HTML, CSS, React and JS, also build dynamic website with PHP and MySQL.
            </span>
            <a href="mailto: abizaregi21@gmail.com">
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
                    <img src={python} alt="" />
                </div>
                <div className="secCircle">
                    <img src={powerbi} alt="" />
                </div>
                <div className="secCircle">
                    <img src={sql} alt="" />
                </div>
                <div className="secCircle">
                    <img src={javascript} alt="" />
                </div>
                <div className="secCircle">
                    <img src={reacticon} alt="" />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle greenCircle"></div>

            
        </div>
    </div>
  )
}

export default Works