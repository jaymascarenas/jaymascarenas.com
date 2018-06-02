import React from 'react';
import logo from '../../images/jay.png';
import github from '../../images/GitHub-Mark-64px.png';
import linkedIn from '../../images/In-2C-66px-R.png';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Jay M"/>
      <h1 className="App-title">Jay Mascarenas</h1>
      <h4>Front End Web Developer</h4>
      <div className="App-find-me">
        <a href="https://www.github.com/jaymascarenas" target="_blank" rel="noopener noreferrer">
          <img src={github} className="App-find-me-logos" alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/jaymascarenas" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} className="App-find-me-logos" alt="Linkedin"/>
        </a>
      </div>
      <div className="App-intro">
        <p>Coding Bootcamp Instructor who loves helping others and building apps.</p>
        <p>Below are some front end sites I've built and am proud of.</p>
      </div>
    </header>
  )
}
 
export default Header;