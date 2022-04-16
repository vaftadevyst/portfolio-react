import React from 'react'
import './Card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Card = ({emoji, heading, detail, link}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span style={{color: darkMode? 'white': ''}}>{detail}</span>
        <a target='_blank' href={link}><button className="button c-button">LEARN MORE</button></a>
    </div>
  )
}

export default Card