import React, { useState } from 'react';
import joblisting from '../images/joblisting.PNG';
import tinyurl from '../images/tinyurl.png';


const project1 = `{ project: 'Job Listing', description: 'Job list page with filters' }`
// const project2 = `{ project: 'Tiny Url', description: 'shortening the long string of url' }`

export const Work = () => {
  // let flag = false;
  let [data, setFlag] = useState({ show: false, workData: null });

  const modalContent = data.workData === 'joblisting' ? (<section>
    <button onClick={() => setFlag({ show: false })} className="read-more">&larr; BACK</button>
    <img src={joblisting} alt="joblisting"></img>

    <h2>Job Listing</h2>
    <p>Job listing is a web page which have the collectiong of available job which user can filter according to their need.</p>
    <h4> Tech Stack </h4>
    <p><span>Angular</span>-<span>Bootstrap</span>-<span>PWA</span></p>

  </section>)
    :
    (<section>
      <button onClick={() => setFlag({ show: false })} className="read-more">&larr; BACK</button>
      <img src={tinyurl} alt="tinyurl"></img><h2>Tiny URL</h2>
      <p>Tiny URL is a web app which will shorten the long string of url.</p>
      <h4> Tech Stack </h4>
      <p><span>Django</span>-<span>Python</span>-<span>SQLite</span></p>
    </section>);


  const modal = data.show ? (<div className="modal">{modalContent}</div>) : null;

  const container = data.show ? null : (<div className="work-container">
    <div className="work-card">
      <img src={joblisting} alt="joblisting" width="99%"></img>
      <p >
        <code>Job Listing</code>
      </p>
      <div className="button-container">
        <a href="https://github.com/Shubham-1994/JobListing"><button className="read-more">GIT HUB</button></a>
        <a href="https://myjoblisting.netlify.app/"><button className="read-more">GO TO WEBSITE</button></a>
        <button onClick={() => setFlag({ show: true, workData: 'joblisting' })} className="read-more">READ MORE</button>
      </div>
    </div>

    <div className="work-card">
      <img src={tinyurl} alt="joblisting" width="99%"></img>
      <p >
        <code>Tiny URL</code>
      </p>
      <div className="button-container">
        <a href="https://github.com/Shubham-1994/TinyUrl"><button className="read-more">GIT HUB</button></a>
        {/* <a href="https://myjoblisting.netlify.app/"><button className="read-more">GO TO WEBSITE</button></a> */}
        <button onClick={() => setFlag({ show: true, workData: 'tinyurl' })} className="read-more">READ MORE</button>
      </div>
    </div>
  </div>)

  // setFlag = (f) => { console.log(f); flag = f }
  return (

    <div className="container">
      <h1>#Work</h1>
      {container}
      {modal}
    </div>

  )
}
