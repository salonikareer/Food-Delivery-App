import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center" >
                      <h2>COMPANY</h2>
                      <ul>
                         <li><a href="">Home</a></li>
                          <li><a href="">About Us</a></li>
                          <li><a href="">Delivery</a></li>
                          <li><a href="">Privacy Policy</a></li>
                      </ul>
            </div>

            <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <li>+91 123456789</li>
                        <li>contact@food-del.com</li>

                </div>
        </div>
     <hr/>

    <p className="footer-copyright">© 2022 Food Delivery. All rights reserved.</p>
         
    </div>
  )
}

export default Footer