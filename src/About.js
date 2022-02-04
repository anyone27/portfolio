import { useState } from 'react';

const About = () => {

    const [showAbout, setShowAbout] = useState(false);
    const [showAbout2, setShowAbout2] = useState(false);
    const [showAbout3, setShowAbout3] = useState(false);

    function handleShowAbout () {
        if ( showAbout ) {
            setShowAbout(false);
        } else {
            setShowAbout(true);
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


    return (
        <div className="about-page">
            <h1>About</h1>

            <section className="about">
                <div className="about-header" onClick={ handleShowAbout }>
                    <h2>Resources</h2>
                    { !showAbout && <i class="fas fa-plus"></i> }
                    { showAbout && <i class="fas fa-minus"></i> }
                </div>
                
                { showAbout && 
                <div className="about-content">
                    <p>In February 2021 I finally took the leap and resigned from my job in order to re-train in Web Development.</p>
                    <p>I am self-teaching using mostly online resources such as:</p>
                    <ul>
                        <li><a href="https://cs50.harvard.edu/x/2021/" target="_blank" rel="noopener noreferrer">CS50x 2021</a></li>
                        <li><a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">Javascript.info</a></li>
                        <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
                        <li><a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">The Odin Project</a></li>
                        <li><a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer">Code Wars</a></li>
                    </ul>
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
                        <div className="subject-list">
                        <p>I started my journey by following the CS50x curriculum which taught me the fundamentals of programming logic including:</p>

                        <ul>
                            <li>Data Structures</li>
                            <li>Algorithms</li>
                            <li>Memory</li>
                            <li>Programming in C</li>
                            <li>SQL and Databases</li>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>HTML & CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>

                    <p>I completed numerous projects throughout the course which can be found on my <a href="https://github.com/anyone27" target="_blank" rel="noopener noreferrer">Github</a></p>
                    </div>
                }
            </section>

            <section className="about">
                <div className="about-header" onClick={ handleShowAbout3 }>
                    <h2>JavaScript & React.js</h2>
                    { !showAbout3 && <i class="fas fa-plus"></i> }
                    { showAbout3 && <i class="fas fa-minus"></i> }
                </div>

                { showAbout3 && 
                    <div className="about-content">
                        <p>Having completed this course I moved onto JavaScript and React.js as more employable skills, particularly for Front End Development.</p>
                    <p><a href="https://zerotomastery.io/blog/learn-to-code-in-2021-get-hired-and-have-fun-along-the-way/" target="_blank" rel="noopener noreferrer">This blog post</a> provided the outline of what I wanted to learn in the first instance as well as lots of fantastic free resources which streamlined the learning process.</p>
                    <p>Now I have worked my way through the majority of this post I am reinforcing my learning by focusiong on building and hosting some working projects which will serve as my portfolio to demonstrate my abilities.</p>
                    <p>I have greatly enjoyed this process and am constantly amazed by the progress I am making. I have come a long way in one year, from only knowing basic python (<a href="https://www.youtube.com/playlist?list=PL0-84-yl1fUnRuXGFe_F7qSH1LEnn9LkW" target="_blank" rel="noopener noreferrer">automate the boring stuff</a>) to being able to build and deploy full websites in Flask or JavaScript/React.js. However, it is also clear to me that there is much more to learn in an ever evolving field and these are just a few of the tools I will need to use in order to solve whichever problem I am trying to overcome.</p>
                    </div>
                }
            </section>
        </div>
    );
}
 
export default About