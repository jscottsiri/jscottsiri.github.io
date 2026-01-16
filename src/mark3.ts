import './m3-styles.css'
import {ToggleLongTiles} from "./select_toggle.ts";
import {followMouse} from "./followMouse.ts";
import {menuToggle} from "./menu-toggle.ts";
import {ScrollEffects} from "./ScrollEffects.ts";
import {EffectWhileInViewport} from "./EffectWhileInViewport.ts";
import {NavMenuTargeting} from "./NavMenuTargeting.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div >
    <header class="site-header">
        <div id="logo"><span class="no-copy"><a class="a-button" href="#" >J Scott Siri</a></span></div>
        <div id="nav-container">
            <ul class="nav-list">
                <li id="Home-Nav"><a href="#">Home</a></li>
                <li id="About-Nav"><a href="#about">About</a></li>
                <li id="Skills-Nav"><a href="#skills">Skills</a></li>
                <li id="Experience-Nav"><a href="#experience">Experience</a></li>
                <li id="Projects-Nav" class="dont"><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <div id="social-links">
            <a class="pointer-cursor" id="mail-link" title="Email" href="mailto:hello@jscottsiri.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                </svg>
            </a>
            <a class="pointer-cursor" id="linkedin-link" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/john-siri-jr-b7a581171">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
                </svg>
            </a>
        </div>
        <button id="nav-menu-toggle">
            <img alt="Navigation Menu" src="/assets/icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" />
        </button>

    </header>
    <body>
        <section id="mobile-nav-menu">
            <div>
                <button type="button" class="mobile-nav-cancel" id="mobile-nav-cancel" ><svg class="no-pointer-events" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 384 512"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></button>
            </div>
            <ul>
                <li><a class="mobile-nav-button" href="#"><button>Home</button></a></li>
                <li><a class="mobile-nav-button" href="#about"><button>About</button></a></li>
                <li><a class="mobile-nav-button" href="#skills"><button>Skills</button></a></li>
                <li><a class="mobile-nav-button" href="#experience"><button>Experience</button></a></li>
                <li class="dont"><a class="mobile-nav-button" href="#projects"><button>Projects</button></a></li>
            </ul>
            <div id="social-links">
                <a class="pointer-cursor" id="mail-link" title="Email" href="mailto:hello@jscottsiri.com">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                    </svg>
                </a>
                <a class="pointer-cursor" id="linkedin-link" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/john-siri-jr-b7a581171">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
                    </svg>
                </a>
            </div>
        </section>
        
        <section id="splash">
            <div class="full-container tron-background">
                <div class="split near-full-container">
                    <div id="splash-intro">
                        <h1>I Work Wonders.</h1>
                        <h3>Fullstack Developer with a UX Background.</h3>
                        <ul>
                            <li>Frontend</li>
                            <li>Backend</li>
                            <li>User Experience</li>
                        </ul>
                    </div>
                    <div id="splash-img">
                        <div id="Scott-Face" class="diamond-container above-z">
                             <div id="splash-outline" class="diamond-content">
                                <div class="masked-background"></div>
                             </div>
                        </div>
        
                    </div>
                </div>
            </div>
            <div class="marquee-container counterclockwise-skew moved-up">
                <div class="marquee-track">
                    <div class="marquee-content">
                        <div class="marquee-item">NYC Metro</div>
                        <div class="marquee-item">NJ Based</div>
                        <div class="marquee-item">Eagle Scout</div>
                        <div class="marquee-item">16 Soda Cans Tall</div>
                        <div class="marquee-item">Utrecht Alum</div>
                        <div class="marquee-item">NJIT Alum</div>
                        <div class="marquee-item">Software Generalist</div>
                        <div class="marquee-item">NYC Metro</div>
                        <div class="marquee-item">NJ Based</div>
                        <div class="marquee-item">Eagle Scout</div>
                        <div class="marquee-item">16 Soda Cans Tall</div>
                        <div class="marquee-item">Utrecht Alum</div>
                        <div class="marquee-item">NJIT Alum</div>
                        <div class="marquee-item">Software Generalist</div>                        
                        <div class="marquee-item">NYC Metro</div>
                        <div class="marquee-item">NJ Based</div>
                        <div class="marquee-item">Eagle Scout</div>
                        <div class="marquee-item">16 Soda Cans Tall</div>
                        <div class="marquee-item">Utrecht Alum</div>
                        <div class="marquee-item">NJIT Alum</div>
                        <div class="marquee-item">Software Generalist</div>
                        <div class="marquee-item">NYC Metro</div>
                        <div class="marquee-item">NJ Based</div>
                        <div class="marquee-item">Eagle Scout</div>
                        <div class="marquee-item">16 Soda Cans Tall</div>
                        <div class="marquee-item">Utrecht Alum</div>
                        <div class="marquee-item">NJIT Alum</div>
                        <div class="marquee-item">Software Generalist</div>
                    </div>
                </div>
            </div>
        </section>
        <section id="about" class="page animate-on-scroll">
            <div class="container">
                <h2 class="container-title">About Me</h2>
                <div class="container-content">
                    <div>
<!--                        <h2>About Me</h2>-->
                        <p>Nice to see you here!</p>
                        <h4>Who am I?</h4>
                        <p>I'm Scott Siri, a technical creative with an eye for UX. I've been coding since I was 15, where I took my first programming class and my life has never been the same. It's fun for me. Designing and building applications is an outlet for both my analytical and creatives sides.</p>
                        <p>I am fundamentally a problem solver. I meet challenges with curiosity and a determination to turn them into opportunities. Whenever I hit a roadblock, I figure out why it happened and use it as a learning experience. </p>
                        <p>I am curious. I did my Master's abroad in the Netherlands to get a different perspective. I wanted to learn how people all over the world interact with technology, not just the people in one corner of it. I am always seeking to learn something new.</p>
                        <h4>Hobbies & Interests</h4>
                        <p>Outside of development, I keep myself busy. I am a lifelong learner, always looking to find something new. I've been playing with creative writing lately, especially with speculative fiction. I enjoy tabletop games with my friends (lately I've been playing DCC and a homebrew system I made). To keep myself active, I am a hobbyist distance runner (5ks and 10ks mostly).</p>
                        <br>
                        <p>If you want to chat, reach out at <span class="strong-text">hello@jscottsiri.com</span></p>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
        <hr>
        <section id="skills" class="page animate-on-scroll">
            <div class="container">
                <h2 class="container-title">Skills</h2>
                <div class="container-content">
                    <div class="flex-container flex-col">
                        <div class="flex-col">
                            <h3>Languages</h3>
                            <ul class="tech-icon-list flex-row animate-on-scroll">
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/HTML5.svg" width="32" height="32" class="tech-icon" alt="HTML5" /><div>HTML</div></li>
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/CSS3.svg" width="32" height="32" class="tech-icon" alt="CSS3" /><div>CSS</div></li>
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/JavaScript.svg" width="32" height="32" class="tech-icon" alt="JavaScript" /><div>JavaScript</div></li>
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/TypeScript.svg" width="32" height="32" class="tech-icon" alt="TypeScript" /><div>TypeScript</div></li>
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/Python.svg" width="32" height="32" class="tech-icon" alt="Python" /><div>Python</div></li>
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/CSharp.svg" width="32" height="32" class="tech-icon" alt="C#" /><div>C#</div></li>
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/Java.svg" width="32" height="32" class="tech-icon" alt="Java" /><div>Java</div></li>
                                <li class="tech-icon-item"><img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="32" height="32" class="tech-icon" alt="SQL" /><div>SQL</div></li>
                            </ul>
                        </div>
                        <div class="flex-col near-full-container">
                            <h3>Frameworks & Libraries</h3>               
                            <ul class="tech-icon-list flex-row animate-on-scroll">
                                <li><img src="/assets/icons/TechStack/React.svg" width="32" height="32" class="tech-icon" alt="React" /><div>React</div></li>
                                <li><img src="/assets/icons/TechStack/Vue.js.svg" width="32" height="32" class="tech-icon" alt="Vue.js" /><div>Vue.js</div></li>
                                <li><img src="/assets/icons/TechStack/Redux.svg" width="32" height="32" class="tech-icon" alt="Redux" /><div>Redux</div></li>
                                <li><img src="/assets/icons/TechStack/Node.js.svg" width="32" height="32" class="tech-icon" alt="Node.js" /><div>Node.js</div></li>
                                <li><img src="/assets/icons/TechStack/Express.svg" width="32" height="32" class="tech-icon" alt="Express" /><div>Express</div></li>
                                <li><img src="/assets/icons/TechStack/Vite.js.svg" width="32" height="32" class="tech-icon" alt="Vite" /><div>Vite</div></li>
                                <li><img src="/assets/icons/TechStack/Tailwind%20CSS.svg" width="32" height="32" class="tech-icon" alt="Tailwind CSS" /><div>Tailwind CSS</div></li>
                                <li><img src="/assets/icons/TechStack/Material%20UI.svg" width="32" height="32" class="tech-icon" alt="MaterialUI" /><div>MaterialUI</div></li>
                                <li><img src="/assets/icons/TechStack/Pandas.svg" width="32" height="32" class="tech-icon" alt="Pandas" /><div>Pandas</div></li>
                                <li><img src="/assets/icons/TechStack/NumPy.svg" width="32" height="32" class="tech-icon" alt="NumPy" /><div>NumPy</div></li>
                                <li><img src="/assets/icons/TechStack/Jest.svg" width="32" height="32" class="tech-icon" alt="Jest" /><div>Jest</div></li>
                                <li><img src="/assets/icons/TechStack/Unity.svg" width="32" height="32" class="tech-icon" alt="Unity" /><div>Unity</div></li>
                                <li><img src="/assets/icons/TechStack/NET.svg" width="32" height="32" class="tech-icon" alt=".NET" /><div>.NET</div></li>
                                <li><img src="/assets/icons/TechStack/Socket.io.svg" width="32" height="32" class="tech-icon" alt="Socket.io" /><div>Socket.io</div></li>
                                <li><img src="/assets/icons/TechStack/ReactRouter.svg" width="32" height="32" class="tech-icon" alt="React Router" /><div>React Router</div></li>
                            </ul>
                        </div>             
                        <div  class="flex-col">
                            <h3>DevOps/Tooling</h3>
                            <ul class="tech-icon-list flex-row animate-on-scroll">
                                <li><img src="/assets/icons/TechStack/Git.svg" width="32" height="32" class="tech-icon" alt="Git" /><div>Git</div></li>
                                <li><img src="/assets/icons/TechStack/GitHub.svg" width="32" height="32" class="tech-icon" alt="GitHub" /><div>GitHub</div></li>
                                <li><img src="/assets/icons/TechStack/GitLab.svg" width="32" height="32" class="tech-icon" alt="GitLab" /><div>GitLab</div></li>
                                <li><img src="/assets/icons/TechStack/Redis.svg" width="32" height="32" class="tech-icon" alt="Redis" /><div>Redis</div></li>
                                <li><img src="/assets/icons/TechStack/Docker.svg" width="32" height="32" class="tech-icon" alt="Docker" /><div>Docker</div></li>
                                <li><img src="/assets/icons/TechStack/Azure.svg" width="32" height="32" class="tech-icon" alt="Azure" /><div>Azure</div></li>
                                <li><img src="/assets/icons/TechStack/BitBucket.svg" width="32" height="32" class="tech-icon" alt="BitBucket" /><div>BitBucket</div></li>
                                <li><img src="/assets/icons/TechStack/Jira.svg" width="32" height="32" class="tech-icon" alt="Jira" /><div>Jira</div></li>
                            </ul>
                        </div>               
                        <div  class="flex-col">
                            <h3>Apps</h3>
                            <ul class="tech-icon-list flex-row animate-on-scroll">
                                <li><img src="/assets/icons/TechStack/Figma.svg" width="32" height="32" class="tech-icon" alt="Figma" /><div>Figma</div></li>
                                <li><img src="/assets/icons/TechStack/Adobe%20Photoshop.svg" width="32" height="32" class="tech-icon" alt="Adobe Photoshop" /><div>Photoshop</div></li>
                                <li><img src="/assets/icons/TechStack/Adobe%20Illustrator.svg" width="32" height="32" class="tech-icon" alt="Adobe Illustrator" /><div>Illustrator</div></li>
                                <li><img src="/assets/icons/TechStack/WebStorm.svg" width="32" height="32" class="tech-icon" alt="WebStorm" /><div>WebStorm</div></li>
                                <li><img src="/assets/icons/TechStack/Rider.svg" width="32" height="32" class="tech-icon" alt="Rider" /><div>Rider</div></li>
                                <li><img src="/assets/icons/TechStack/Visual%20Studio%20Code%20(VS%20Code).svg" width="32" height="32" class="tech-icon" alt="VSCode" /><div>VSCode</div></li>
        
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section id="experience" class="page">
            <div id="experience-menu-nav" class="experience-menu-container">
                <div class="experience-menu">
                    <ul class="experience-menu-list">
                        <li id="UU-Nav" class="experience-menu-item"><a href="#Utrecht-University"><button class="experience-menu-button"><img alt="Utrecht University Icon" class="experience-menu-img" src="/assets/images/UtrechtUniversity.jpg"/></button></a></li>
                        <li id="NJIT-Nav" class="experience-menu-item"><a href="#NJIT"><button class="experience-menu-button"><img alt="NJIT Icon" class="experience-menu-img" src="/assets/images/NJIT.jpg"/></button></a></li>
                        <li id="SMF-Nav" class="experience-menu-item"><a href="#SportsMainFrame"><button class="experience-menu-button"><img alt="SportsMainFrame Icon" class="experience-menu-img" src="/assets/images/SportsMainFrame.jpg"/></button></a></li>
                        <li id="TNO-Nav" class="experience-menu-item"><a href="#TNO"><button class="experience-menu-button"><img alt="TNO Icon" class="experience-menu-img" src="/assets/images/TNO.jpg"/></button></a></li>
                        <li id="GP-Nav" class="experience-menu-item"><a href="#GraphPolaris"><button class="experience-menu-button"><img alt="GraphPolaris Icon" class="experience-menu-img" src="/assets/images/GraphPolaris.jpg"/></button></a></li>
                        <li id="ADP-Nav" class="experience-menu-item"><a href="#ADP"><button class="experience-menu-button"><img alt="ADP Icon" class="experience-menu-img" src="/assets/images/ADP.jpg"/></button></a></li>
                    </ul>
                </div>
            </div>
            <div class="container" id="experience-content-container">
                <h2 class="animate-on-scroll">Experience</h2>
                <div class="experience-container education animate-on-scroll"  id="Utrecht-University">
                    <div class="experience-card">
                        <div class="experience-header">
                            <div class="flex-side gap-1">
                                <div class="flex-vertical-center">
                                    <img alt="Utrecht University Icon" class="exp-image" src="/assets/images/UtrechtUniversity.jpg" />
                                </div>
                                <div class="flex-down">
                                    <p>Utrecht University</p>
                                    <p class="strong-text">Human-Computer Interaction, MSc</p>
                                </div>
                            </div>
                            <div class="flex-down">
                                <p><span>Sep. 2022</span> - <span>Jun. 2024</span></p>
                                <p>Utrecht, NL</p>
                            </div>
                        </div>
                        <hr>
                        <div class="experience-content">
                            <div class="experience-description">
                                <p>By 2022, I wanted to expand on my existing knowledge for designing and improving technology. I received acceptances to several different universities, but found my future program in the Netherlands. Looking through courses and talking to alumni, I found that Human-Computer Interaction program at Utrecht University would best expand my skillset. In addition to learning advanced technical concepts, I would learn to work across multi-national teams.</p>
                                <p>During my time at Utrecht, I learned from experts from across Europe. Unlike many programs, I had a lot of flexibility in deciding which classes I took, letting me explore concepts like data science, adaptive systems, and rapid prototyping. Many of my courses were hands-on, often grouping me into groups with students from all over the world to solve problems. Additionally, I worked with data visualization at GraphPolaris during the summer and fall, getting development & UX experience in the Dutch startup scene.</p>
                                <p>The end of my program had me working my thesis. I managed to find an industry position at TNO Defense, Safety, and Security- where I worked fulltime on my research. There, I got to work with an innovative group of Dutch researchers and professionals in the Human-Machine Teaming department. My thesis research, which was about how avatar fidelity impacts perceptions of prototyped 3D environments in virtual reality, helped inform design guidelines for high-impact design situations for the Dutch Navy. </p>
                            </div>
                            <hr  class="vertical">
                            <div class="experience-aside">
                                <p>Key Courses:</p>
                                    <ul>
                                        <li>Adaptive Interactive Systems</li>
                                        <li>Interaction Technology Innovation</li>
                                        <li>Multi-Agent Systems</li>
                                        <li>Social Computing</li>
                                        <li>Data Science & Society</li>
                                        <li>Technologies for Learning</li>
                                        <li>Quantitative Research Methods</li>
                                        <li>Qualitative Research Methods</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br>        
                <div class="experience-container education animate-on-scroll" id="NJIT">
                    <div class="experience-card">
                        <div class="experience-header">
                            <div class="flex-side gap-1">
                                <div class="flex-vertical-center">
                                    <img alt="NJIT Icon" class="exp-image" src="/assets/images/NJIT.jpg" />
                                </div>
                                <div class="flex-down">
                                    <p>New Jersey Institute of Technology</p>
                                    <p class="strong-text">Human-Computer Interaction, BS</p>
                                </div>
                            </div>
                            <div class="flex-down">
                                <p><span>Sep. 2016</span> - <span>May 2020</span></p>
                                <p>Newark, NJ</p>
                            </div>
                        </div>
                        <hr>
                        <div class="experience-content">
                            <div class="experience-description">
                                <p>In 2016, I received an acceptance to the NJIT Albert Dorman Honors College for Computer Science. I enjoyed my computing courses immensely and became interested in how to build technology with people in mind. After some I exploration, I found the Human-Computer Interaction, a joint program with Rutgers University. I was hooked and spend the next years learning how to build technology for people. At NJIT, I learned how to design and develop applications. My courses at Rutgers let me learn the cognitive side of interaction, giving me a world class education both for the technical and design aspects of development.</p>
                                <p>While at NJIT, I found the Social Interaction Lab- run by Dr. Yvette Wohn. Working with her, I got involved in with research relating to livestreaming and social media, including livestreaming, virtual reality, and multiple account management. By the time I graduated, I had 3 peer reviewed publications at academic conferences and journals. The process let me learn a lot about how to study users and how they engage with technological systems.</p>
                                <p>Also at NJIT, I found myself in many leadership positions. While a Sophomore and Junior, I was on the Executive Board for NJIT Game Club- helping manage weekly events and occasional tournaments. Not long after, I became a Resident Assistant and helped keep the campus running smoothly. Being an Resident Assistant taught me to keep calm under pressure and kept me engaged with my community- especially as COVID hit. During this time, I joined the NJIT Senate, first as the Human-Computer Interaction major representative and later the Ying Wu College of Computing's departmental representative.</p>
                            </div>
                            <hr  class="vertical">
                            <div class="experience-aside">
                                <p>Honors & Responsibilities:</p>
                                    <ul>
                                        <li>Magna Cum Laude (3.82 GPA)</li>
                                        <li>Albert Dorman Honors Scholar</li>
                                        <li>Dana Knox Research Showcase Participant</li>
                                        <li>Resident Assistant</li>
                                        <li>NJIT Student Senator</li>
                                    </ul>
                                <hr>
                                <p>Key Courses:</p>
                                    <ul>
                                        <li>Advanced Website Development</li>
                                        <li>Advanced Web Applications</li>
                                        <li>Discovering User Needs for UX</li>
                                        <li>Usability & Measuring UX</li>
                                        <li>Designing the User Experience</li>
                                        <li>Foundations of Game Production</li>
                                        <li>Cyberpsychology</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="experience-container work animate-on-scroll" id="SportsMainFrame">
                    <div class="experience-card">
                        <div class="experience-header">
                            <div class="flex-side gap-1">
                                <div class="flex-vertical-center">
                                    <img alt="SportsMainFrame Icon" class="exp-image" src="/assets/images/SportsMainFrame.jpg" />
                                </div>
                                <div class="flex-down">
                                    <p>SportsMainFrame, LLC</p>
                                    <p class="strong-text">Chief Technology Officer/Lead Developer</p>
                                </div>
                            </div>
                            <div class="flex-down">
                                <p><span>Aug. 2024</span> - <span>Jan. 2026</span></p>
                                <p>Remote/Rockaway, NJ</p>
                            </div>
                        </div>
                        <hr>
                        <div class="experience-content">
                            <div class="experience-description">
                                <p>In the Summer of 2024, SportsMainFrame was looking to build a recreational sports management platform, combining rostering, scheduling, payments, and messaging into a single platform. With volunteerism at a low, the platform could reduce the load put in place by manual or less comprehensive options.</p>
                                <p>I led the 0-1 design and development for the platform. My responsibilities were diverse. I any given day, I could be using Figma to mock interfaces and get feedback, React and Tailwind to build out the frontend, or Node.js and Express to run SQL queries and build out API endpoints for the backend. Additionally, I was the primary person interfacing with Azure and managing GitHub repositories, running DevOps for the project. With a lean resource pool, I built out both an in-depth admin management web application and a streamlined responsive application for the end user to manage and reference their obligations.</p>
                                <p>I played a key interpersonal role in the company. Within the company, I managed a small team of part-time contractors who helped with development. I held regular meetings with my team to track progress and unblock problems. Outside of the company, I frequently participated in sessions with clients to understand pain points, their needs and wants, and contribute technical information to the discussion. I frequently met with business partners, like payment processors and cybersecurity teams, to address updates and concerns. After launch, I acted as a contact point for users and managed bugs developed during the process.</p>
                                <p>While SportsMainFrame was integrated into 25+ NJ towns, the platform was ultimately shut down in January of 2026. Despite this, the role was an incredible learning experience. I was the chief architect of the project, growing my developer skillset and my overall product skillset.</p>
                            </div>
                            <hr  class="vertical">
                            <div class="experience-aside">
                                <p>Stack Used:</p>
                                    <ul class="tech-icon-list flex-row">
                                        <li><img src="/assets/icons/TechStack/HTML5.svg" width="32" height="32" class="tech-icon" alt="HTML5" /><div>HTML</div></li>
                                        <li><img src="/assets/icons/TechStack/CSS3.svg" width="32" height="32" class="tech-icon" alt="CSS3" /><div>CSS</div></li>
                                        <li><img src="/assets/icons/TechStack/JavaScript.svg" width="32" height="32" class="tech-icon" alt="JavaScript" /><div>JavaScript</div></li>
                                        <li><img src="/assets/icons/TechStack/TypeScript.svg" width="32" height="32" class="tech-icon" alt="TypeScript" /><div>TypeScript</div></li>
                                        <li><img src="/assets/icons/TechStack/React.svg" width="32" height="32" class="tech-icon" alt="React" /><div>React</div></li>
                                        <li><img src="/assets/icons/TechStack/Tailwind%20CSS.svg" width="32" height="32" class="tech-icon" alt="Tailwind CSS" /><div>Tailwind CSS</div></li>
                                        <li><img src="/assets/icons/TechStack/Node.js.svg" width="32" height="32" class="tech-icon" alt="Node.js" /><div>Node.js</div></li>
                                        <li><img src="/assets/icons/TechStack/Express.svg" width="32" height="32" class="tech-icon" alt="Express" /><div>Express</div></li>
                                        <li><img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="32" height="32" class="tech-icon" alt="SQL" /><div>SQL</div></li>
                                        <li><img src="/assets/icons/TechStack/Azure.svg" width="32" height="32" class="tech-icon" alt="Azure" /><div>Azure</div></li>
                                        <li><img src="/assets/icons/TechStack/Git.svg" width="32" height="32" class="tech-icon" alt="Git" /><div>Git</div></li>
                                        <li><img src="/assets/icons/TechStack/GitHub.svg" width="32" height="32" class="tech-icon" alt="GitHub" /><div>GitHub</div></li>
                                        <li><img src="/assets/icons/TechStack/Docker.svg" width="32" height="32" class="tech-icon" alt="Docker" /><div>Docker</div></li>
                                        <li><img src="/assets/icons/TechStack/Figma.svg" width="32" height="32" class="tech-icon" alt="Figma" /><div>Figma</div></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="experience-container work animate-on-scroll" id="TNO">
                    <div class="experience-card">
                        <div class="experience-header">
                            <div class="flex-side gap-1">
                                <div class="flex-vertical-center">
                                    <img alt="TNO Icon" class="exp-image" src="/assets/images/TNO.jpg" />
                                </div>
                                <div class="flex-down">
                                    <p>TNO (Human-Machine Teaming)</p>
                                    <p class="strong-text">Research Developer (Thesis)</p>
                                </div>
                            </div>
                            <div class="flex-down">
                                <p><span>Nov. 2023</span> - <span>Jun. 2024</span></p>
                                <p>Soesterberg, NL</p>
                            </div>
                        </div>
                        <hr >
                        <div class="experience-content">
                            <div class="experience-description">
                                <p>While doing my Thesis at Utrecht University, I managed to get a full-time, industry position with TNO's Human-Machine Teaming department. They were working on prototyping 3D workspaces with virtual reality so they could simulate efficiency before dedicating resources to construction. For my main project, I helped TNO identify how avatar fidelity impacted the perceptions of the environment. I worked with a high degree of autonomy, with periodic check-ins from my supervisors. In this project, I had to work on both development and research phases, both building out and running tests with the virtual world.</p>
                                <p>During the development phase, I worked with C# to build out situations in Unity3D and cast them to HTC XR Elite headsets. I needed to build out network coordination between small groups of people in a shared space, so I needed effective synergy with reality and the virtual reality. This was true for both the simple abstract avatars and the complex, humanoid avatars. Additionally, I needed to be able to manage the virtual world from outside, so I worked with a Vue.js interface to manage the environment in the virtual simulations.</p>
                                <p>For research, I tested groups of people's observations in virtual kitchens. Kitchens were workspaces that everyone was familiar with, so they made for good work-test environments. During the study, the users (in groups of two and three) would go through a series of virtual environments and then fill out surveys based on their observations. The users would do a set of rooms with a selected low-fidelity avatar and a set of rooms with a selected high-fidelity avatars. Additionally, notes were taken on observations made. Following the VR sessions, users were given a short, semi-structured interview that gave the opportunity to ask questions and clarify observations. This was then followed by a debriefing.</p>
                                <p>After the study, data collected was broken down and analyzed. Numerical data was analyzed through t-tests using the Python libraries NumPy and Pandas. While there was minimal difference with their initial paired t-tests, exploratory analyses with independent t-tests for each room set suggested that the initial avatar fidelity, rather than current avatar fidelity, led to significant differences in team dynamics and behaviors.</p>
                                <p>The results of the study suggest that avatar fidelity can prime a user to interpret their environment differently. Avatar fidelity influenced perceptions of interactivity and stylization in the virtual environment. Initial avatar fidelity may set a baseline for observations of prototyped spaces and team dynamics. These factors imply that avatar fidelity may impact the focus brainstorming and evaluation of 3D workspace prototypes. The insights from the study helped inform design guidelines for virtual reality prototyping at TNO.</p>
                            </div>
                            <hr class="vertical">
                            <div class="experience-aside">
                                <p>Stack Used:</p>
                                        <ul class="tech-icon-list flex-row">
                                            <li><img src="/assets/icons/TechStack/CSharp.svg" width="32" height="32" class="tech-icon" alt="C#" /><div>C#</div></li>
                                            <li><img src="/assets/icons/TechStack/NET.svg" width="32" height="32" class="tech-icon" alt=".NET" /><div>.NET</div></li>
                                            <li><img src="/assets/icons/TechStack/Unity.svg" width="32" height="32" class="tech-icon" alt="Unity" /><div>Unity</div></li>
                                            <li><img src="/assets/icons/TechStack/HTML5.svg" width="32" height="32" class="tech-icon" alt="HTML5" /><div>HTML</div></li><li><img src="/assets/icons/TechStack/CSS3.svg" width="32" height="32" class="tech-icon" alt="CSS3" /><div>CSS</div></li>
                                            <li><img src="/assets/icons/TechStack/JavaScript.svg" width="32" height="32" class="tech-icon" alt="JavaScript" /><div>JavaScript</div></li>
                                            <li><img src="/assets/icons/TechStack/TypeScript.svg" width="32" height="32" class="tech-icon" alt="TypeScript" /><div>TypeScript</div></li>
                                            <li><img src="/assets/icons/TechStack/Vue.js.svg" width="32" height="32" class="tech-icon" alt="Vue.js" /><div>Vue.js</div></li>
                                            <li><img src="/assets/icons/TechStack/Python.svg" width="32" height="32" class="tech-icon" alt="Python" /><div>Python</div></li>
                                            <li><img src="/assets/icons/TechStack/Pandas.svg" width="32" height="32" class="tech-icon" alt="Pandas" /><div>Pandas</div></li>  
                                            <li><img src="/assets/icons/TechStack/NumPy.svg" width="32" height="32" class="tech-icon" alt="NumPy" /><div>NumPy</div></li>
                                            <li><img src="/assets/icons/TechStack/Git.svg" width="32" height="32" class="tech-icon" alt="Git" /><div>Git</div></li>
                                            <li><img src="/assets/icons/TechStack/GitLab.svg" width="32" height="32" class="tech-icon" alt="GitLab" /><div>GitLab</div></li>
                                        </ul> 
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="experience-container work animate-on-scroll" id="GraphPolaris">
                    <div class="experience-card">
                        <div class="experience-header">
                            <div class="flex-side gap-1">
                                <div class="flex-vertical-center">
                                    <img alt="GraphPolaris Icon" class="exp-image" src="/assets/images/GraphPolaris.jpg" />
                                </div>
                                <div class="flex-down">
                                    <p>GraphPolaris</p>
                                    <p class="strong-text">UX Engineer (Contract)</p>
                                </div>
                            </div>
                            <div class="flex-down">
                                <p><span>May 2023</span> - <span>Oct. 2023</span></p>
                                <p>Utrecht, NL</p>
                            </div>
                        </div>
                        <hr>
                        <div class="experience-content">
                            <div class="experience-description">
                                <p>While studying at Utrecht University, I worked for a decentralized data-visualization startup as a UX Engineer. From the end of classes until my thesis, I build out dashboards using React TypeScript, Redux, Tailwind CSS, and MUI. I designed features with Figma and performed usability tests with the mock-ups, iterating on them and implementing them.</p>
                                <p>I worked on a multinational AGILE team with developers and data analysts to visualize graph node data stored remotely. My multifaceted role meant that I wore many hats. I regularly worked with my peer developers to review and refine the available code, as well as provide design insights for features being built.</p>
                                <p>One key feature I worked on was the application navigation system. The complexity of data visualization meant that accessing the right information at the right time was a primary user flow. I refined the navigation mechanisms on the dashboard, both designing and coding changes made. I additionally developed and tuned the database connection Splash Page. When users connected their remote database, we wanted to evoke key insights and options immediately when a user connected a database. This was done by showing summaries of the data supplied and the ways that graph nodes connected to each other.</p>
                            </div>
                            <hr  class="vertical">
                            <div class="experience-aside ">
                                <p>Stack Used:</p>
                                    <ul class="tech-icon-list flex-row">
                                        <li><img src="/assets/icons/TechStack/HTML5.svg" width="32" height="32" class="tech-icon" alt="HTML5" /><div>HTML</div></li>  
                                        <li><img src="/assets/icons/TechStack/CSS3.svg" width="32" height="32" class="tech-icon" alt="CSS3" /><div>CSS</div></li>  
                                        <li><img src="/assets/icons/TechStack/JavaScript.svg" width="32" height="32" class="tech-icon" alt="JavaScript" /><div>JavaScript</div></li>  
                                        <li><img src="/assets/icons/TechStack/TypeScript.svg" width="32" height="32" class="tech-icon" alt="TypeScript" /><div>TypeScript</div></li>
                                        <li><img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="32" height="32" class="tech-icon" alt="SQL" /><div>SQL</div></li>
                                        <li><img src="/assets/icons/TechStack/React.svg" width="32" height="32" class="tech-icon" alt="React" /><div>React</div></li>
                                        <li><img src="/assets/icons/TechStack/Redux.svg" width="32" height="32" class="tech-icon" alt="Redux" /><div>Redux</div></li>
                                        <li><img src="/assets/icons/TechStack/Vite.js.svg" width="32" height="32" class="tech-icon" alt="Vite" /><div>Vite</div></li>
                                        <li><img src="/assets/icons/TechStack/Tailwind%20CSS.svg" width="32" height="32" class="tech-icon" alt="Tailwind CSS" /><div>Tailwind CSS</div></li>
                                        <li><img src="/assets/icons/TechStack/Material%20UI.svg" width="32" height="32" class="tech-icon" alt="MaterialUI" /><div>MaterialUI</div></li>
                                        <li><img src="/assets/icons/TechStack/Git.svg" width="32" height="32" class="tech-icon" alt="Git" /><div>Git</div></li>
                                        <li><img src="/assets/icons/TechStack/GitLab.svg" width="32" height="32" class="tech-icon" alt="GitLab" /><div>GitLab</div></li>
                                        <li><img src="/assets/icons/TechStack/Docker.svg" width="32" height="32" class="tech-icon" alt="Docker" /><div>Docker</div></li>
                                        <li><img src="/assets/icons/TechStack/Figma.svg" width="32" height="32" class="tech-icon" alt="Figma" /><div>Figma</div></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="experience-container work animate-on-scroll" id="ADP">
                    <div class="experience-card">
                        <div class="experience-header">
                            <div class="flex-side gap-1">
                                <div class="flex-vertical-center">
                                    <img alt="ADP Icon" class="exp-image" src="/assets/images/ADP.jpg" />
                                </div>
                                <div class="flex-down">
                                    <p>Automatic Data Processing</p>
                                    <p class="strong-text">Application Developer</p>
                                </div>
                            </div>
                            <div class="flex-down">
                                <p><span>Aug. 2020</span> - <span>Aug. 2022</span></p>
                                <p>New York City, NY</p>
                            </div>
                        </div>
                        <hr>
                        <div class="experience-content">
                            <div class="experience-description">
                                <p>Following an internship in the Summer of 2019, I worked as a member of Aviato, an Agile team focused primarily on the payroll system of Lifion (now ADP Lyric HCM). Payroll related microservices are high-impact- not getting paid in an efficient, timely manner is crucial to any company. Clients, especially Fortune 500 companies, require a good deal of customization and control over the process.</p>
                                <p>On any given day, I could be working anywhere in the stack.  I regularly contributed to frontend development by building and modifying user interfaces, adding in new functionalities, and refactoring legacy code. Oftentimes, I worked back into the business logic of the platform, working with SQL databases, Redis Caches, and API Endpoints to pipe data through the platform.</p>
                                <p>Whether building features, fixing bugs, or improving legacy code, I acted as a full member of the Aviato team. I worked with product managers and my peer developers while participating in Scrum ceremonies, Sprint Planning, and Reviews. I regularly took part in QA methods, peer-reviewing code and building out both unit and integration tests for the code I wrote. I stored and maintained code with CI/CD tools like Git, BitBucket, and Jira.</p>
                            </div>
                            <hr class="vertical">
                            <div class="experience-aside ">
                                <p>Stack Used:</p>
                                    <ul class="tech-icon-list flex-row">
                                        <li><img src="/assets/icons/TechStack/HTML5.svg" width="32" height="32" class="tech-icon" alt="HTML5" /><div>HTML</div></li>
                                        <li><img src="/assets/icons/TechStack/CSS3.svg" width="32" height="32" class="tech-icon" alt="CSS3" /><div>CSS</div></li>
                                        <li><img src="/assets/icons/TechStack/Python.svg" width="32" height="32" class="tech-icon" alt="Python" /><div>Python</div></li><li><img src="/assets/icons/TechStack/Java.svg" width="32" height="32" class="tech-icon" alt="Java" /><div>Java</div></li>
                                        <li><img src="/assets/icons/TechStack/Jest.svg" width="32" height="32" class="tech-icon" alt="Jest" /><div>Jest</div></li>
                                        <li><img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="32" height="32" class="tech-icon" alt="Java" /><div>SQL</div></li>
                                        <li><img src="/assets/icons/TechStack/Git.svg" width="32" height="32" class="tech-icon" alt="Git" /><div>Git</div></li>
                                        <li><img src="/assets/icons/TechStack/BitBucket.svg" width="32" height="32" class="tech-icon" alt="BitBucket" /><div>BitBucket</div></li>
                                        <li><img src="/assets/icons/TechStack/Jira.svg" width="32" height="32" class="tech-icon" alt="Jira" /><div>Jira</div></li>
                                        <li><img src="/assets/icons/TechStack/Docker.svg" width="32" height="32" class="tech-icon" alt="Docker" /><div>Docker</div></li>
                                        <li><img src="/assets/icons/TechStack/Redis.svg" width="32" height="32" class="tech-icon" alt="Redis" /><div>Redis</div></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr>
        <section id="projects" class="page">
            <div class="container">
                <h2 class="container-title">Projects</h2>
                <div class="container-content">
                    <div id="ADP" class="exp-item cursor-pointer">
                        <div class="image-container">
                            <img alt="ADP Icon" class="exp-image" src="/assets/images/ADP.jpg" />
                        </div>
                        <div class="exp-content" >
                            <div class="exp-text">
                                <div class="strong-text">Application Developer</div>
                                <div class="light-text">Automatic Data Processing</div>
                                <div class="light-text"><span>Aug. 2020</span> - <span>Aug. 2022</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
    <footer>
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
    </footer>
    <div id="follow-mouse">
    </div>
  </div>
`

ToggleLongTiles();
followMouse("container");
menuToggle("mobile-nav-menu","nav-menu-toggle",["mobile-nav-button", "mobile-nav-cancel"])
ScrollEffects();
EffectWhileInViewport("experience-container","viewCard","unviewCard")
NavMenuTargeting("active","inactive",[{viewElementID:"GraphPolaris",navElementID:"GP-Nav"},{viewElementID:"ADP",navElementID:"ADP-Nav"},{viewElementID:"TNO",navElementID:"TNO-Nav"},{viewElementID:"SportsMainFrame",navElementID:"SMF-Nav"},{viewElementID:"NJIT",navElementID:"NJIT-Nav"},{viewElementID:"Utrecht-University",navElementID:"UU-Nav"},{viewElementID:"experience-content-container",navElementID:"experience-menu-nav"},{viewElementID:"splash",navElementID:"Home-Nav"},{viewElementID:"about",navElementID:"About-Nav"},{viewElementID:"skills",navElementID:"Skills-Nav"},{viewElementID:"experience",navElementID:"Experience-Nav"},{viewElementID:"projects",navElementID:"Projects-Nav"}],)
// hoverTilt("Scott-Face",20,20);