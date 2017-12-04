import React, {Component} from 'react';
import logo from './images/jay.png';
import github from './images/GitHub-Mark-32px.png';
import linkedIn from './images/In-2C-34px-R.png';
import connectedImage from './images/connected-magazine.jpg';
import starImage from './images/star.jpg';
import spendTrend from './images/spendtrend-holiday-2016.jpg';
import './App.css';

//const projects = require('./projects.js');

const projects = [{
    title: "Connected Magazine",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
    technology: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    link: "https://www.firstdata.com/en_us/about-first-data/media/connected-magazine.html"
},
    {
        title: "STAR©",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        technology: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        link: "https://wwww.star.com"
    },
    {
        title: "SpendTrend Report",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        technology: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        link: "https://www.firstdata.com/en_us/all-features/spendtrend-holiday-2016.html"
    }
]

function Projects(props) {
    const projectList = (
        <div className="App-projects">
            {props.projects.map((project) =>
                <div className="App-col-left">
                    <h1>{props.title}</h1>
                    <p className="App-description">{props.description}</p>
                    <h3>Tech used</h3>
                    <p className="App-technology">{props.technology}</p>
                </div>
            )}

                <div className="App-col-right">
                <img src={props.image} alt={props.title} className="App-project-image"/>
                </div>
                <div className="App-project-link">
                <a href={props.link} className="App-project-link-button" target="_blank">Launch</a>
                </div>

        </div>
    );
    return (
        {projectList}
    )
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="Jay M"/>
                    <h1 className="App-title">Jay Mascarenas</h1>
                    <p>Front End Web Developer</p>
                    <div className="App-find-me">
                        <a href="https://www.github.com/jaymascarenas" target="_blank" rel="noopener noreferrer"><img
                            src={github} className="App-find-me-logos" alt="Github"/></a>
                        <a href="https://www.linkedin.com/in/jaymascarenas" target="_blank"
                           rel="noopener noreferrer"><img src={linkedIn} className="App-find-me-logos" alt="Linkedin"/></a>
                    </div>
                    <div className="App-intro">
                        <p className="App-intro-center">
                            Hi! My name is Jay and I am a professional Front End Web Developer. I love to design and
                            develop front end experiences for great companies. I hope I can help your company grow and
                            increase it's brand awareness.
                        </p>
                        <p>Please see some of my favorite work below</p>
                    </div>
                </header>
                <section className="App-body">


                    <Projects
                        title={projects.myProjects[0].title}
                        description={projects.myProjects[0].description}
                        technology={projects.myProjects[0].technology}
                        link={projects.myProjects[0].link}
                        image={connectedImage}

                    />

                    <Projects
                        title={projects.myProjects[1].title}
                        description={projects.myProjects[1].description}
                        technology={projects.myProjects[1].technology}
                        link={projects.myProjects[1].link}
                        image={starImage}

                    />

                    <Projects
                        title={projects.myProjects[2].title}
                        description={projects.myProjects[2].description}
                        technology={projects.myProjects[2].technology}
                        link={projects.myProjects[2].link}
                        image={spendTrend}

                    />

                </section>
            </div>
        );
    }
}

export default App;
