import React from 'react';
import './AboutMe.css'
import avoutIMG from '../About/bgimg.jpg'

function AboutMe() {
  return (
    <div>
      <section className="hero" id='about'>
        <img className='abtImgBg' src={avoutIMG} alt='' />

        <div className='bio'>
          <h2 className='head-txt'>About Me</h2>
          <p className='bio-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
            autem deleniti cupiditate molestias quis unde quae totam porro dicta
            iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus
          </p>

        </div>
        <div className='aboutimg'>
        </div>
      </section>
    </div>
  )
}

export default AboutMe