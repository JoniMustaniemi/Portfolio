import { React } from 'react';
import './project-item.css';


const ProjectItem = ( props ) => {
  
  let name = props.name.toUpperCase();

  return (
    <><div className='project-content'>
      <h1>{name + " PROJECTS"}</h1>
    </div><div className='about-project'><h1>About project</h1></div></>
  )
 };
 export default ProjectItem;