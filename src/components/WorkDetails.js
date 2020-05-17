import React from 'react';

export const WorkDetails = (props) => {

  switch (props.location.data) {
    case 'joblisting': return (
      <div>
        <h1>#JobListing</h1>
        <p>Wiki: This is a simple listing of all available jobs which anyone can filter according to their requirement</p>
      </div>
    )
    case 'tinyurl': return (
      <div>Tiny Url</div>
    )
    default: return (<div>Not Found</div>)
  }

}