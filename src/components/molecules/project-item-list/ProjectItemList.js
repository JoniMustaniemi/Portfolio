import { React, useState } from 'react';
import './project-item-list.css';
import ProjectItem from '../../atoms/project-item/ProjectItem';
import triang1 from '../../../pics/tech-triangle.png';
import triang2 from '../../../pics/tech-triangle-inverted.png';
import projects from '../../../../src/projects.json';


const ProjectItemList = ( props ) => {

 let projectDetails = projects;


  const [isActiveContext, setActiveContext] = useState({
    react: false,
    python: false,
    typescript: false,
    nodejs: false,
    design: false,
  });

  const handleActiveStatus = (e) => {
    let projectCard = (e.currentTarget.id).toLowerCase();
    let currentStatus = isActiveContext[projectCard];
    setActiveContext({[projectCard]: !currentStatus});
  }

  return (
    <div className='project-list-container'>
      <h1>PROJECTS</h1>
      {/* React Projects */}
        {props.activeProjectContext.React ? <ProjectItem projectBackground={triang1} id={props.name} projectDetails={projectDetails['React Project 1']} alignDirection="right" active={isActiveContext.react} onClick={handleActiveStatus}/> : ''}
      {/* Python Projects */}
        {props.activeProjectContext.Python ? <ProjectItem projectBackground={triang1} id={props.name} projectDetails={projectDetails['Python Project 1']} alignDirection="right" active={isActiveContext.python} onClick={handleActiveStatus}/> : ''}
      {/* Typescript projects */}
      { props.activeProjectContext.Typescript ? <ProjectItem projectBackground={triang1} id={props.name} projectDetails={projectDetails['Typescript Project 1']} alignDirection="right" active={isActiveContext.typescript} onClick={handleActiveStatus}/> : ''}
      {/* NodeJS Projects */}
      { props.activeProjectContext.Nodejs ? <ProjectItem projectBackground={triang1} id={props.name} projectDetails={projectDetails['NodeJS Project 1']} alignDirection="right" active={isActiveContext.nodejs} onClick={handleActiveStatus}/> : ''}
      {/* Design Projects */}
      { props.activeProjectContext.Design ? <ProjectItem projectBackground={triang1} id={props.name} projectDetails={projectDetails['Design Project 1']} alignDirection="right" active={isActiveContext.design} onClick={handleActiveStatus}/> : ''}
    </div>
  )
 };
 export default ProjectItemList;