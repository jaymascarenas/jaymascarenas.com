import React from 'react';

const CardImage = (props) => {
  return (
  <div className="App-col-right">
    <img src={props.image} alt={props.title} className="App-project-image"/>
  </div>
  )
}
 
export default CardImage;