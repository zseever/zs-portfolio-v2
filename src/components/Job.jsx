import TechText from "./TechText"

export default function Job({ company, jobTitle, startYear, endYear, description, tags }) {
    return (
        <div className="flex-row job-cont">
            <div className="years-worked-cont">
                {startYear} - {endYear}
            </div>
            <div className="flex-col job-details-cont">
                <div className="flex-col">
                    <div className="job-name-text">{jobTitle} - {company}</div>
                    <div>{description}</div>
                </div>
                <div className="flex-row tag-cont">
                    {tags.map(tag =>
                        <TechText text={tag}/>
                    )}
                </div>
            </div>
        </div>
    )
}