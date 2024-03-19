import Job from "./Job"
import { JobsData } from "../utilities/JobData"
import React from 'react';

export default function Jobs() {
    return (
        <div id="experience" className='job-exp-cont flex-col'>
            <div className='section-title'>
            Experience
            </div>
            { JobsData.map(job => 
            <Job startYear={job.startYear} endYear={job.endYear} company={job.company} jobTitle={job.jobTitle} description={job.description} tags={job.tags}/>
            )}
        </div>
    )
}