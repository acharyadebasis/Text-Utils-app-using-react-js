import React, { useState } from 'react';

function About(props) {
  const[aboutstyle]= useState({
    marginLeft: '2000px'
  });
  return (
    
    <span style={aboutstyle}>
      <h1  className={`container text-${props.mode==='light'?'black':'light'} my-3`}>About</h1>
      <p className={`container text-${props.mode==='light'?'black':'light'} my-3`}>I am Debasis ,i am here to help you!</p>
    </span>
  )
}

export default About
