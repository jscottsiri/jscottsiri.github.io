import './style.css'
import {ToggleLongTiles} from "./select_toggle.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div >
    <header class="site-header">
        <div id="logo">
            <span id="logo-span">
                    J Scott Siri
            </span>
        </div>
        <div>
        </div>
        <div id="nav-section">
            <div id="social-links">
                <a title="Email" href="mailto:contact@jscottsiri.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                </a>
                </svg>
                <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/john-siri-jr-b7a581171">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
                    </svg>
                </a>

            </div>
            <button id="nav-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
        </div>
    </header>
    <section id="content-body" class="standard fade-in-element" >
            <section class="card content-section" id="personal">
                <div class="content-section-container no-copy">
                    <div class="content-section-header">
                        Personal Info
                    </div>
                    <hr class="content-section-divider">
                    <div class="content-section-body">
                        <div class="content-subsection">
                            <div id="personal-split" class="content-section-split big-unsplit">
                                <div class="image-container">
                                    <img draggable="false" id="profile-pic" src="../src/assets/images/ScottatHorseland.jpg" alt="Scott Siri, at the Assateague State Park (no horses)">
                                    <p class="subtext">Scott at Assateague</p>
                                </div>
                                <div>
                                    <div class="content-items">
                                        <p class="content-item-label">Name:</p>
                                        <p>John Scott Siri</p>  
                                        <p class="content-item-label">Pronouns:</p>
                                        <p>He/Him</p>                         
                                        <p class="content-item-label">Age:</p>
                                        <p>28 yo</p>                            
                                        <p class="content-item-label">Height:</p>
                                        <p>~16 Soda Cans</p>                                        
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
<!--                            <div>-->
<!--                                <h3>Skills</h3>-->
<!--                                <ul>-->
<!--                                    <li>JavaScript</li>-->
<!--                                    <li>TypeScript</li>-->
<!--                                    <li>C#</li>-->
<!--                                    <li>Python</li>-->
<!--                                    <li>Java</li>-->
<!--                                    <li>React</li>-->
<!--                                    <li>NodeJS</li>-->
<!--                                </ul>-->
<!--                            </div>-->
                        </div>
                    </div>
            </div>
        </section>
        <section class="card content-section" id="education">
            <div class="content-section-container">
                <div class="content-section-header">
                    Education
                </div>
                <hr class="content-section-divider">
                <div class="content-section-body">
                    <div class="content-subsection">
                        <div id="UU" class="long-tile no-copy">
                            <div class="image-container">
                                <img alt="Utrecht University Logo" src="../src/assets/images/UtrechtUniversity.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Human Computer Interaction MSc</p>
                                <p class="subtext">Utrecht University</p>
                                <p class="subtext">Sept. 2022  -  June 2024</p>
                            </div>
                        </div>                        
                        <div id="NJIT" class="long-tile no-copy">
                            <div class="image-container">
                                <img alt="NJIT Logo" src="../src/assets/images/NJIT.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Human Computer Interaction BS</p>
                                <p class="subtext">New Jersey Institute of Technology</p>
                                <p class="subtext">Sept. 2016  -  May 2020</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <section class="card content-section" id="experience">
                       <div class="content-section-container">
                <div class="content-section-header">
                    Work
                </div>
                <hr class="content-section-divider">
                <div class="content-section-body">
                    <div class="content-subsection">
                        <div id="SMF" class="long-tile no-copy">
                            <div class="image-container">
                                <img alt="SportsMainFrame Logo" src="../src/assets/images/SportsMainFrame.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Chief Technology Officer/Lead Developer</p>
                                <p class="subtext">SportsMainFrame, LLC</p>
                                <p class="subtext">Aug. 2024  -  Current</p>
                            </div>
                        </div>
                        <div id="TNO" class="long-tile no-copy">
                            <div class="image-container">
                                <img alt="TNO Logo" src="../src/assets/images/TNO.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Research Developer (Thesis Contractor)</p>
                                <p class="subtext">Netherlands Organisation for Applied Scientific Research (TNO)</p>
                                <p class="subtext">Oct. 2023  -  June 2024</p>
                            </div>
                        </div>
                        <div id="GP" class="long-tile no-copy">
                            <div class="image-container">
                                <img alt="GraphPolaris Logo" src="../src/assets/images/GraphPolaris.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">UX Engineer (Contractor)</p>
                                <p class="subtext">GraphPolaris</p>
                                <p class="subtext">May 2023  -  Oct. 2023</p>
                            </div>
                        </div>
                        <div id="ADP" class="long-tile no-copy">
                            <div class="image-container">
                                <img alt="ADP Logo" src="../src/assets/images/ADP.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Application Developer</p>
                                <p class="subtext">Automatic Data Processing (ADP)</p>
                                <p class="subtext">Aug. 2020  -  Aug. 2022</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </section>
        <section id="project-UU" class="project fade-in-element hidden" >
            <div id="project-header">
                <div>
                    <svg class="icon reset" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="Utrecht University Logo" height="200px" src="../src/assets/images/UtrechtUniversity.jpg" draggable="false">
                        </div>
                    </div>
                    <div id="project-details">
                        <h3>Human-Computer Interaction, MSc</h3>
                        <p>Utrecht University</p>
                        <p><span>Sep. 2022</span> - <span>Jun. 2024</span></p>
                    </div>
                 
                </div>
                <div class="project-body" id="project-body">
                    <section class="project-section with-aside">
                        <div>
                            <h4>Key Courses</h4>
                            <ul>
                                <li>Adaptive Interactive Systems</li>
                                <li>Interaction Technology Innovation</li>
                                <li>Social Computing</li>
                                <li>Technologies for Learning</li>
                                <li>Cognitive Modelling</li>
                                <li>Multi-Agent Systems</li>
                                <li>Qualitative Research Methods</li>
                                <li>Quantitative Research Methods</li>
                            </ul> 
                        </div>
                        <div>
                        <h3>Overview</h3>
                            <p>
                                By 2022, I wanted to expand on my existing knowledge for designing and improving technology. I received acceptances to several different universities, but found my future program in the Netherlands. Looking through courses and talking to alumni, I found that Human-Computer Interaction program at Utrecht University would best expand my skillset. In addition to learning advanced technical concepts, I would learn to work across multi-national teams.
                            </p>
                            <p>
                                During my time at Utrecht, I learned from experts from across Europe. Unlike many programs, I had a lot of flexibility in deciding which classes I took, letting me explore concepts like data science, adaptive systems, and rapid prototyping. Additionally, I worked with data visualization at GraphPolaris during the summer and fall, getting development & UX experience in the Dutch startup scene. 
                            </p>
                            <p>
                                The end of my program had me working my thesis. I managed to find an industry position at TNO Defense, Safety, and Security- where I worked fulltime on my research. There, I got to work with an innovative group of Dutch researchers and professionals in the Human-Machine Teaming department. My thesis research, which was about how avatar fidelity impacts perceptions of prototyped 3D environments in virtual reality, helped inform design guidelines for high-impact design situations for the Dutch Navy. 
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <section id="project-NJIT" class="project fade-in-element hidden" >
            <div id="project-header">
                <div>
                    <svg class="icon reset" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="NJIT Logo" height="160px" src="../src/assets/images/NJIT.jpg" draggable="false">
                        </div>
                    </div>
                    <div id="project-details">
                        <h3>Human-Computer Interaction, BS</h3>
                        <p>New Jersey Institute of Technology & Rutgers Univeristy (Joint Program)</p>
                        <p><span>Sep. 2016</span> - <span>May 2020</span></p>
                    </div>
                 
                </div>
                <div class="project-body" id="project-body">
                    <section class="project-section with-aside">
                        <div>
                            <h4>Key Courses</h4>
                            <ul>
                                <li>Designing the User Experience</li>
                                <li>Building Web Applications</li>
                                <li>Advanced Website Development</li>
                                <li>Advanced Web Applications</li>
                                <li>Discovering User Needs for UX</li>
                                <li>Usability & Measuring UX</li>
                                <li>Requirements Analysis and Systems Design</li>
                                <li>Foundations of Game Production</li>
                                <li>Cyberpsychology</li>
                            </ul> 
                        </div>
                        <div>
                        <h3>Overview</h3>
                            <p>
                                In 2016, I received an acceptance to the NJIT Albert Dorman Honors College for Computer Science. I enjoyed my computing courses immensely and became interested in how to build technology with people in mind. After some I exploration, I found the Human-Computer Interaction, a joint program with Rutgers University. I was hooked and spend the next years learning how to build technology for people. At NJIT, I learned how to design and develop applications. My courses at Rutgers let me learn the cognitive side of interaction, giving me a world class education both ways.                        </p>
                            <p>
                                While at NJIT, I found the Social Interaction Lab- run by Dr. Yvette Wohn. Working with her, I got involved in with research relating to livestreaming and social media, including livestreaming, virtual reality, and multiple account management. By the time I graduated, I had 3 peer reviewed publications at academic conferences and journals. The process let me learn a lot about how to study users and how they engage with technological systems.</p>
                            <p>
                                Also at NJIT, I found myself in many leadership positions. While a Sophomore and Junior, I was on the Executive Board for NJIT Game Club- helping manage weekly events and occasional tournaments. Not long after, I became a Resident Assistant and helped keep the campus running smoothly. Being an Resident Assistant taught me to keep calm under pressure and kept me engaged with my community- especially as COVID hit. During this time, I joined the NJIT Senate, first as the Human-Computer Interaction major representative and later the Ying Wu College of Computing's departmental representative.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    
  </div>
`

ToggleLongTiles();
