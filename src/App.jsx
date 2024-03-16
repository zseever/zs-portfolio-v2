import './App.css';
import Project from './components/Project';
import Job from './components/Job';
import { Projects } from './utilities/ProjectData'
import { Jobs } from './utilities/JobData'
import Pdf from './resume/zachary_seever_resume.pdf'

function App() {
  function handleScroll(section) {
    document.getElementById(section).scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="App">
      <div className="main-cont cursor">
        
        <div className="sub-cont left-sub-cont">
          <div className="about-cont flex-col">
            <div className="name-text">Zachary Seever</div>
            <div className="job-title-text">Software Engineer</div>
            <div className="about-me-text">
              Former Data Analyst, Current Problem Solver
            </div>
            <div className='flex-col button-cont'>
              <button className="main-buttons" onClick={() => handleScroll('about')} >About</button>
              <button className="main-buttons" onClick={() => handleScroll('experience')}>Experience</button>
              <button className="main-buttons" onClick={() => handleScroll('projects')}>Projects</button>
              
            </div>
            <div className="socials-cont flex-row">
              <a href="https://www.github.com/zseever" target="_blank" rel="noreferrer"><button>GitHub</button></a>
              <a href="https://www.linkedin.com/in/zachary-seever/" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
              <a href={Pdf} className="resume-anchor" target="_blank" rel="noreferrer"><button>Resume</button></a>
            </div>
          </div>
        </div>

        <div className="sub-cont">
          <div className="experience-cont flex-col">
            <div id="about" className="about-me-cont">
              I am analytically-minded, and am always looking for the next process that I can improve. I find great enjoyment out of solving 
              problems and overcoming these challenges gives me a sense of pride and achievement. In my previous career as a customer and market 
              insights analyst, I was constantly challenged to think outside the box and find new and improved ways to measure customer value and 
              purchasing habits. As a Software Engineer, I want to continue to create, improve, and solve difficult problems.
            </div>
            <div id="experience" className='job-exp-cont flex-col'>
              <div className='section-title'>
                Experience
              </div>
              { Jobs.map(job => 
                <Job startYear={job.startYear} endYear={job.endYear} company={job.company} jobTitle={job.jobTitle} description={job.description} tags={job.tags}/>
              )}
            </div>
            <div id="projects" className="projects-cont flex-col">
              <div className='section-title'>
                Projects
              </div>
              { Projects.map(project => 
                <Project projectName={project.projectName} imgPath={project.imgPath} description={project.description} technologies={project.technologies} website={project.website} github={project.github}/>
              )}
            </div>
            <br></br>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
