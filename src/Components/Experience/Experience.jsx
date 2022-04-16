import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'  
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition1 = {duration : 2, type : 'spring'};
  const transition2 = {duration : 2.5, type : 'spring'};
  const transition3 = {duration : 3, type : 'spring'};
  return (
    <div className="experience" id='Experiences'>
        <div className="achievement">
            <motion.div 
            initial = {{top : '-3rem'}}
            whileInView = {{top : '0rem'}}
            transition = {transition1}
            className="circle" style={{
              border : darkMode? '4px solid var(--second-color)' : '',
              background : darkMode? 'black': '',
              color: darkMode? 'white': ''}}> 8+ 
            </motion.div>
            <span>month</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <motion.div 
            initial = {{top : '-3rem'}}
            whileInView = {{top : '0rem'}}
            transition = {transition2} 
            className="circle" style={{
              border : darkMode? '4px solid var(--second-color)' : '',
              background : darkMode? 'black': '',
              color: darkMode? 'white': ''}}> 8+ 
            </motion.div>
            <span>completed</span>
            <span>Project</span>
        </div>
        <div className="achievement">
            <motion.div 
            initial = {{top : '-3rem'}}
            whileInView = {{top : '0rem'}}
            transition = {transition3} 
            className="circle" style={{
              border : darkMode? '4px solid var(--second-color)' : '',
              background : darkMode? 'black': '',
              color: darkMode? 'white': ''}}> 8+ 
            </motion.div>
            <span>certificate</span>
            <span>Competence</span>
        </div>
    </div>
  )
}

export default Experience