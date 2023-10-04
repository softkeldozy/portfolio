import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div>
      <section class="projects" id="projects">
        <h2 class="projects-title">Some of my Recent Projects</h2>
        <div class="projects-container">
          <div class="project-container project-card">
            <img
              src="assets/images/expenseTracker.png"
              alt="expense-tracker"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Expense Tracker</h3>
            <p class="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" class="project-link">Check it Out</a>
          </div>
          <div class="project-container project-card">
            <img
              src="assets/images/netflixClone.png"
              alt="netflic-clone"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Netflix Clone</h3>
            <p class="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" class="project-link">Check it Out</a>
          </div>
          <div class="project-container project-card">
            <img
              src="assets/images/greenyEarth.png"
              alt="greeny-earth"
              loading="lazy"
              class="project-pic"
            />
            <h3 class="project-title">Greeny Earth</h3>
            <p class="project-details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione vel inventore labore commodi modi quos culpa aut saepe!
              Alias!
            </p>
            <a href="#" target="_blank" class="project-link">Check it Out</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project