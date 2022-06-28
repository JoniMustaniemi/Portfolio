import { React, useState } from 'react';
import './project-item-list.css';
import ProjectItem from '../../atoms/project-item/ProjectItem';
import triang1 from '../../../pics/tech-triangle.png';
import triang2 from '../../../pics/tech-triangle-inverted.png';
import projectDetails from '../../../../src/projects.json';


const ProjectItemList = ( props ) => {

  const [active, setActive] = useState( {
    react_1: false,
    react_2: false,
    python_1: false,
    typescript_1: false,
    nodejs_1: false,
    design_1: false,
  });

/* Details of React Projects */
 const reactProject1 = projectDetails['React-Project-1'];
 const reactProject2 = projectDetails['React-Project-2'];
 
 /* Details of Python Projects */
 const pythonProject1 = projectDetails['Python-Project-1'];

 /* Details of Typescript Projects */
 const typescriptProject1 = projectDetails['Typescript-Project-1'];

 /* Details of NodeJS Projects */
 const nodejsProject1 = projectDetails['NodeJS-Project-1'];

 /* Details of Design Projects */
 const designProject1 = projectDetails['Design-Project-1'];

  const handleActiveStatus = (e) => {
    let currentStatus = active[e.currentTarget.id];
    setActive({ [e.currentTarget.id]: !currentStatus});
  }

  return (
    <div className='project-list-container'>
      <h1>PROJECTS</h1>
      {/* React Projects */}
        {props.activeProjectContext.React ? <ProjectItem  active={active.react_1} context={'react'} projectBackground={triang1} projectDetails={reactProject1} alignDirection="right" onClick={handleActiveStatus}/> : ''}
        {props.activeProjectContext.React ? <ProjectItem active={active.react_2} context={'react'} projectBackground={triang2} projectDetails={reactProject2} alignDirection="left" onClick={handleActiveStatus}/> : ''}
      {/* Python Projects */}
        {props.activeProjectContext.Python ? <ProjectItem active={active.python_1} context={'python'} projectBackground={triang1} projectDetails={pythonProject1} alignDirection="right" onClick={handleActiveStatus}/> : ''}
      {/* Typescript projects */}
      { props.activeProjectContext.Typescript ? <ProjectItem active={active.typescript_1} context={'typescript'} projectBackground={triang1} projectDetails={typescriptProject1} alignDirection="right" onClick={handleActiveStatus}/> : ''}
      {/* NodeJS Projects */}
      { props.activeProjectContext.Nodejs ? <ProjectItem active={active.nodejs_1} context={'nodejs'} projectBackground={triang1} projectDetails={nodejsProject1} alignDirection="right" onClick={handleActiveStatus}/> : ''}
      {/* Design Projects */}
      { props.activeProjectContext.Design ? <ProjectItem active={active.design_1} context={'design'} projectBackground={triang1} projectDetails={designProject1} alignDirection="right" onClick={handleActiveStatus}/> : ''}
    </div>
  )
 };
 export default ProjectItemList;