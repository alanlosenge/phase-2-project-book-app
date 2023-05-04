import React from 'react';
import "./About.css";
import aboutImg from "../../images/old-books-gf5a173d12_640.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book app</h2>
            <p className='fs-17'>This app was made using Reactjs for my project</p>
            <p className='fs-17'>This app was made using Reactjs for my project</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
