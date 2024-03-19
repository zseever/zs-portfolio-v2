import TechText from "./TechText"
import React from 'react';

export default function Project({ projectName, technologies, imgPath, description, website, github }) {
    return (
        <div className="flex-row project-cont">
            <div className="flex-col left-proj-cont">
                <img className="project-images" alt={projectName} src={ imgPath }></img>
                <div>
                    <div><a href={website} target="_blank" rel="noopener noreferrer"><button>Website</button></a>  <a href={github} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a></div>
                </div>
            </div>
            <div className="project-detail-cont flex-col">
                <div className="project-name-text">{ projectName }</div>
                <div>
                    { description }
                </div>
                <div className="flex-row tag-cont"> {technologies.map(tech => 
                    <TechText text={ tech }/>
                    )} 
                </div>
            </div>
        </div>
    )
}