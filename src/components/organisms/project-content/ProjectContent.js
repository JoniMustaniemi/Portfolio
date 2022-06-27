import { React } from 'react';
import './project-content.css';
import ProjectItemList from '../../molecules/project-item-list/ProjectItemList';
import AboutMe from '../../atoms/about-me/AboutMe';


const ProjectContent = ( props ) => {

  let name = props.name.toLowerCase();

  return (
    <><div className={name + '-section section'}>
        <ProjectItemList name={name} activeProjectContext={props.activeElement} />
    </div>
    <div className="section about-me">  
      <AboutMe/>
    </div></>
  )
 };
 
 export default ProjectContent;