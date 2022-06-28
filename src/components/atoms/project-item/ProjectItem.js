import { React } from 'react';
import './project-item.css';


const ProjectItem = ( props ) => {

  const onClick = props.onClick;
  const isActive = props.active;  

  let marginDirection = '';
  let position = ''

 let title = props.projectDetails.title;
 let summary = props.projectDetails.summary;
 let techs = props.projectDetails.technologies;
 let id = props.projectDetails.id;
  
  if (props.alignDirection === 'right') {
    marginDirection = 'left';
    position = "set-left";
  } else {
    marginDirection = 'right';
    position = "set-right";
  }

  return (
    <div id={id} data-context={props.context} className={ isActive ? "active-element project-card align-" + props.alignDirection : "project-card align-" + props.alignDirection} style={{ backgroundImage: `url(${props.projectBackground})`}} onClick={onClick}>
      <h1 className={position}>{title}</h1>
      { !isActive ? <div className={"project-info margin-" + marginDirection}>
        <div className="project-summary">
          <h2>Project Summary</h2>
          { isActive ? <p>{summary}</p> : ''}
        </div>
        <div className="project-details">
          <h2>Technologies used</h2>
          { techs["tech_1"] ? <p>{techs["tech_1"]}</p> : ''}
          { techs["tech_2"] ? <p>{techs["tech_2"]}</p> : ''}
          { techs["tech_3"] ? <p>{techs["tech_3"]}</p> : ''}
          { techs["tech_4"] ? <p>{techs["tech_4"]}</p> : ''}
          { techs["tech_5"] ? <p>{techs["tech_5"]}</p> : ''}
        </div>
      </div>: ''}
    </div>
  )
 };

 export default ProjectItem;