import { React } from 'react';
import './project-container.css';

const ProjectContainer = ( props ) => {

  return (
      <div className={props.activeElementId.toLowerCase() + "Body projectContainer" }>
        <div className="content-container">
          <h1>{props.activeElementId}</h1>
        </div>
      </div>
  )
 };
 
 export default ProjectContainer;