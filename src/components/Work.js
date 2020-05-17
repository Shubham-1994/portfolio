import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import joblisting from '../images/joblisting.PNG';
import tinyurl from '../images/tinyurl.png';
import { TimelineLite, Power2 } from 'gsap';

const project1 = `{ project: 'Job Listing', description: 'Job list page with filters' }`
const project2 = `{ project: 'Tiny Url', description: 'shortening the long string of url' }`

export const Work = () => {
  let para1 = useRef(null);
  let para2 = useRef(null);
  let btn1 = useRef(null);
  let btn2 = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    tl.to(para1, 0.4, { opacity: 1, ease: Power2.easeInOut })
      .to(para2, 0.4, { opacity: 1, ease: Power2.easeInOut })
      .to(btn1, 0.4, { opacity: 1, ease: Power2.easeInOut }, 0.5)
      .to(btn2, 0.4, { opacity: 1, ease: Power2.easeInOut }, 0.5)
  })
  return (

    <div className="container">
      <h1>#Work</h1>
      <div className="work-container">

        <div className="work-card">
          <img src={joblisting} alt="joblisting" width="99%"></img>
          <p ref={el => para1 = el}>
            <code>Job Listing</code>
          </p>
          <div ref={el => btn1 = el} className="button-container">
            <a href="https://github.com/Shubham-1994/JobListing"><button className="read-more">GIT HUB</button></a>
            <a href="https://myjoblisting.netlify.app/"><button className="read-more">GO TO WEBSITE</button></a>
            <Link to={{ pathname: "/work-details", data: 'joblisting' }} props={project1}><button className="read-more">READ MORE</button></Link>
          </div>
        </div>

        <div className="work-card">
          <img src={tinyurl} alt="joblisting" width="99%"></img>
          <p ref={el => para2 = el}>
            <code>Tiny URL</code>
          </p>
          <div ref={el => btn2 = el} className="button-container">
            <a href="https://github.com/Shubham-1994/TinyUrl"><button className="read-more">GIT HUB</button></a>
            <a href="https://myjoblisting.netlify.app/"><button className="read-more">GO TO WEBSITE</button></a>
            <Link to={{ pathname: "/work-details", data: 'joblisting' }} props={project1}><button className="read-more">READ MORE</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
