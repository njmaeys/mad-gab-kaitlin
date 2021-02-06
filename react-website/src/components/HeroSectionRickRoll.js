import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import Button from './Button';
import './HeroSection.css';
import {gabsData} from './gabs';

import HeroVideo from "../videos/rickroll.mp4";
//https://pixabay.com/videos/

function HeroSectionRickRoll() {
  const [showNewGab, setShowNewGab] = useState(false);
  const [showGabResults, setGabResults] = useState(false);
  const [gab, setGab] = useState('');

  function getNewGab() {
    const random = Math.floor(Math.random() * gabsData.length);
    const newGab = gabsData[random];
    setGab(newGab);
    return
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
    getNewGab();
    setShowNewGab(true);
    setGabResults(false);
  }

  return (
    <div className='hero-container'>
      <video src={HeroVideo} autoPlay loop muted />
      <div className="hero-btns">
      </div>
      { showNewGab ? <Results /> : null}
      <div className="hero-btns">
        { showGabResults ? <GabResults /> : null}
      </div>
    </div>
  )
}


//        { showResults ? <Results /> : null}
//        { showGabResults ? <GabResults /> : null}
export default HeroSectionRickRoll;