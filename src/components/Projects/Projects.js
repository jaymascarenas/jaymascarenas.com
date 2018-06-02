import React, { Component } from 'react';
import Button from '../Button/Button';
import CardImage from '../CardImage/CardImage';
import ProjectsList from '../Projects/ProjectsList';

class Projects extends Component {
    render() {
        const projectList = ProjectsList.myProjects.map((project) =>
            <div key={project.title} className="App-projects">
                <div className="App-projects-container">
                    <div className="App-col-left">
                        <h1>{project.title}</h1>
                        <p className="App-description">{project.description}</p>
                        <h3>Tech used</h3>
                        <p className="App-technology">{project.technology}</p>
                    </div>
                    <CardImage image={project.image} title={project.title} />
                </div>
                <Button link={project.link} />
            </div>
        );
        return (
            <section className="App-body">
                {projectList}
            </section>
        )
    }
}

export default Projects;