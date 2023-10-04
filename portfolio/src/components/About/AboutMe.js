import React from 'react';
import './AboutMe.css'
import avoutIMG from '../About/bgimg.jpg'

function AboutMe() {
  return (
    <div>
      <section class="more-about" id='about'>
        <h2 className='head-txt'>About Me</h2>
        <div className='about-text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
            autem deleniti cupiditate molestias quis unde quae totam porro dicta
            iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
            nostrum dolor minus, libero delectus praesentium perferendis
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            consequuntur labore? Ea totam voluptas amet!
          </p>
        </div>
        <div className='aboutimg'>
          <img className='abtImgBg' src={avoutIMG} alt='' />
        </div>
      </section>
    </div>
  )
}

export default AboutMe