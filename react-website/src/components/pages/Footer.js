import React from 'react'
import './Footer.css'

import TwitchLogo from "../../images/twitch.png"

function Footer() {
  return (
    <div className='footer-container'>
      <section>
        <p className="footer-subscription-heading">
          Twitch
        </p>
        <img 
          className="footer-logo" 
          src={TwitchLogo} 
          alt="Twitch"
          //height="15"
        />
      </section>
    </div>
  )
}

export default Footer