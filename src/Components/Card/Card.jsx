import React from 'react'
import './Card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Card = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span style={{color: darkMode? 'white': ''}}>{detail}</span>
        <button className="button c-button">LEARN MORE</button>
    </div>
  )
}

export default Card