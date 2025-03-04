import React, { useState, useEffect } from "react";
import "./Hero.css";
import dark from '../../assets/dark-arrow.png'



// Import slider images
import bg1 from "../../assets/Hero.png";
import bg2 from "../../assets/2.jpg";
import bg3 from "../../assets/3.jpg";
import bg4 from "../../assets/4.jpg";
import bg5 from "../../assets/5.jpg";

const images = [bg1, bg2, bg3, bg4, bg5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-text">
        <h1>ALVA'S</h1>
        <h4>COLLEGE OF NATUROPATHY & YOGIC SCIENCE</h4>
        <div className="button-container">
          <button className="btn">Apply Now<img src={dark} alt="" /></button>
          <button className="btn">View our Programs<img src={dark} alt="" /></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
