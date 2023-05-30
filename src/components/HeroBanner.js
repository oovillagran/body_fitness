import React from 'react';
import '../styles/HeroBanner.css';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <div className="hero">
      <h1 className="hero-banner-title">
        Body Fitness
      </h1>
      <p className="hero-banner-subtle">
        Sweat, Smile <br /> and Repeat
      </p>
      <p className="hero-banner-text">
        Check out the most effective exercises
      </p>
      <button href="#exercises" className="hero-btn">Explore Exercises</button>
      <p className="hero-text-mark">Exercise</p>
      <img className="hero-banner-img" src={HeroBannerImage} alt="banner" />
    </div>
  )
}

export default HeroBanner;
