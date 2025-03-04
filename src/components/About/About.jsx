import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About Unversity</h3>
            <h2>Nurturing Tomaorrows Leader today</h2>
            <p>Education is the foundation of personal and professional growth. It equips individuals with knowledge, skills, and values that help them navigate life effectively. A well-rounded education fosters curiosity and a lifelong love for learning.</p>
            <p>Beyond academics, education plays a crucial role in character development. It instills discipline, responsibility, and social awareness, shaping individuals into responsible citizens. Exposure to diverse perspectives also enhances empathy and understanding.</p>
            <p>A strong education system drives societal progress and innovation. It bridges economic gaps, promotes equality, and empowers communities. Investing in education ensures a brighter, more sustainable future for generations to come.</p>
        </div>
      
    </div>
  )
}

export default About
