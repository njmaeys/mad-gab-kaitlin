import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

import TwitchLogo from "../../images/twitch.png"
import TwitterLogo from "../../images/twitter.png"
import InstagramLogo from "../../images/instagram.png"

function Cards() {;

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <CardItem 
            src={TwitchLogo}
            alt="Twitch"
            text="Streamin"
            label="Twitch"
            dest="https://www.twitch.tv/eponablue"
          />
        </div>
        <div className='cards__wrapper'>
          <CardItem 
            src={TwitterLogo}
            alt="Twitter"
            text="Tweetin"
            label="Titter"
            dest="https://twitter.com/BlueEpona"
          />
        </div>
        <div className='cards__wrapper'>
          <CardItem 
            src={InstagramLogo}
            alt="Instagram"
            text="Teemo!"
            label="Instagram"
            dest="https://www.instagram.com/teemo_the_pommo"
          />
        </div>
      </div>
    </div>
  )
}

export default Cards;
