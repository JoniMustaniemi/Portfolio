import { React } from 'react';
import './project-content.css';
import ProjectItem from '../project-item/ProjectItem';
import AboutMe from '../about-me/AboutMe';


const ProjectContent = ( props ) => {

  let name = props.name.toLowerCase();

  return (
    <><div className={name + '-section section'}>
      <ProjectItem name={name} />
    </div>
    <div className="section about-me">
      <AboutMe/>
    </div></>
  )
 };
 
 export default ProjectContent;