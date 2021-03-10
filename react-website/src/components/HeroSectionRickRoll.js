import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

import HeroVideo from "../videos/rickroll.mp4";
//https://pixabay.com/videos/

function HeroSectionRickRoll() {

  return (
    <div className='hero-container'>
      <video src={HeroVideo} autoPlay loop muted />
    </div>
  )
}

export default HeroSectionRickRoll;