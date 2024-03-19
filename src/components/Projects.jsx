import { ProjectsData } from '../utilities/ProjectData'
import Project from './Project'
import React from 'react';

export default function Projects() {
    return (
        <div id="projects" className="projects-cont flex-col">
            <div className='section-title'>
                Projects
            </div>
            { ProjectsData.map(project => 
                <Project projectName={project.projectName} imgPath={project.imgPath} description={project.description} technologies={project.technologies} website={project.website} github={project.github}/>
            )}
        </div>
    )
}
