import React, { Component } from 'react';
import './styles/education.css';
import Fade from 'react-reveal/Fade';

class Education extends Component {
    render() {
        return (
            <div className='education'>
                <h1>Education</h1>
                <h3>BS Computer Science</h3>
                <ul>
                    <li>California State University, East Bay (2018-2020)</li>
                    <li>Chabot Community College (2015-2018)</li>
                </ul>
            </div>
        )
    }
}

export default Education;