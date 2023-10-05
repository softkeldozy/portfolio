import React from 'react';
import Typed from 'react-typed';
import './header.css';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className='header-wrapper' id='header'>
      <div className='main-info'>
        <h1>welcome to my portfolio site</h1>
        <Typed className='typed-text' strings={['Web Design', 'Web Development', 'Mobile Development', 'Facebook Ads', ' Google Ads']}
          typeSpeed={40}
          backSpeed={60} loop
        />
        <Link className="btn-main-offer" to='#contact' smooth>Contact Me</Link>
      </div>
    </div>
  )
}

export default Header