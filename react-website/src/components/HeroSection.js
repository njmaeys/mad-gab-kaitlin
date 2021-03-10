import React, {useState} from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

import HeroVideo from "../videos/sparkle.mp4";
//https://pixabay.com/videos/

function HeroSection() {
  const [showNewGab, setShowNewGab] = useState(false);
  const [showGabResults, setGabResults] = useState(false);
  const [gab, setGab] = useState('');

  const getGabs = async () => {
    const response = await fetch('https://gabs.pandablade.com/onegab')
    const data = await response.json()

    const theGab = {
      "gab": data["data"]["gab"],
      "gabValue": data["data"]["gabValue"],
    }
    setGab(theGab);
  }

  const GabResults = () => {
    return (
      <div className="gab-to-read">
        <p className="gab-result">
          {gab["gabValue"]}
        </p>
      </div>
    )
  }

  const Results = () => {
    const onClick = () => setGabResults(true);
    return (
      <div className="gab-to-read">
        <p>
          {gab["gab"]}
        </p>
        <Button 
          className="btn" 
          buttonStyle="btn--outline" 
          buttonSize="btn--large"
          onClick={onClick}
        >
          REVEAL
        </Button>
      </div>
    )
  }

  const onClickGetGab = () => {
    getGabs();
    setShowNewGab(true);
    setGabResults(false);
  }

  return (
    <div className='hero-container'>
      <video src={HeroVideo} autoPlay loop muted />
      <h1>Mad Gabs</h1>
      <p>Lets sound silly</p>
      <div className="hero-btns">
        <Button 
          className="btn" 
          buttonStyle="btn--outline" 
          buttonSize="btn--large"
          onClick={onClickGetGab}
        >
          NEW GAB
        </Button>
      </div>
      { showNewGab ? <Results /> : null}
      <div className="hero-btns">
        { showGabResults ? <GabResults /> : null}
      </div>
    </div>
  )
}

export default HeroSection;