import React from 'react';

const Button = (props) => {
  return (
  <div className="App-projects-link">
    <a href={props.link} className="App-projects-link-button" target="_blank">Launch</a>
  </div>
  )
}
 
export default Button;