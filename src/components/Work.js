import React from 'react';
import { Link } from 'react-router-dom';
import joblisting from '../images/joblisting.PNG';
import tinyurl from '../images/tinyurl.png';


const project1 = `{ project: 'Job Listing', description: 'Job list page with filters' }`
// const project2 = `{ project: 'Tiny Url', description: 'shortening the long string of url' }`

export const Work = () => {
  return (

    <div className="container">
      <h1>#Work</h1>
      <div className="work-container">

        <div className="work-card">
          <img src={joblisting} alt="joblisting" width="99%"></img>
          <p >
            <code>Job Listing</code>
          </p>
          <div className="button-container">
            <a href="https://github.com/Shubham-1994/JobListing"><button className="read-more">GIT HUB</button></a>
            <a href="https://myjoblisting.netlify.app/"><button className="read-more">GO TO WEBSITE</button></a>
            <Link to={{ pathname: "/work-details", data: 'joblisting' }} props={project1}><button className="read-more">READ MORE</button></Link>
          </div>
        </div>

        <div className="work-card">
          <img src={tinyurl} alt="joblisting" width="99%"></img>
          <p >
            <code>Tiny URL</code>
          </p>
          <div className="button-container">
            <a href="https://github.com/Shubham-1994/TinyUrl"><button className="read-more">GIT HUB</button></a>
            <a href="https://myjoblisting.netlify.app/"><button className="read-more">GO TO WEBSITE</button></a>
            <Link to={{ pathname: "/work-details", data: 'joblisting' }} props={project1}><button className="read-more">READ MORE</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
