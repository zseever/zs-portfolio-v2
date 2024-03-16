import Pdf from '../resume/zachary_seever_resume.pdf'

export default function Socials() {
    return (
        <div className="socials-cont flex-row">
            <a href="https://www.github.com/zseever" target="_blank" rel="noreferrer"><button>GitHub</button></a>
            <a href="https://www.linkedin.com/in/zachary-seever/" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
            <a href={Pdf} className="resume-anchor" target="_blank" rel="noreferrer"><button>Resume</button></a>
        </div>
    )
}