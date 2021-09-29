import React, { Component } from 'react';
import AboutMe from './aboutme';
import Projects from './projects';
import './styles/leftcolumn.css';
import Fade from 'react-reveal/Fade';
import Employment from './employment';

class LeftColumn extends Component {
    render() {
        return (
            <Fade left>
                <div className="leftColumn">
                    <AboutMe />
                    <Projects />
                </div>
            </Fade>
        )
    }
}

export default LeftColumn;