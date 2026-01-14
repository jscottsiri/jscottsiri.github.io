import './m3-styles.css'
import {ToggleLongTiles} from "./select_toggle.ts";
import {followMouse} from "./followMouse.ts";
import {menuToggle} from "./menu-toggle.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div >
    <header class="site-header">
        <div id="logo"><span class="no-copy"><a class="a-button" href="#" >J Scott Siri</a></span></div>
        <div id="nav-container">
            <ul class="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li class="dont"><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <div id="social-links">
        <a class="pointer-cursor" title="Email" href="mailto:hello@jscottsiri.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                </svg>
            </a>
            <a class="pointer-cursor" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/john-siri-jr-b7a581171">
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
<!--        <section id="about" class="page">-->
<!--        <div>-->
<!--            <h2>About Me</h2>-->
<!--            <p>Nice to see you here!</p>-->
<!--            <h4>Who am I?</h4>-->
<!--            <p>I'm Scott Siri, a technical creative with an eye for UX. I've been coding since I was 15, where I took my first programming class and my life has never been the same. It's fun for me. Designing and building applications is an outlet for both my analytical and creatives sides.</p>-->
<!--            <p>I am fundamentally a problem solver. I meet challenges with curiosity and a determination to turn them into opportunities. Whenever I hit a roadblock, I figure out why it happened and use it as a learning experience. </p>-->
<!--            <p>I am curious. I did my Master's abroad in the Netherlands to get a different perspective. I wanted to learn how people all over the world interact with technology, not just the people in one corner of it. I am always seeking to learn something new.</p>-->
<!--            <h4>Hobbies & Interests</h4>-->
<!--            <p>Outside of development, I keep myself busy. I am a lifelong learner, always looking to find something new. I've been playing with creative writing lately, especially with speculative fiction. I enjoy tabletop games with my friends (lately I've been playing DCC and a homebrew system I made). To keep myself active, I am a hobbyist distance runner (5ks and 10ks mostly).</p>-->
<!--            <br>-->
<!--            <p>If you want to chat, reach out at <span class="strong-text">hello@jscottsiri.com</span></p>-->
<!--        </div>-->
<!--        <div></div>-->
<!--        </section>-->
<!--        <hr>-->
<!--        <section id="skills" class="page">-->
<!--             <h2>Skills</h2>-->
<!--            <div class="flex-container">-->
<!--                <div class="flex-col">-->
<!--                    <h3>Languages</h3>-->
<!--                    <ul class="icon-list-items">-->
<!--                        <li><img src="/assets/icons/TechStack/HTML5.svg" width="32" height="32" class="tech-icon" alt="HTML5" /><div>HTML</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/CSS3.svg" width="32" height="32" class="tech-icon" alt="CSS3" /><div>CSS</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/JavaScript.svg" width="32" height="32" class="tech-icon" alt="JavaScript" /><div>JavaScript</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/TypeScript.svg" width="32" height="32" class="tech-icon" alt="TypeScript" /><div>TypeScript</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Python.svg" width="32" height="32" class="tech-icon" alt="Python" /><div>Python</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/CSharp.svg" width="32" height="32" class="tech-icon" alt="C#" /><div>C#</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Java.svg" width="32" height="32" class="tech-icon" alt="Java" /><div>Java</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="32" height="32" class="tech-icon" alt="Java" /><div>SQL</div></li>-->
<!--                    </ul>-->
<!--                </div>-->
<!--                <div class="flex-col near-full-container">-->
<!--                    <h3>Frameworks & Libraries</h3>               -->
<!--                    <ul class="icon-list-items">-->
<!--                        <li><img src="/assets/icons/TechStack/React.svg" width="32" height="32" class="tech-icon" alt="React" /><div>React</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Vue.js.svg" width="32" height="32" class="tech-icon" alt="Vue.js" /><div>Vue.js</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Redux.svg" width="32" height="32" class="tech-icon" alt="Redux" /><div>Redux</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Node.js.svg" width="32" height="32" class="tech-icon" alt="Node.js" /><div>Node.js</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Express.svg" width="32" height="32" class="tech-icon" alt="Express" /><div>Express</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Vite.js.svg" width="32" height="32" class="tech-icon" alt="Vite" /><div>Vite</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Tailwind%20CSS.svg" width="32" height="32" class="tech-icon" alt="Tailwind CSS" /><div>Tailwind CSS</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Material%20UI.svg" width="32" height="32" class="tech-icon" alt="MaterialUI" /><div>MaterialUI</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Pandas.svg" width="32" height="32" class="tech-icon" alt="Pandas" /><div>Pandas</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/NumPy.svg" width="32" height="32" class="tech-icon" alt="NumPy" /><div>NumPy</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Jest.svg" width="32" height="32" class="tech-icon" alt="Jest" /><div>Jest</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Unity.svg" width="32" height="32" class="tech-icon" alt="Unity" /><div>Unity</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/NET.svg" width="32" height="32" class="tech-icon" alt=".NET" /><div>.NET</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Socket.io.svg" width="32" height="32" class="tech-icon" alt="Socket.io" /><div>Socket.io</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/ReactRouter.svg" width="32" height="32" class="tech-icon" alt="React Router" /><div>React Router</div></li>-->
<!--                    </ul>-->
<!--                </div>             -->
<!--                <div  class="flex-col">-->
<!--                    <h3>DevOps/Tooling</h3>-->
<!--                    <ul class="icon-list-items">-->
<!--                        <li><img src="/assets/icons/TechStack/Git.svg" width="32" height="32" class="tech-icon" alt="Git" /><div>Git</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/GitHub.svg" width="32" height="32" class="tech-icon" alt="GitHub" /><div>GitHub</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/GitLab.svg" width="32" height="32" class="tech-icon" alt="GitLab" /><div>GitLab</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Redis.svg" width="32" height="32" class="tech-icon" alt="Redis" /><div>Redis</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Docker.svg" width="32" height="32" class="tech-icon" alt="Docker" /><div>Docker</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Azure.svg" width="32" height="32" class="tech-icon" alt="Azure" /><div>Azure</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/BitBucket.svg" width="32" height="32" class="tech-icon" alt="BitBucket" /><div>BitBucket</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Jira.svg" width="32" height="32" class="tech-icon" alt="Jira" /><div>Jira</div></li>-->
<!--                    </ul>-->
<!--                </div>               -->
<!--                <div  class="flex-col">-->
<!--                    <h3>Apps</h3>-->
<!--                    <ul class="icon-list-items">-->
<!--                        <li><img src="/assets/icons/TechStack/Figma.svg" width="32" height="32" class="tech-icon" alt="Figma" /><div>Figma</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Adobe%20Photoshop.svg" width="32" height="32" class="tech-icon" alt="Adobe Photoshop" /><div>Photoshop</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Adobe%20Illustrator.svg" width="32" height="32" class="tech-icon" alt="Adobe Illustrator" /><div>Illustrator</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/WebStorm.svg" width="32" height="32" class="tech-icon" alt="WebStorm" /><div>WebStorm</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Rider.svg" width="32" height="32" class="tech-icon" alt="Rider" /><div>Rider</div></li>-->
<!--                        <li><img src="/assets/icons/TechStack/Visual%20Studio%20Code%20(VS%20Code).svg" width="32" height="32" class="tech-icon" alt="VSCode" /><div>VSCode</div></li>-->

<!--                    </ul>-->
<!--                </div>-->
<!--            </div>-->

<!--        </section>-->
<!--        <hr>-->
<!--        <section id="experience" class="page">-->
<!--            <h2>Experience</h2>-->
<!--            <div id="experience-container-2" class="split near-full-container">-->
<!--                <div>-->
<!--                    <h3>Education</h3>-->
<!--                    <div id="UU" class="exp-item cursor-pointer">-->
<!--                        <div class="image-container">-->
<!--                            <img class="exp-image" src="/assets/images/UtrechtUniversity.jpg" />-->
<!--                        </div>-->
<!--                        <div class="exp-content" >-->
<!--                            <div class="exp-text">-->
<!--                                <div class="strong-text">Human-Computer Interaction MSc</div>-->
<!--                                <div class="light-text">Utrecht University</div>-->
<!--                                <div class="light-text"><span>Sep. 2022</span> - <span>Aug. 2024</span></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div id="NJIT" class="exp-item cursor-pointer">-->
<!--                        <div class="image-container">-->
<!--                            <img class="exp-image" src="/assets/images/NJIT.jpg" />-->
<!--                        </div>-->
<!--                        <div class="exp-content" >-->
<!--                            <div class="exp-text">-->
<!--                                <div class="strong-text">Human Computer Interaction BS</div>-->
<!--                                <div class="light-text">New Jersey Institute of Technology</div>-->
<!--                                <div class="light-text"><span>Sep. 2016</span> - <span>May 2020</span></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div>-->
<!--                    <h3>Work</h3>-->
<!--                    <div id="SMF" class="exp-item cursor-pointer">-->
<!--                        <div class="image-container">-->
<!--                            <img class="exp-image" src="/assets/images/SportsMainFrame.jpg" />-->
<!--                        </div>-->
<!--                        <div class="exp-content cursor-pointer" >-->
<!--                            <div class="exp-text">-->
<!--                                <div class="strong-text">Chief Technology Officer/Lead Developer</div>-->
<!--                                <div class="light-text">SportsMainFrame, LLC</div>-->
<!--                                <div class="light-text"><span>Aug. 2024</span> - <span>Jan 2026</span></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div id="TNO" class="exp-item cursor-pointer">-->
<!--                        <div class="image-container">-->
<!--                            <img class="exp-image" src="/assets/images/TNO.jpg" />-->
<!--                        </div>-->
<!--                        <div class="exp-content" >-->
<!--                            <div class="exp-text">-->
<!--                                <div class="strong-text">Research Developer (Thesis)</div>-->
<!--                                <div class="light-text">TNO</div>-->
<!--                                <div class="light-text"><span>Nov. 2023</span> - <span>Jun. 2024</span></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div id="GraphPolaris" class="exp-item cursor-pointer">-->
<!--                        <div class="image-container">-->
<!--                            <img class="exp-image" src="/assets/images/GraphPolaris.jpg" />-->
<!--                        </div>-->
<!--                        <div class="exp-content " >-->
<!--                            <div class="exp-text">-->
<!--                                <div class="strong-text">UX Engineer (Contractor)</div>-->
<!--                                <div class="light-text">GraphPolaris</div>-->
<!--                                <div class="light-text"><span>May 2023</span> - <span>Oct. 2023</span></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div id="ADP" class="exp-item cursor-pointer">-->
<!--                        <div class="image-container">-->
<!--                            <img class="exp-image" src="/assets/images/ADP.jpg" />-->
<!--                        </div>-->
<!--                        <div class="exp-content" >-->
<!--                            <div class="exp-text">-->
<!--                                <div class="strong-text">Application Developer</div>-->
<!--                                <div class="light-text">Automatic Data Processing</div>-->
<!--                                <div class="light-text"><span>Aug. 2020</span> - <span>Aug. 2022</span></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->
<!--        <hr>-->
        <section id="about" class="page">
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
        <section id="skills" class="page">
            <div class="container">
                <h2 class="container-title">Skills</h2>
                <div class="container-content">
                    <div class="flex-container flex-col">
                        <div class="flex-col">
                            <h3>Languages</h3>
                            <ul class="tech-icon-list flex-row">
                                <li><img src="/assets/icons/TechStack/HTML5.svg" width="32" height="32" class="tech-icon" alt="HTML5" /><div>HTML</div></li>
                                <li><img src="/assets/icons/TechStack/CSS3.svg" width="32" height="32" class="tech-icon" alt="CSS3" /><div>CSS</div></li>
                                <li><img src="/assets/icons/TechStack/JavaScript.svg" width="32" height="32" class="tech-icon" alt="JavaScript" /><div>JavaScript</div></li>
                                <li><img src="/assets/icons/TechStack/TypeScript.svg" width="32" height="32" class="tech-icon" alt="TypeScript" /><div>TypeScript</div></li>
                                <li><img src="/assets/icons/TechStack/Python.svg" width="32" height="32" class="tech-icon" alt="Python" /><div>Python</div></li>
                                <li><img src="/assets/icons/TechStack/CSharp.svg" width="32" height="32" class="tech-icon" alt="C#" /><div>C#</div></li>
                                <li><img src="/assets/icons/TechStack/Java.svg" width="32" height="32" class="tech-icon" alt="Java" /><div>Java</div></li>
                                <li><img src="/assets/icons/TechStack/Azure%20SQL%20Database.svg" width="32" height="32" class="tech-icon" alt="Java" /><div>SQL</div></li>
                            </ul>
                        </div>
                        <div class="flex-col near-full-container">
                            <h3>Frameworks & Libraries</h3>               
                            <ul class="tech-icon-list flex-row">
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
                            <ul class="tech-icon-list flex-row">
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
                            <ul class="tech-icon-list flex-row">
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
            <div class="container">
                <h2 class="container-title">Experience</h2>
                <div class="container-content">
                    <div class="flex-split gap-4">
                        <div >
                            <h3>Education</h3>
                            <div id="UU" class="exp-item cursor-pointer">
                                <div class="image-container">
                                    <img alt="Utrecht University Icon" class="exp-image" src="/assets/images/UtrechtUniversity.jpg" />
                                </div>
                                <div class="exp-content" >
                                    <div class="exp-text">
                                        <div class="strong-text">Human-Computer Interaction MSc</div>
                                        <div class="light-text">Utrecht University</div>
                                        <div class="light-text"><span>Sep. 2022</span> - <span>Aug. 2024</span></div>
                                    </div>
                                </div>
                            </div>
                            <div id="NJIT" class="exp-item cursor-pointer">
                                <div class="image-container">
                                    <img alt="NJIT Icon" class="exp-image" src="/assets/images/NJIT.jpg" />
                                </div>
                                <div class="exp-content" >
                                    <div class="exp-text">
                                        <div class="strong-text">Human Computer Interaction BS</div>
                                        <div class="light-text">New Jersey Institute of Technology</div>
                                        <div class="light-text"><span>Sep. 2016</span> - <span>May 2020</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>Work</h3>
                            <div id="SMF" class="exp-item cursor-pointer">
                                <div class="image-container">
                                    <img alt="SportsMainFrame Icon" class="exp-image" src="/assets/images/SportsMainFrame.jpg" />
                                </div>
                                <div class="exp-content cursor-pointer" >
                                    <div class="exp-text">
                                        <div class="strong-text">Chief Technology Officer/Lead Developer</div>
                                        <div class="light-text">SportsMainFrame, LLC</div>
                                        <div class="light-text"><span>Aug. 2024</span> - <span>Jan 2026</span></div>
                                    </div>
                                </div>
                            </div>
                            <div id="TNO" class="exp-item cursor-pointer">
                                <div class="image-container">
                                    <img alt="TNO Icon" class="exp-image" src="/assets/images/TNO.jpg" />
                                </div>
                                <div class="exp-content" >
                                    <div class="exp-text">
                                        <div class="strong-text">Research Developer (Thesis)</div>
                                        <div class="light-text">TNO</div>
                                        <div class="light-text"><span>Nov. 2023</span> - <span>Jun. 2024</span></div>
                                    </div>
                                </div>
                            </div>
                            <div id="GraphPolaris" class="exp-item cursor-pointer">
                                <div class="image-container">
                                    <img alt="GraphPolaris Icon" class="exp-image" src="/assets/images/GraphPolaris.jpg" />
                                </div>
                                <div class="exp-content " >
                                    <div class="exp-text">
                                        <div class="strong-text">UX Engineer (Contractor)</div>
                                        <div class="light-text">GraphPolaris</div>
                                        <div class="light-text"><span>May 2023</span> - <span>Oct. 2023</span></div>
                                    </div>
                                </div>
                            </div>
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
// hoverTilt("Scott-Face",20,20);