import React, { useState } from 'react'
import { useRef } from 'react'
import './Contact.css'
import Github from '../../img/github-ungu.png'
import LinkedIn from '../../img/linkedin-ungu.png'
import Instagram from '../../img/ig-ungu.png'
import Behance from '../../img/behance-ungu.png'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'  
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pmc8r2q', 'template_q26md48', form.current, 'pku80nrJkVJAIrD2M')
            .then((result) => {
                console.log(result.text);
                setDone(true);
        }, (error) => {
                console.log(error.text);
        });
    };

  return (
    <div id='Contact' className="contact--form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" 
                style={{background: "#ABF1FF94"}}>
                </div>
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
        </div>
        
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="messsage" className="user" placeholder="Message"/>
                <input type="submit" className="button" value="Send"/>
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" 
                style={{background: "#edd0ff"}}>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact