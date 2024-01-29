import React from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Import the CSS file

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function App() {
  return (
    

    <div className="App">
      
      <Header /> {/* Render the Header component */}
      <div className="menu-links">
        <ul>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
      <section id="profile">
        <div className="section__pic-container">
          <img src={require("./assets/yogi-3.png")} alt="yogitha profile picture" /> 
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Veera Ramya Kamichetty</h1>
          <p className="section__text__p2">Kinder Garden student</p>
          <div className="btn-container">
          <button
  className="btn btn-color-2"
  onClick={() => window.open('https://docs.google.com/document/d/1Wb1tBTK6c9xLrAOT7z7pixvuSyZa2GfF/edit?usp=sharing&ouid=102441651930637082602&rtpof=true&sd=true', '_blank')}
>
  Open CV
</button>

            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={require("./assets/linkedin.png")}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.open('https://www.linkedin.com/in/veera-ramya-kamichetty-7aa16823b', '_blank')}
            />
            <img
              src={require("./assets/github.png")}
              alt="My Github profile"
              className="icon"
              onClick={() => window.open( 'https://github.com/RamyaKV134','blank')}
            />
          </div>
        </div>
      </section>
      <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={require("./assets/experience.png")}
                alt="Experience icon"
                class="icon"
              />
              <h3>Certifications and Internships</h3>
              <p><ul><li>50 week Foundation of Model Machine Learning certification by IIIT Hyd</li>
              <li>Runner up in Hackathon(Machine Learning)</li>
              <li>Infosys spring board certification on python fundamentals</li>
              <li>TechSaksham certification on frontend basics</li>
              <li>Linkedin certification on programming fundamentals</li></ul></p>
            </div>
            <div class="details-container">
              <img
                src={require("./assets/education.png")}
                alt="Education icon"
                
                class="icon"
              />
              <h3>Education</h3>
              <p>B.Tech(2021-2025)<br /> Intermediate (2019-2021)<br />Secondary Education(2018)</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            As a motivated and detail-oriented engineering student, 
            I am eager to secure a challenging internship opportunity at a forward-thinking engineering firm.
             With a strong foundation in engineering principles and a passion for hands-on problem-solving, 
            I am committed to gaining practical experience and contributing to innovative projects.
            <br></br>
            </p>
          </div>
        </div>
      </div>
      <img
        src={require("./assets/arrow.png"
   )}     alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
      <br></br>
      </section>
      <section id="experience">
      <h4><p class="section__text__p1">Explore My</p></h4>
      <h1 class="title">SKILLS</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div class="hi">
                  <h3>FLASK</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Basic</p>
                </div>
              </article>
              
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Programming Languages</h2>
            <div class="article-container">
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article class="hello">
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
              
                />
                <div>
                  <h3>C programming</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={require("./assets/checkmark.png")}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("./assets/arrow.png"
   )}     alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
   
      </section>
      <br></br>
      <br></br>
      <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={require("./assets/project-1.jpg")}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">MERN Team Project(IMDB CLONE)</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/Vamsimypala/movie_preview_project','blank')}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://www.linkedin.com/posts/vamsi-mypala-946837239_mernstack-moviereview-webdevelopment-activity-7090583745677688832-WPxD?utm_source=share&utm_medium=member_desktop','blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={require("./assets/project-2.jpg"
)}                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">FLASK Project (EYE ANALYSIS FORM)</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/KIET-SpecialCodingBatch/SCB3601_EYE_ANALYSIS_FORM','blank')}
              >
                Github
              </button>
              <button
                class="btn btn-color-2 proj~ect-btn"
                onClick={() => window.open('https://www.linkedin.com/posts/veera-ramya-kamichetty-7aa16823b_flask-webdevelopment-python-activity-7157575624490938369-eEvo?utm_source=share&utm_medium=member_android','blank')}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={require("./assets/project-3.jpg")}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">DATA VISUALIZATION</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://github.com/RamyaKV134/khub_datavisualization','blank')}
                
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onClick={() => window.open('https://www.linkedin.com/posts/veera-ramya-kamichetty-7aa16823b_python-excelmagic-dataconversion-activity-7091434969826291712-ZB_c?utm_source=share&utm_medium=member_android','blank')}
                
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src={require("./assets/arrow.png")}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      /> */}
      </section>
      <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={require("./assets/email.png")}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:ramyakamichetty134@gmail.com">ramyakamichetty134@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={require("./assets/linkedin.png")}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p>
  <a href="https://www.linkedin.com/in/veera-ramya-kamichetty-7aa16823b" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</p>

        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}

export default App;
