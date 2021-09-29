import React, { Component } from 'react';
//import 
import './styles/skills.css';

class Skills extends Component {
    render() {
        return (
            <div className='skills'>
                <h1>Skills</h1>
                <p className="skill"><img className="skillLogo" src='/images/icons/react.svg'></img>React.js</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/nodedotjs.svg'></img>Node.js</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/express.svg'></img>Express.js</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/mongodb.svg'></img>MongoDB</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/html5.svg'></img>HTML5</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/css3.svg'></img>CSS3</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/javascript.svg'></img>JavaScript</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/java.svg'></img>Java</p>
                <p className="skill"><img className="skillLogo" src='/images/icons/git.svg'></img>Git</p>

            </div>
        )
    }
}

export default Skills;