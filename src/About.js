import { useState } from 'react';

const About = () => {

    const [showAbout1, setShowAbout1] = useState(true);
    const [showAbout2, setShowAbout2] = useState(false);
    const [showAbout3, setShowAbout3] = useState(false);
    const [showAbout4, setShowAbout4] = useState(false);
    // const [showAbout5, setShowAbout5] = useState(false);

    function handleShowAbout1 () {
        if ( showAbout1 ) {
            setShowAbout1(false);
        } else {
            setShowAbout1(true);
        }
    }

    function handleShowAbout2 () {
        if ( showAbout2 ) {
            setShowAbout2(false);
        } else {
            setShowAbout2(true);
        }
    }

    function handleShowAbout3 () {
        if ( showAbout3 ) {
            setShowAbout3(false);
        } else {
            setShowAbout3(true);
        }
    }

    function handleShowAbout4 () {
        if ( showAbout4 ) {
            setShowAbout4(false);
        } else {
            setShowAbout4(true);
        }
    }

    // function handleShowAbout5 () {
    //     if ( showAbout5 ) {
    //         setShowAbout5(false);
    //     } else {
    //         setShowAbout5(true);
    //     }
    // }


    return (
        <div className="about-page">
            <h1>About</h1>

            <section className="about">    
                <div className="about-header" onClick={ handleShowAbout1 }>
                    <h2>Web Development</h2>
                    { !showAbout1 && <i class="fas fa-plus"></i> }
                    { showAbout1 && <i class="fas fa-minus"></i> }
                </div>

                { showAbout1 && 
                    <div className="about-content">

                        <p>In December 2020 I left my job at the University of Brighton in order to focus full-time on retraining as a Web Developer. In order to achieve this I set myself a time frame of one year and devoted myself to being, once again, a full time student.</p>

                    <p>I was drawn to programming and web development as a tool to solve many real world problems and provide value to society. I wanted to challenge myself mentally and create more opportunities to develop both personally and professionally.</p>
                    </div>
                }
            </section>

            <section className="about">
                <div className="about-header" onClick={ handleShowAbout2 }>
                    <h2>CS50x</h2>
                    { !showAbout2 && <i class="fas fa-plus"></i> }
                    { showAbout2 && <i class="fas fa-minus"></i> }
                </div>

                { showAbout2 && 
                    <div className="about-content">
                        <p>I started my journey by enrolling in the <a href="https://cs50.harvard.edu/x/2021/" target="_blank" rel="noopener noreferrer">CS50x</a> online course from Harvard University. I had spoken to various people in the industry and had been recommended it as a good foundation in Computer Science.</p>
                    <p>During the course we progressed through various languages, frameworks and concepts such as:</p>
                   
                    <div className="about-container">
                        <div className="about-item">
                            <ul>
                                <li>C</li>
                                <li>Python, Flask, Django</li>
                                <li>SQL</li>
                                <li>HTML + CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="about-item">
                            <ul>
                                <li>Data structures</li>
                                <li>Algorithms</li>
                                <li>Memory Allocation</li>
                                <li>DOM Manipulation</li>
                            </ul>
                        </div>
                    </div>

                    </div>
                }
            </section>

            <section className="about">
                <div className="about-header" onClick={ handleShowAbout3 }>
                    <h2>JavaScript & ReactJS</h2>
                    { !showAbout3 && <i class="fas fa-plus"></i> }
                    { showAbout3 && <i class="fas fa-minus"></i> }
                </div>
                
                { showAbout3 && 
                <div className="about-content">
                     <p>After completing CS50x, I focused on learning Frontend technologies with the aim of equipping myself with the skills required in an entry level Web Development role. I chose to learn the React framework as it was the most popular at the time and therefore opened up the most opportunities.</p>

                    <p>After some research I came across <a href="https://zerotomastery.io/blog/learn-to-code-for-free" target="_blank" rel="noopener noreferrer">this blog post</a>, which I used as a curriculum guide, this provided me with plenty of resources and seemed logical and efficient. I learnt the following skills using resources found here and elsewhere including the documentation for various technologies themselves.</p>

                    <div className="about-list">
                <ul>
                    <li><strong>HTML + CSS</strong> - I used these to build the layouts and styling for various mock websites. I focused on building responsive websites with a mobile first approach and colour themes which could be easily amended.</li>
                    <li><strong>JavaScript</strong> - I then used JavaScript to build interactive elements for websites such as a Dark Mode Toggle, Random Colour changer, a NavBar/Sidebar, embedded videos and a Review slider.</li>
                    <li><strong>Node.JS</strong> & <strong>Express</strong> - I used these to build the backend API for my contact form which uses NodeMailer to send messages to my email.</li>
                    <li><strong>React</strong> - Once I felt comfortable using JavaScript I started learning the React Framework to build reusable components and single page websites, such as this website.</li>
                </ul>
            </div>

                </div>
                }
            </section>

            <section className="about">
                <div className="about-header" onClick={ handleShowAbout4 }>
                    <h2>Additional Skills</h2>
                    { !showAbout4 && <i class="fas fa-plus"></i> }
                    { showAbout4 && <i class="fas fa-minus"></i> }
                </div>
                
                { showAbout4 && 
                <div className="about-content">
                    <p>I have been using Linux and windows as my preferred operating systems for several years now and have previous experience with Mac OS. I am comfortable using the CLI on my Linux machines.</p>
                    <p>I have excellent interpersonal and communication skills, am a great team player and am aware that these soft skills are valuable in the tech industry.</p>
                </div>
                }
            </section>

            {/* <section className="about">
                <div className="about-header" onClick={ handleShowAbout5 }>
                    <h2>Resources</h2>
                    { !showAbout5 && <i class="fas fa-plus"></i> }
                    { showAbout5 && <i class="fas fa-minus"></i> }
                </div>
                
                { showAbout5 && 
                <div className="about-content">
                    <p>I am self-teaching using mostly online resources such as:</p>
                    <div className="about-list">
                    <ul>
                        <li><a href="https://cs50.harvard.edu/x/2021/" target="_blank" rel="noopener noreferrer">CS50x 2021 (Harvard University)</a></li>
                        <li><a href="https://fullstackopen.com" target="_blank" rel="noopener noreferrer">FullStackOpen (University of Helsinki)</a></li>
                        <li><a href="https://zerotomastery.io/blog/learn-to-code-for-free/" target="_blank" rel="noopener noreferrer">Zero to Mastery</a></li>
                        <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">Javascript.info</a></li>
                        <li><a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">Hacker Rank</a></li>
                        <li><a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">Code Wars</a></li>
                    </ul>
                    </div>
                </div>
                }
            </section> */}
        </div>
    );
}
 
export default About