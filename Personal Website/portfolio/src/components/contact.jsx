import React, { Component } from 'react';
import './styles/contact.css';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <h1>Contact Me</h1>
                <p><img className="skillLogo" src='/images/icons/location.svg'></img>Bay Area, CA</p>
                <a className="contactLink" href="mailto: johannesmendoza327@gmail.com"><p><img className="skillLogo" src='/images/icons/email.svg'></img>johannesmendoza327@gmail.com</p></a>
                <a className="contactLink" href="https://github.com/JohannesMendoza" target="_blank"><p><img className=" skillLogo" src='/images/icons/github.svg'></img>github.com/JohannesMendoza</p></a>
                <a className="contactLink" href="https://www.linkedin.com/in/johannes-mendoza/" target="_blank"><p><img className=" skillLogo" src='/images/icons/linkedin.svg'></img>linkedin.com/Johannes-Mendoza</p></a>
            </div>
        )
    }
}

export default Contact;