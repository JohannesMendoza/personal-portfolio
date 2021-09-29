import React, { Component } from 'react';
import Contact from './contact';
import Skills from './skills';
import Education from './education';
import './styles/rightcolumn.css';
import Fade from 'react-reveal/Fade';
import Employment from './employment';
import Awards from './awards';

class RightColumn extends Component {
    render() {
        return (
            <Fade right>
                <div className="rightColumn">
                    <Contact />
                    <Skills />
                    <Employment />
                    <Education />
                    <Awards />
                </div>
            </Fade>
        )
    }
}

export default RightColumn;