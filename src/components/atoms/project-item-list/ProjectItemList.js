import { React } from 'react';
import './project-item-list.css';
import ProjectItem from '../project-item/ProjectItem';
import project1Logo from '../../../pics/dataflow.jpg';
import project2Logo from '../../../pics/data-points.png';
import project3Logo from '../../../pics/darkpattern.png';
import project4Logo from '../../../pics/lines.jpg';


const ProjectItemList = ( props ) => {
  
  let name = props.name.toUpperCase();

  return (
    <div className='project-list-container'>
      <h1>{name + " PROJECTS"}</h1>
      <ProjectItem projectBackground={project1Logo} name="Project 1" alignDirection="right"/>
      <ProjectItem projectBackground={project2Logo} name="Project 2" alignDirection="left"/>
      <ProjectItem projectBackground={project3Logo} name="Project 3" alignDirection="right"/>
      <ProjectItem projectBackground={project4Logo} name="Project 4" alignDirection="left"/>
    </div>
  )
 };
 export default ProjectItemList;