import React, { Component } from 'react';
import AboutMe from './aboutme';
import LeftColumn from './leftcolumn';
import RightColumn from './rightcolumn';
import Fade from 'react-reveal/Fade';
import './styles/body.css';

class Body extends Component {
    render() {
        return (
            <div className='columns'>
                <LeftColumn />
                <RightColumn />
            </div>
        )
    }
}

export default Body;