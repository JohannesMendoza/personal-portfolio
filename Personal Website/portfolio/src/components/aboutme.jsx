import React, { Component } from 'react';
import './styles/aboutme.css';
import Fade from 'react-reveal/Fade';

class AboutMe extends Component {
    render() {
        return (
            <Fade clear>
                <div className="aboutMeWrapper">
                    <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet"></link>
                    <h1 className="aboutMeHeader">About Me</h1>
                    <p className="aboutMeBody"> My passion for Full Stack Development came during my Web Development course at CSUEB, but my skills were only limited to vanilla
                        HTML/CSS, JavaScript, and PHP. The products that I made were not very responsive, nor were they up to modern aesthetic standards,
                        which made me feel irrelevant in the industry. During the COVID-19 Pandemic, I got laid off of my job as a waiter, and responded by learning a modern, relevant
                        full-stack technology outside of my University coursework, namely, the MERN stack. This
                        helped my applications become much more modular, fluid, and responsive. I have now used these skills to contribute to the real world by creating MERN
                        stack applications for local companies. I encourage you to check them out below!</p>
                    <p className="aboutMeBody">I hope that the above made it apparent: I am a <p className="aboutMeEmphasis">self-motivated</p> and <p className="aboutMeEmphasis">relentless</p> engineer who loves to learn and strives to be the best possible version of
                        myself. I currently am looking to gain development experience at the industrial level, and am incredibly excited for the next challenge. I am quick to
                        adapt to new environments and embrace the feeling of being uncomfortable in times of adversity. I believe that with my skills and my willingness to learn, I can contribute
                        so much to any team.</p>
                    <p className="aboutMeBody">Outside of programming, hobbies of mine include automotive motorsport, playing and watching basketball, video games, and photography. If you share any of these interests, please come and message me!
                    </p>

                </div>
            </Fade >
        )
    }
}

export default AboutMe;