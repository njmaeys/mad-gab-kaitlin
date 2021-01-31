import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="../videos/video-2.mp4" autoPlay loop muted />
      <h1>FOO BAR</h1>
      <p>Giddyup</p>
      <div className="hero-btns">
        <Button 
          className="bts" 
          buttonStyle="btn--primary" 
          buttonSize="btn--large"
        >
          GET GAB
        </Button>
      </div>
    </div>
  )
}


export default HeroSection;