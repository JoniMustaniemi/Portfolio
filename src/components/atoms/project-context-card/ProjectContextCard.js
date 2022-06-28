import { React } from 'react';
import './project-context-card.css';

const ProjectContextCard = ( props ) => {
  const onClick = props.onClick;
  const active = props.active;

  return (
  <div className={active ? 'active project-context-card-background': 'project-context-card-background'} id={(props.name).replace(/ /g, '')} onClick={onClick}>
    <div className="project-context-card-wrapper" style={{ backgroundImage: `url(${props.projectLogo})`}}>
    <button className="project-context-card"><h1>{props.name}</h1></button>
    </div>
  </div>
  )
 };
 
 export default ProjectContextCard;