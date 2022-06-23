import { React } from 'react';
import './project-item.css';


const ProjectItem = ( props ) => {

  let marginDirection = '';
  let position = ''
  if ( props.alignDirection === 'right') {
    marginDirection = 'left';
    position = "set-left";
  } else {
    marginDirection = 'right';
    position = "set-right";
  }
  return (

    <div className={"project-card align-" + props.alignDirection} style={{ backgroundImage: `url(${props.projectBackground})`}}><h1 className={position}>{props.name}</h1>
      <div className={"project-info margin-" + marginDirection}>
        <div className="project-summary">
          <h2>Project Summary</h2>
          <p>Project is about lorem lipsum</p>
        </div>
        <div className="project-details">
          <h2>Technologies used</h2>
          <p> tech 1</p>
          <p> tech 2</p>
          <p> tech 3</p>
        </div>
      </div>
    </div>
  )
 };

 export default ProjectItem;