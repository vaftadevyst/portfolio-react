import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <div className="f-icons">
                <a target='_blank' href="https://www.instagram.com/abizaregi"><Insta color='red' size='3rem'/></a>
                <a target='_blank' href="https://api.whatsapp.com/send/?phone=6289515192171&text&app_absent=0"><Whatsapp color='green' size='3rem'/></a>
                <a target='_blank' href="https://github.com/abizaregi"><Github color='black' size='3rem'/></a>
                <a target='_blank' href="https://www.linkedin.com/in/abizar-egi-mahendra/"><LinkedIn color='dodgerblue' size='3rem'/></a>
            </div>
            <span>Created with &#9825; by 
                <a href="mailto:abizaregi21@gmail.com"> 
                &nbsp; abizaregi21@gmail.com
                </a>
            </span>
        </div>
    </div>
  )
}

export default Footer