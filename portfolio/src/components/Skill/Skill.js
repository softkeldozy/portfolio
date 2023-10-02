import React from 'react';
import './Skill.css';
import logo from './assets/icons/html-5-logo-svgrepo-com.svg';
import logo1 from './assets/icons/css-svgrepo-com.svg';
import logo2 from './assets/icons/javascript-svgrepo-com.svg';

import logo3 from './assets/icons/dart-svgrepo-com.svg';
import logo4 from './assets/icons/flutter-svgrepo-com.svg';
import logo10 from './assets/icons/nodejs-svgrepo-com.svg';
import logo5 from './assets/icons/git-svgrepo-com.svg';
import logo6 from './assets/icons/postman-icon-svgrepo-com.svg';
import logo9 from './assets/icons/mongodb-svgrepo-com.svg';
import logo7 from './assets/icons/vscode3-svgrepo-com.svg';

function Skill() {
  return (
    <div>
      <section class="skills" id="skills">
        <h2 class="skill-header">Skills and Technologies</h2>

        <div class="skills-wrapper">
          <div class="first-set animate__animated animate__pulse">
            <img
              src={logo}
              alt="html"
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src={logo1}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src={logo2}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
          </div>

          <div class="second-set animate__animated animate__pulse">
            <img
              src={logo3}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src={logo4}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src={logo5}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
          </div>
          <div class="second-set animate__animated animate__pulse">
            <img
              src={logo6}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src={logo7}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
            <img
              src={logo9}
              alt=""
              loading="lazy"
              class="icon icon-card"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skill