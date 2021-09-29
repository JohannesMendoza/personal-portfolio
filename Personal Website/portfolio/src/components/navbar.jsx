import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css'
import Fade from 'react-reveal/Fade';
import { Link as Scroller } from 'react-scroll';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="nav-bar collapsible">
                    <Scroller to="aboutMeWrapper" spy={true} smooth={true} offset={-100}><button>About Me</button></Scroller>
                    <div className="dropdown">
                        <Scroller to="projects" spy={true} smooth={true} offset={-100}><button className="dropdown-button">Latest Projects <p className="dropCarat">&#9660;</p></button></Scroller>
                        <div class="dropdown-content">
                            <Scroller to="angelsBread" spy={true} smooth={true} offset={-70}><button>Angel's Bread</button></Scroller>
                            <Scroller to="fab" spy={true} smooth={true} offset={-80}><button>Filipino Asian Basketball</button></Scroller>
                            <Scroller to="ticTacToe" spy={true} smooth={true} offset={-80}><button>Tic-Tac-Toe</button></Scroller>
                        </div>
                    </div>
                    <Scroller to="contact" spy={true} smooth={true} offset={-100}><button>Contact Me</button></Scroller>
                    <Scroller to="skills" spy={true} smooth={true} offset={-100}><button>Skills</button></Scroller>
                    <Scroller to="employment" spy={true} smooth={true} offset={-100}><button>Employment</button></Scroller>
                    <Scroller to="education" spy={true} smooth={true} offset={-100}><button>Education</button></Scroller>
                    <Scroller to="awards" spy={true} smooth={true} offset={-100}><button>Awards</button></Scroller>
                </div>
            </React.Fragment >
        )
    }
}

export default NavBar;