import React, { Component } from 'react';
import './styles/header.css'
import ProfilePicture from "../images/profile-picture.jpg"
import Fade from 'react-reveal/Fade';

class Header extends Component {
    render() {
        return (
            <div className="headerWrapper">
                <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet"></link>
                <div className="header">
                    <div className="headerImage">
                        <Fade left>
                            <img className="headerPhoto" src={ProfilePicture} />
                        </Fade>
                    </div>
                    <Fade clear>
                        <h1 className="headerQuote">Hi, my name is Johannes Mendoza, and <Fade right><h1 className="headerQuoteEmphasis">I am a Software Engineer.</h1></Fade></h1>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default Header;