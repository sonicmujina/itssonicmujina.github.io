import { useState, useEffect, useRef } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { left } from '@popperjs/core';
import githubIcon from './assets/github-icon.svg';
import linkedinIcon from './assets/linkedin.svg';


function App() {
  const [count, setCount] = useState(0);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  // const blogRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (elementRef) => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const offset = -150;

    const targetPosition = elementRef.current.offsetTop - headerHeight - offset;
    console.log(targetPosition);
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  function openLinksInNewTab() {
    // Get all the <a> tags in the document
    const links = document.getElementsByTagName('a');
  
    // Loop through each <a> tag and set the target attribute to "_blank"
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute('target', '_blank');
    }
  }


  useEffect(() => {
    openLinksInNewTab();
    const scrollLinks = document.querySelectorAll('li.link');
    scrollLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-scroll');
        const target = document.getElementById(targetId);
        scrollToSection(target);
      });
    });
  }, []);  

  return (
    <>
      <div class="wrapper"> 
        <header>
          <h1 className="jamesTitle"> James Lee </h1>
          <ul>
            <li className="link" data-scroll="about" onClick={() => scrollToSection(aboutRef)}>
              about
            </li>
            <li className="link" data-scroll="works" onClick={() => scrollToSection(worksRef)}>
              works
            </li>
            <li className="link" data-scroll="contact" onClick={() => scrollToSection(contactRef)}>
              contact
            </li>
          </ul>
        </header>

        {/* Body wrapper */}
        <Grid
          container
          spacing = {2}
          justifyContent="center"
          direction="column"
          alignItems="center"
        > 
          <p>Hello! I'm James, a computer science student with a passion for software development and music. 
                  I'm dedicated to honing my skills and becoming a proficient Software Developer while pursuing my 
                  musical aspirations.
          </p>

          {/* About me section  */}
          <Grid item xs={4} style={{marginTop: '-70px'}}> 
            <section ref={aboutRef} id="about">
                <h2>About me</h2>
                <div class="sectionContent">
                  <ul id="about"> 
                    <li>Passionate about transforming creative and innovative ideas into user-friendly software solutions.</li>
                    <li>Constantly pursuing innovative tech ideas</li>
                    <li>Currently immersed in the world of full-stack web development, motivated in pursuing a career in producing quality websites</li>
                    <li>Releasing my creativity through the harmonious art of music, enabling self-expression in its most authentic form.</li>
                    <li>An open-minded conversationalist ready to dive into thought-provoking discussions ranging across tech, music, philosophy, and beyond.</li>
                  </ul>
                  <h3>Programming Langages and Tools</h3>
                  <img src="https://skillicons.dev/icons?i=js,html,css,c,postgres,perl,py,java,vscode,regex,react,vite,md,gitlab,github)](https://skillicons.dev" alt="languages" />
                </div> 
                
              </section>
          </Grid>

           {/* Works section  */}
          <Grid item xs={4} sx={{width: '100%'}}>
          <section ref={worksRef} id="works">
            <h2>Works</h2>
            <div class="sectionContent-works">
        
            <Grid 
              container 
              spacing = {2} 
              justifyContent="center"
              alignItems="center"
              marginLeft='20px'
        
            > 
              <Grid item xs={12} sm={6} md={4}>
                <figure class="project-card"> 
                  <figcaption class="project-content-top">
                    <a href="https://github.com/sonicmujina/BigBrain">BigBrain</a> {/* Title link to project on github */}
                  </figcaption>
                  <div class="project-content"> 
                    <header> 
                      <p>A ripoff of Kahoot 👾. Made with the reactJS framework. This app sends API calls 
                        to the backend and fetches data and...   </p>
                    </header >
                    <footer class="project-card-footer"> 
                      <p class="project-language"> Javascript </p>
                      <a href="https://github.com/sonicmujina/BigBrain" class="footer-icon"> 
                        <img src={githubIcon} alt="github-icon" class="svg-icon" />  
                      </a>
                    </footer>
                  </div> 
                </figure>
              </Grid>

              <Grid item xs={12} sm={6} md={4}> 
                <figure class="project-card"> 
                    <figcaption class="project-content-top">
                      <a href="https://github.com/sonicmujina/Webscraper">Webscraper</a>
                    </figcaption>
                      <div class="project-content"> 
                        <header> 
                          <p>A simple Webscraper that lists the titles of UNSW reddit posts.</p>
                        </header >
                        <footer class="project-card-footer"> 
                          <p class="project-language"> Javascript </p>
                          <a href="https://github.com/sonicmujina/Webscraper" class="footer-icon"> 
                            <img src={githubIcon} alt="github-icon" class="svg-icon" />  
                          </a>
                        </footer>
                      </div> 
                  </figure>
              </Grid>

              <Grid item xs={12} sm={6} md={4}> 
                <figure class="project-card"> 
                  <figcaption class="project-content-top">
                    <a href="https://github.com/sonicmujina/Minesweeper">Minesweeper</a>
                  </figcaption>
                    <div class="project-content"> 
                      <header> 
                        <p>Terminal version of Minesweeper.</p>
                      </header >
                      <footer class="project-card-footer"> 
                        <p class="project-language">C</p>
                        <a href="https://github.com/sonicmujina/Minesweeper" class="footer-icon"> 
                          <img src={githubIcon} alt="github-icon" class="svg-icon" />  
                        </a> 
                      </footer>
                    </div> 
                </figure>
              </Grid>
            </Grid>    
              </div>
            </section>

          </Grid>

          {/* Contact section  */}
          <Grid item xs={4} sx={{width: '100%',}}> 
            <section ref={contactRef} id="contact">
              <h2>Contact</h2>
              <div class="contactContent">
                <p>jamesmlee88@gmail.com</p>
                <h3 style={{marginBottom: '-10px'}}>Based In</h3>
                <p>Sydney, NSW</p>  

                <a href='https://www.linkedin.com/in/james-lee-33290426a/' class="footer-icon"> 
                  <img src={linkedinIcon} alt="linkedin-icon" class="svg-icon"/>
                </a>
                <a href='https://github.com/sonicmujina' class="footer-icon">
                  <img src={githubIcon} alt="github-icon" class="svg-icon"/>
                </a>
              </div>
            </section>
          </Grid>
        </Grid>
        <footer style={{color: 'grey'}}>Made by James Lee</footer>
      </div>

    </>
  );
}

export default App;
