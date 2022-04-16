import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll/modules'
const Navbar = () => {
  return (
    
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">PORTFOLIO</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experiences' smooth={true}>
                        <li>Experiences</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                        <li>Testimonials</li>
                    </Link>
                </ul>
            </div>
            <a href="#contact">
                <button className="button n-button">
                    Contact
                </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar