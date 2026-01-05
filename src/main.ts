import './style.css'

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
                <img src="../src/assets/images/UtrechtUniversity.jpg"  alt="LinkedIn"/>
            </div>
            <button id="nav-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </button>
        </div>
    </header>
    <section id="content-body" >
            <section class="card content-section" id="personal">
                <div class="content-section-container">
                    <div class="content-section-header">
                        Personal Info
                    </div>
                    <hr class="content-section-divider">
                    <div class="content-section-body">
                        <div class="content-subsection">
                            <div class="content-section-split big-unsplit">
                                <div class="image-container">
                                    <img id="profile-pic" src="../src/assets/images/ScottatHorseland.jpg" alt="Scott Siri, at the Assateague State Park (no horses)">
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
        <section class="card content-section" id="experience">
            <div class="content-section-container">
                <div class="content-section-header">
                    Experience
                </div>
                <hr class="content-section-divider">
                <div class="content-section-body">
                    <div class="content-subsection">
                        <h3>Education</h3>
                        <div class="long-tile">
                            <div class="image-container">
                                <img src="../src/assets/images/UtrechtUniversity.jpg">
                            </div>
                            <div>
                                <p class="maintext">Human Computer Interaction MSc</p>
                                <p class="subtext">Utrecht University</p>
                                <p class="subtext">Sept. 2022  -  June 2024</p>
                            </div>
                        </div>                        
                        <div class="long-tile">
                            <div class="image-container">
                                <img src="../src/assets/images/NJIT.jpg">
                            </div>
                            <div>
                                <p class="maintext">Human Computer Interaction BS</p>
                                <p class="subtext">New Jersey Institute of Technology</p>
                                <p class="subtext">Sept. 2016  -  May 2020</p>
                            </div>
                        </div>
                        <h3>Work</h3>
                        <div class="long-tile">
                            <div class="image-container">
                                <img src="../src/assets/images/SportsMainFrame.jpg">
                            </div>
                            <div>
                                <p class="maintext">Chief Technology Officer/Lead Developer</p>
                                <p class="subtext">SportsMainFrame, LLC</p>
                                <p class="subtext">Aug. 2024  -  Current</p>
                            </div>
                        </div>
                        <div class="long-tile">
                            <div class="image-container">
                                <img src="../src/assets/images/TNO.jpg">
                            </div>
                            <div>
                                <p class="maintext">Research Developer (Thesis Contractor)</p>
                                <p class="subtext">Netherlands Organisation for Applied Scientific Research (TNO)</p>
                                <p class="subtext">Oct. 2023  -  June 2024</p>
                            </div>
                        </div>
                        <div class="long-tile">
                            <div class="image-container">
                                <img src="../src/assets/images/GraphPolaris.jpg">
                            </div>
                            <div>
                                <p class="maintext">UX Engineer (Contractor)</p>
                                <p class="subtext">GraphPolaris</p>
                                <p class="subtext">May 2023  -  Oct. 2023</p>
                            </div>
                        </div>
                        <div class="long-tile">
                            <div class="image-container">
                                <img src="../src/assets/images/ADP.jpg">
                            </div>
                            <div>
                                <p class="maintext">Application Developer</p>
                                <p class="subtext">Automatic Data Processing (ADP)</p>
                                <p class="subtext">Aug. 2020  -  Aug. 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="card content-section" id="projects">
                       <div class="content-section-container">
                <div class="content-section-header">
                    Projects
                </div>
                <hr class="content-section-divider">
                <div class="content-section-body">
                    <div class="content-subsection">
                        <h3>Attributes</h3>
                        <div class="content-items">
                            <p>Name:</p>
                            <p>J Scott Siri (See Logo)</p>  
                            <p>Pronouns:</p>
                            <p>He/Him</p>                         
                            <p>Age:</p>
                            <p>28 yo</p>                            
                            <p>Height:</p>
                            <p>~16 Soda Cans</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>

  </div>
`