import React from 'react';
import './Contact.css';
import twitter from '../contact/icons/icons8-twitterx-50.png';
import git from '../contact/icons/icons8-github.gif';
import Linkedin from '../contact/icons/icons8-linkedin.gif';
import uparrow from '../contact/icons/icons8-up-arrow.gif';

function Contact() {
  const scrollUp = document.querySelector("#scroll-up");

  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  return (
    <section class="contact" id="contact">
      <h2>Get In Touch With Me</h2>
      <div class="contact-form-container">
        <div class="contact-form">
          <form action="https://formspree.io/f/xyylngw" method="POST">
            <div class="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                class="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              id="submit-btn"
              class="submit-btn"
            />
          </form>
          <div class="socials">
            <a href="https://www.twitter.com/softkeldozy" target=""
            ><img
                src={twitter}
                alt="Twitter"
                loading="lazy"
                class="socicon"
              /></a>
            <a href="https://www.linkedin.com/in/keldozy" target=""
            ><img
                src={Linkedin}
                alt="Linkedin"
                loading="lazy"
                class="socicon"
              /></a>
            <a href="https://www.github.com/softkeldozy" target=""
            ><img src={git} alt="Github" class="socicon"
              /></a>
          </div>
        </div>
        <i class="scroll-up" id="scroll-up"
        ><img
            src={uparrow}
            class="socicon up-arrow"
            alt="scroll-up"
          /></i>
      </div>

    </section>
  )
}

export default Contact