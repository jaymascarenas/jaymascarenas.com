import React, {Component} from 'react';
import logo from './images/jay.png';
import github from './images/GitHub-Mark-64px.png';
import linkedIn from './images/In-2C-66px-R.png';
import './App.css';

const projects = require('./projects.js');

class Projects extends Component {
    render() {
        const projectList = projects.myProjects.map((project) =>
            <div key={project.title} className="App-projects">
                <div className="App-projects-container">
                    <div className="App-col-left">
                        <h1>{project.title}</h1>
                        <p className="App-description">{project.description}</p>
                        <h3>Tech used</h3>
                        <p className="App-technology">{project.technology}</p>
                    </div>

                    <div className="App-col-right">
                        <img src={project.image} alt={project.title} className="App-project-image"/>
                    </div>
                </div>
                <div className="App-projects-link">
                    <a href={project.link} className="App-projects-link-button" target="_blank">Launch</a>
                </div>
            </div>
        );
        return (
            <div>
                {projectList}
            </div>
        )
    }
}


class App extends Component {
    render() {
        let  date = new Date();
        let year = date.getFullYear();
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Jay M"/>
                    <h1 className="App-title">Jay Mascarenas</h1>
                    <h4>Web Developer</h4>
                    <div className="App-find-me">
                        <a href="https://www.github.com/jaymascarenas" target="_blank" rel="noopener noreferrer"><img
                            src={github} className="App-find-me-logos" alt="Github"/></a>
                        <a href="https://www.linkedin.com/in/jaymascarenas" target="_blank"
                           rel="noopener noreferrer"><img src={linkedIn} className="App-find-me-logos" alt="Linkedin"/></a>
                    </div>
                    <div className="App-intro">
                        <p>Below are some production links I have built and am proud of.</p>
                    </div>
                </header>
                <section className="App-body">

                    <Projects/>


                </section>
                <section className="App-body-tools">
                    <div className="App-tools">
                        <h1 className="App-tools-title">Tools and libraries I use and work with</h1>
                        <div className="App-tools-container">
                            <div className="App-tools-list">
                                <ul>
                                    <li>HTML/CSS</li>
                                    <li>JavaScript/jQuery</li>
                                    <li>PHP</li>
                                    <li>SASS/LESS</li>
                                    <li>Gulp/Grunt/Webpack</li>
                                    <li>React</li>
                                    <li>GIT/SVN</li>
                                    <li>MySQL</li>
                                    <li>Handlebars</li>
                                    <li>AEM Content</li>
                                    <li>Node/Express</li>
                                    <li>Bootstrap/Foundation</li>
                                    <li>Photoshop</li>
                                    <li>AJAX/JSON</li>
                                    <li>APIs</li>
                                    <li>Trello</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="footer">
                        <p>&copy; {year} <a href="http://www.jaymascarenas.com">jaymascarenas.com</a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
