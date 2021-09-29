import React, { Component } from 'react';
import Project from './project';
import './styles/projects.css';


class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                <h1>Latest Projects</h1>
                <div className="angelsBread" ></div>
                <Project title={"Angel's Bread (MERN)"}
                    logo={"/images/angels-bread/logo.png"}
                    github={"https://github.com/JohannesMendoza/angels-bread"}
                    description={"Angel's Bread is a pandemic-grown startup bakery in Union City, CA that sells Filipino-American treats."}
                    demoLink={"/images/angels-bread/demo.png"}
                    details={[
                        "The website allows user to view bakery menu, business information, and social media outlets",
                        "Designed a responsive, user friendly front end interface using React.js components",
                        "Implemented RESTful APIs using Express to allow the front end application to access product information",
                        "Incorporated studio photography and Adobe photo editing software to enhance the visual appeal of products"]}
                />
                <br></br>
                <hr></hr>
                <br></br>
                <div className="fab" ></div>
                <Project title={"Filipino Asian Basketball (MERN)"}
                    logo={"/images/fab/logo.jpeg"}
                    github={"https://github.com/JohannesMendoza/Filipino-Asian-Basketball"}
                    description={"Filipino Asian Basketball (FAB) is a local community basketball league in Hayward, CA."}
                    demoLink={"/images/fab/demo.png"}
                    details={[
                        "The webste allows users to view game scores, schedules, team and player statistics, and apparel for sale",
                        "Designed the multi-page routing with React.js in order to improve responsiveness of pagination",
                        "Refreshed and modernized front end interface from vanilla HTML/CSS to React.js components",
                        "Designed extensive RESTful services to handle queries of data from numerous relational databases in Mongoose"]}
                />
                <br></br>
                <hr></hr>
                <br></br>
                <div className="ticTacToe" ></div>
                <Project title={"Tic-Tac-Toe Artificial Intelligence (Android/Java)"}
                    logo={"/images/tictactoe/logo.png"}
                    github={"https://github.com/JohannesMendoza/Tic-Tac-Toe"}
                    description={"Tic-Tac-Toe vs an unbeatable AI"}
                    demoLink={"/images/tictactoe/demo.png"}
                    details={[
                        "Developed an application that allows a user to play Tic-Tac-Toe against either an AI opponent or a second player",
                        "Unbeatable AI implements the Minimax algorithm in order to determine the best move to make",
                        "Each outcome is associated with a value, in which the AI considers to determine the optimal play",
                        "The AI uses alpha-beta pruning technique by ignoring suboptimal moves in the search tree, increasing search performance",
                        "Uses databases in SQLite in order to store and retrieve number of user wins"]}
                />
            </div>
        )
    }
}

export default Projects;