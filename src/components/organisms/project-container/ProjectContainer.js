import { React } from 'react';
import './project-container.css';
import ProjectContent from '../project-content/ProjectContent';
import Hero from '../../atoms/hero/Hero';


const ProjectContainer = ( props ) => {

  const projectContext = props.activeElementId;

 return (
      <div className={projectContext + "Body projectContainer" }>
        <div className="content-container">
          <Hero/>
          <ProjectContent name={projectContext} activeElement={props.activeElement}/>
        </div>
      </div>
  ) 
 };
 
 export default ProjectContainer;