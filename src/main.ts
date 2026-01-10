import './style.css'
import {ToggleLongTiles} from "./select_toggle.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div >
    <header class="site-header">
        <div id="logo" class="pointer-cursor">
            <span id="logo-span">
                    J Scott Siri
            </span>
        </div>
        <div>
        </div>
        <div id="nav-section">
            <div id="social-links">
                <a class="pointer-cursor" title="Email" href="mailto:contact@jscottsiri.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                </a>
                </svg>
                <a class="pointer-cursor" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/john-siri-jr-b7a581171">
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
                                    <img draggable="false" id="profile-pic" src="/assets/images/ScottatHorseland.jpg" alt="Scott Siri, at the Assateague State Park (no horses)">
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
                        <div id="UU" class="long-tile no-copy pointer-cursor foldup">
                            <div class="image-container">
                                <img alt="Utrecht University Logo" src="/assets/images/UtrechtUniversity.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Human Computer Interaction MSc</p>
                                <p class="subtext">Utrecht University</p>
                                <p class="subtext">Sept. 2022  -  June 2024</p>
                            </div>
                        </div>                        
                        <div id="NJIT" class="long-tile no-copy pointer-cursor">
                            <div class="image-container">
                                <img alt="NJIT Logo" src="/assets/images/NJIT.jpg" draggable="false">
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
                        <div id="SMF" class="long-tile no-copy pointer-cursor">
                            <div class="image-container">
                                <img alt="SportsMainFrame Logo" src="/assets/images/SportsMainFrame.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Chief Technology Officer/Lead Developer</p>
                                <p class="subtext">SportsMainFrame, LLC</p>
                                <p class="subtext">Aug. 2024  -  Jan. 2026</p>
                            </div>
                        </div>
                        <div id="TNO" class="long-tile no-copy pointer-cursor">
                            <div class="image-container">
                                <img alt="TNO Logo" src="/assets/images/TNO.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">Research Developer (Thesis Contractor)</p>
                                <p class="subtext">Netherlands Organisation for Applied Scientific Research (TNO)</p>
                                <p class="subtext">Oct. 2023  -  June 2024</p>
                            </div>
                        </div>
                        <div id="GP" class="long-tile no-copy pointer-cursor">
                            <div class="image-container">
                                <img alt="GraphPolaris Logo" src="/assets/images/GraphPolaris.jpg" draggable="false">
                            </div>
                            <div>
                                <p class="maintext">UX Engineer (Contractor)</p>
                                <p class="subtext">GraphPolaris</p>
                                <p class="subtext">May 2023  -  Oct. 2023</p>
                            </div>
                        </div>
                        <div id="ADP" class="long-tile no-copy pointer-cursor">
                            <div class="image-container">
                                <img alt="ADP Logo" src="/assets/images/ADP.jpg" draggable="false">
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
                    <svg class="icon reset pointer-cursor" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="Utrecht University Logo" height="160px" src="/assets/images/UtrechtUniversity.jpg" draggable="false">
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
                    <svg class="icon reset pointer-cursor" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="NJIT Logo" height="160px" src="/assets/images/NJIT.jpg" draggable="false">
                        </div>
                    </div>
                    <div id="project-details">
                        <h3>Human-Computer Interaction, BS</h3>
                        <p>New Jersey Institute of Technology & Rutgers University (Joint Program)</p>
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
        <section id="project-ADP" class="project fade-in-element hidden" >
            <div id="project-header">
                <div>
                    <svg class="icon reset pointer-cursor" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="ADP Logo" height="160px" src="/assets/images/ADP.jpg" draggable="false">
                        </div>
                    </div>
                    <div id="project-details">
                        <h3>Application Developer</h3>
                        <p>Automatic Data Processing (ADP)</p>
                        <p><span>Aug. 2020</span> - <span>Aug. 2022</span></p>
                    </div>
                 
                </div>
                <div class="project-body" id="project-body">
                    <section class="project-section with-aside">
                        <div>
                            <h4>Tech Stack</h4>
                            <ul class="tech-icon-list">
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/HTML5.svg" width="48" height="48" class="tech-icon" /> <div class="tooltip-body">HTML5</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/CSS3.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">CSS3</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Python.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Python</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Java.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Java</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Jest.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Jest</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">SQL</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Git.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Git</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/BitBucket.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">BitBucket</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Jira.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Jira</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Docker.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Docker</div></li>
                            </ul> 
                        </div>
                        <div>
                        <h3>Overview</h3>
                            <p>
                                In my Senior year at NJIT, I completed an internship with ADP and was offered a full-time position as as software engineer. I accepted and began work in August of 2020. I spent some time in training before being moved to Lifion (now ADP Lyric HCM).
                            </p>
                            <p>
                                During my day-to-day, I worked in full-stack development. At ADP, I worked in Aviato- a high impact AGILE team centered on Payroll. I designed and developed interfaces, took part in code review, and created unit tests to test code changes.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <section id="project-TNO" class="project fade-in-element hidden" >
            <div id="project-header">
                <div>
                    <svg class="icon reset pointer-cursor" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="TNO Logo" height="160px" src="/assets/images/TNO.jpg" draggable="false">
                        </div>
                    </div>
                    <div id="project-details">
                        <h3>Research Developer (Thesis)</h3>
                        <p>The Netherlands Organisation for Applied Scientific Research (TNO)</p>
                        <p><span>Nov. 2023</span> - <span>Jun. 2024</span></p>
                    </div>
                 
                </div>
                <div class="project-body" id="project-body">
                    <section class="project-section with-aside">
                        <div>
                            <h4>Tech Stack</h4>
                            <ul class="tech-icon-list">
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/CSharp.svg" width="48" height="48" class="tech-icon" /> <div class="tooltip-body">C#</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/NET.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">.NET</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Unity.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Unity3D</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/HTML5.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">HTML5</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/CSS3.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">CSS3</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/JavaScript.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">JavaScript</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/TypeScript.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">TypeScript</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Vue.js.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Vue.js</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Python.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Python</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/NumPy.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">NumPy</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Pandas.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Pandas</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Git.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Git</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/GitLab.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">GitLab</div></li>
                            </ul> 
                        </div>
                        <div>
                        <h3>Overview</h3>
                            <p>
                                While doing my Thesis at Utrecht University, I managed to get an industry position with TNO's Human-Machine Teaming department. They were working on prototyping 3D workspaces with virtual reality so they could simulate efficiency before dedicating resources to construction.
                            <p>
                                During my thesis, I helped TNO identify how avatar fidelity impacted the perceptions of the environment. I worked with a high degree of autonomy, with periodic check-ins from my supervisors. In this project, I had to work on both development and research phases, both building out and running tests with the virtual world.                            </p>
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>Development</h3>
                            <p>
                                During the development phase, I worked with C# to build out situations in Unity3D and cast them to HTC XR Elite headsets. I needed to build out network coordination between small groups of people in a shared space, so I needed effective synergy with reality and the virtual reality. This was true for both the simple abstract avatars and the complex, humanoid avatars. Additionally, I needed to be able to manage the virtual world from outside, so I worked with a Vue.js interface to manage the environment in the virtual simulations.
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>Research</h3>
                            <p>
                                For research, I tested groups of people's observations in virtual kitchens. Kitchens were workspaces that everyone was familiar with, so they made for good work-test environments. During the study, the users (in groups of two and three) would go through a series of virtual environments and then fill out surveys based on their observations. The users would do a set of rooms with a selected low-fidelity avatar and a set of rooms with a selected high-fidelity avatars. Additionally, notes were taken on observations made. 
                            </p>
                            <p>
                                Following the VR sessions, users were given a short, semi-structured interview that gave the opportunity to ask questions and clarify observations. This was then followed by a debriefing.
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>Quantitative Analysis</h3>
                            <p>
                                After the study, data collected was broken down and analyzed. Numerical data was analyzed through t-tests using the Python libraries NumPy and Pandas. While there was minimal difference with their initial paired t-tests, exploratory analyses with independent t-tests for each room set suggested that the initial avatar fidelity, rather than current avatar fidelity, led to significant differences in team dynamics and behaviors.
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>Qualitative Analysis</h3>
                            <p>
                                The qualitative data was coded and quantified. The resulting analysis found that users displayed different interaction habits based on the avatars they were using. Higher fidelity avatars let to more attempts to interact with their environment, even when they had not encountered prior interactivity. Additionally, users using avatars with higher fidelity focused more on visual stylization of the virtual environment.
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>Results</h3>
                            <p>
                                The results of the study suggest that avatar fidelity can prime a user to interpret their environment differently. Avatar fidelity influenced perceptions of interactivity and stylization in the virtual environment. Initial avatar fidelity may set a baseline for observations of prototyped spaces and team dynamics. These factors imply that avatar fidelity may impact the focus brainstorming and evaluation of 3D workspace prototypes. The insights from the study helped inform design guidelines for virtual reality prototyping at TNO.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
               <section id="project-GP" class="project fade-in-element hidden" >
            <div id="project-header">
                <div>
                    <svg class="icon reset pointer-cursor" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="GraphPolaris Logo" height="160px" src="/assets/images/GraphPolaris.jpg" draggable="false">
                        </div>
                    </div>
                    <div id="project-details">
                        <h3>UX Engineer (Contractor)</h3>
                        <p>GraphPolaris</p>
                        <p><span>May 2023</span> - <span>Oct. 2023</span></p>
                    </div>
                 
                </div>
                <div class="project-body" id="project-body">
                    <section class="project-section with-aside">
                        <div>
                            <h4>Tech Stack</h4>
                            <ul class="tech-icon-list">
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/HTML5.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">HTML5</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/CSS3.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">CSS3</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/JavaScript.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">JavaScript</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/TypeScript.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">TypeScript</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/React.svg" width="48" height="48" class="tech-icon" /> <div class="tooltip-body">React</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Redux.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Redux</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Tailwind%20CSS.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Tailwind CSS</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Material%20UI.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Material UI</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Figma.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Figma</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">SQL</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Git.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Git</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/GitLab.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">GitLab</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Docker.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Docker</div></li>
                            </ul> 
                        </div>
                        <div>
                        <h3>Overview</h3>
                            <p>
                                While studying at Utrecht University, I worked for a data-visualization startup as a UX Engineer. From the end of classes until my thesis, I build out dashboards using React TypeScript, Redux, Tailwind CSS, and MUI.
                            </p>
                            <p>
                                I wore many hats as part of the startup team. I worked on an AGILE team with developers and data analysts to visualize graph node data stored remotely. I designed features with Figma and performed usability tests with the mock-ups, iterating on them and implementing them.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <section id="project-SMF" class="project fade-in-element hidden" >
            <div id="project-header">
                <div>
                    <svg class="icon reset pointer-cursor" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0 208 208 0 1 1 -416 0zm464 0a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l104 104c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8l0-72 104 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-104 0 0-72c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-104 104z"/></svg>
                </div>
            </div>
            <div class="project-content card" >
                <div class="project-summary project-section" id="project-summary">
                    <div id="project-img">
                        <div class="image-container">
                            <img alt="SMF Logo" height="160px" src="/assets/images/SportsMainFrame.jpg" draggable="false">
                        </div>
                    </div>
                    <div id="project-details">
                        <h3>Chief Technology Officer/Lead Developer</h3>
                        <p>SportsMainFrame, LLC</p>
                        <p><span>Aug. 2024</span> - <span>Jan. 2026</span></p>
                    </div>
                 
                </div>
                <div class="project-body" id="project-body">
                    <section class="project-section with-aside">
                        <div>
                            <h4>Tech Stack</h4>
                            <ul class="tech-icon-list">
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/HTML5.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">HTML5</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/CSS3.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">CSS3</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/JavaScript.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">JavaScript</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/TypeScript.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">TypeScript</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/React.svg" width="48" height="48" class="tech-icon" /> <div class="tooltip-body">React</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Tailwind%20CSS.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Tailwind CSS</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Figma.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Figma</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Node.js.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Node.js</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Express.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Express</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">SQL</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Microsoft%20SQL%20Server.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Microsoft SQL Server</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Azure.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Azure Cloud Services</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Git.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Git</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/GitHub.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">GitHub</div></li>
                                <li class="tech-icon-container tooltip-container"> <img src="/assets/icons/TechStack/Docker.svg" width="48" height="48" class="tech-icon" /><div class="tooltip-body">Docker</div></li>
                            </ul> 
                        </div>
                        <div>
                        <h3>Overview</h3>
                            <p>
                                The mission was simple: sell a league in a box.
                            </p>
                            <br>
                            <p>
                               SportsMainFrame was looking to build a recreational sports management platform, combining rostering, scheduling, payments, and messaging into a single platform.
                               With volunteerism at a low, the platform could reduce the load put in place by manual or less comprehensive options.                             
                            </p>
                            <br>
                            <p>
                                Over the course of a year and a half, I build out a comprehensive, 0-1 web application. I handled day-to-day design, development, DevOps, and more as the technical lead.
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>Wearing Many Hats</h3>
                            <p>
                                Like at any startup, I wore many hats. On any given day, my responsibilities included the following:
                            </p>
                            <p>
                                <ul>
                                    <li>Leading 0-1 full-stack software development, using technologies like React, Tailwind CSS, and Node.js.</li>
                                    <li>Wireframing with Figma and testing interfaces with usability tests, like speak aloud exercises.</li>
                                    <li>Maintaining DevOps processes and Cloud Services, including the Azure Communication Services, Azure SQL Service, Azure Redis, and more.</li>
                                    <li>Managing a small team of contractors to hit project milestones and build out features.</li>
                                    <li>Keeping up to date with technology trends, especially as AI took a larger part of the market share.</li>
                                    <li>Interacting with prospective and current customers, gathering requirements and pain points and working with them to meet solutions.</li>
                                    <li>Working with 3rd party business partners, including payment processors and cybersecurity services.</li>
                                </ul>    
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>The Tipping Point</h3>
                            <p>
                                SportsMainFrame successfully launched and, at its peak, was integrated into recreational sports in 25+ NJ towns. However, year-long costs and billing cycles led to a perpetual cash-flow issue.
                            </p>
                            <br>
                            <p>
                                The startup was built lean, so there was not a lot of wiggle room and the team was constantly small. We had initial investors and this got us through the first year. We had tried to seek out additional funding, but our options were limited. Despite the initial sales and pitching with several investors, we did not get supplementary funding. 
                            </p>
                            <br>
                            <p>
                                The payments cycle for recreational sports were another issue- Recreation Departments and platforms tend to run funding cycles at the end of a given year. During the year, runway was used up while aiming for new clients when existing contracts expired. Some of the sales were made with discounts, to try and build a user base, but this reduced funding.
                            </p>
                            <br>
                            <p>
                                Our sales department, which was small, had trouble with customer acquisition. Many recreational leagues are run by volunteer representatives and the main sales season was from Thanksgiving through Christmas. When work demands increased during this time, we saw some team members leave.
                            </p>
                            <br>
                            <p>
                                When we were unable to close with the clients we had been courting, we made the decision to close shop- there was not funding to last through another year.
                            </p>
                        </div>
                    </section>
                    <section class="project-section">
                        <div>
                        <h3>Takeaways</h3>
                            <p>
                                SportsMainFrame was extremely fun to build, but financial factors ultimately led to the end of the company. While it's never fun to have something you poured your time and effort into not work out, there were some big takeaways from the experience.
                            </p>
                            <br>
                            <p>
                                <h4>1.</h4>
                                I got a phenomenal amount of experience with team and product management.
                            </p>
                            <br>
                            <p>
                                <h4>2.</h4>
                                With very limited resources, I was able to apply my skills to bring a product from ideation to launch, then build it out further. I built a comprehensive, drag and drop, web application for admins and a responsive, concise application for general users.
                            </p>
                            <br>
                            <p>
                                <h4>3.</h4>
                                I was able to coordinate and manage a team that built out features, successfully adding all core modules we sought to develop. As far as the technology side was concerned, the product was successfully built out past MVP.
                            </p>
                            <br>
                            <p>
                                <h4>4.</h4>
                                I learned that projects can fail due to issues outside of development. I had believed that a well-built product could make up for shortages elsewhere, but found that the development is a key part of a bigger process that needs to be secure. 
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    <footer>
    
    </footer>
  </div>
`

ToggleLongTiles();
