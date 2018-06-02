import React, { Component } from 'react';

class ToolsList extends Component {
  render() { 
    const tools = ["HTML/CSS", "JavaScript/jQuery", "ES6", "React", "PHP/Laravel", "SASS/LESS", "Gulp/Grunt/Webpack", "GIT", "MySQL", "MongoDb", "Handlebars", "Node/Express", "Bootstrap/Foundation", "Adobe CC", "AJAX/JSON", "APIs", "Jira", "Agile/KanBan"];
    return ( 
      <section className="App-body-tools">
      <div className="App-tools">
      <h1 className="App-tools-title">Tools and libraries I use and work with</h1>
      <div className="App-tools-container">
        <div className="App-tools-list">
          <ul>
            {tools.map(tool => (
              <li key={tool}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
    </div>
</div> 
</section>
)
  }
}
 
export default ToolsList;