import './m2styles.css'
import {ToggleLongTiles} from "./select_toggle.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div >
    <header class="site-header">
        <div id="logo"><span class="no-copy"><a class="a-button" href="#" >J Scott Siri</a></span></div>
        <div></div>
        <div id="mobile-menu">
            <button id="nav-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
        </div>
    </header>
    <body>
        <section id="experience" class="page tron-background">
            <div id="experience-container">
                <div id="education">
                    <h3>Education</h3>
                    <div class="long-tile-list">
                        <button class="long-tile">
                            <img alt="Utrecht University Logo" src="/assets/images/UtrechtUniversity.jpg" draggable="false">
                            <div>
                                <p class="maintext">Human Computer Interaction MSc</p>
                                <p class="subtext">Utrecht University</p>
                                <p class="subtext">Sept. 2022  -  June 2024</p>
                            </div>
                            </button>
                        <button class="square-tile"><img alt="Utrecht University Logo" src="/assets/images/UtrechtUniversity.jpg" draggable="false"></button>
                        <button class="square-tile"><img alt="NJIT Logo" src="/assets/images/NJIT.jpg" draggable="false"></button>
                    </div>
                </div>
                <div id="work">
                    <h3>Work</h3>
                    <div class="icon-list">
                        <button class="square-tile"><img alt="SportsMainFrame Logo" src="/assets/images/SportsMainFrame.jpg" draggable="false"></button>
                        <button class="square-tile"><img alt="TNO Logo" src="/assets/images/TNO.jpg" draggable="false"></button>
                        <button class="square-tile"><img alt="GraphPolaris Logo" src="/assets/images/GraphPolaris.jpg" draggable="false"></button>
                        <button class="square-tile"><img alt="ADP Logo" src="/assets/images/ADP.jpg" draggable="false"></button>
                    </div>
                </div>
            </div>
        </section>        
        <section id="projects" class="page">
            Test 2
        </section>
        <section id="splash">
            <div id="splash-img" class="tron-background">
                <div id="splash-outline">
                    <div class="masked-background"></div>
                </div>
            </div>
            <div id="splash-intro">
                
            </div>
            <div id="splash-content">
                <h3>Working Wonders</h3>
                <div class="grid-2">
                    <a href="#experience"><button>Experience</button></a>
                    <a href="#projects"><button>Projects</button></a>
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
  </div>
`

ToggleLongTiles();
