import React, { Component } from 'react';
import "./styles/project.css"
class Project extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dets = this.props.details.map(det => <li className="projectBullets">{det}</li>);
        return (<div className="projectWrapper">
            <div className="projectHeader">
                <img className="projectLogo" src={process.env.PUBLIC_URL + this.props.logo} />
                <div className="projectInfo">
                    <h2 className="projectTitle">{this.props.title}</h2>
                    <p className="projectDescription">{this.props.description}</p>
                    <img className="skillLogo" src='/images/icons/github.svg'></img><a className="projectGithub" href={this.props.github} target="_blank">Source Code</a>
                </div>
            </div>
            <br></br>
            {dets}
            <br></br>
            <img className="projectDemo" src={process.env.PUBLIC_URL + this.props.demoLink} />
        </div >)
    }
}

export default Project;