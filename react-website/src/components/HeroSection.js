import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

import HeroVideo from "../videos/sparkle.mp4";
//https://pixabay.com/videos/

function HeroSection() {
  const [gab, setGab] = useState("")

  const getGab = () => {
    console.log("Hello Gab");
  }

  return (
    <div className='hero-container'>
      <video src={HeroVideo} autoPlay loop muted />
      <h1>Mad Gabs</h1>
      <p>Lets sound silly</p>
      <div className="hero-btns">
        <Button 
          className="bts" 
          buttonStyle="btn--outline" 
          buttonSize="btn--large"
          onClick={getGab}
        >
          GET GAB
        </Button>
      </div>
    </div>
  )
}


export default HeroSection;