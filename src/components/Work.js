import React, { useState, useEffect } from 'react';
import joblisting from '../images/joblisting.PNG';
import tinyurl from '../images/tinyurl.png';
import rockpaperscissors from '../images/rockpaperscissors.PNG';




export const Work = () => {
  let [data, setFlag] = useState({ show: false, project: null });
  let projects = [
    { id: 1, name: "ROCK-PAPER-SCISSORS", desc: "Rock paper scissors is a basic game played with fingers. Here is the web version of it where you can play against computer.", tech: ['HTML', 'CSS', 'JavaScript'], github: "https://github.com/Shubham-1994/rock-paper-scissors", website: "https://paper-scissors-rock.netlify.app/", source: { name: rockpaperscissors } },
    { id: 2, name: "JOB LISTING", desc: "Job listing is a web page which have the collectiong of available job which user can filter according to their need", tech: ['Angular', 'Bootstrap', 'PWA'], github: "https://github.com/Shubham-1994/JobListing", website: "https://myjoblisting.netlify.app/", source: { name: joblisting } },
    { id: 3, name: "TINY URL", desc: "Tiny URL is a web app which will shorten the long string of url.", tech: ['Django', 'Python', 'SQLite'], github: "https://github.com/Shubham-1994/TinyUrl", source: { name: tinyurl } },

  ]

  const modalContentGenerator = (id) => {
    setFlag({ show: true, project: projects.find(item => item.id === id) });
  }

  const modal = (data.show && data.project != null) ? (<div className="modal">
    <section>
      <button onClick={() => setFlag({ show: false })} className="read-more">&larr; BACK</button>
      <div className="job-container">
        <img src={data.project.source.name} alt="image"></img>

        <h2>{data.project.name}</h2>
        <p>{data.project.desc}</p>
        <h4> Tech Stack </h4>
        <p style={{ display: 'flex', justifyContent: 'center' }}>{data.project.tech.map(item => (<span style={{ marginRight: '10px', marginLeft: '10px' }} key={item}>{item}</span>))}</p>
      </div>
    </section>
  </div>) : null;


  const container = data.show ? null : (<div className="work-container">
    {projects.map(project => (<div key={project.id} className="work-card">
      <img src={project.source.name} alt='image' width="99%"></img>
      <p >
        <code>{project.name}</code>
      </p>
      <div className="button-container">
        <a href={project.github}><button className="read-more">GIT HUB</button></a>
        {project.website ? (<a href={project.website}><button className="read-more">GO TO WEBSITE</button></a>) : null}
        <button onClick={() => modalContentGenerator(project.id)} className="read-more">READ MORE</button>
      </div>
    </div>))}
  </div>)
  return (

    <div className="container">
      <h1>#Work</h1>
      {container}
      {modal}
    </div>

  )
}
