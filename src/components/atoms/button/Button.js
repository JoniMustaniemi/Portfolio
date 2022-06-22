import { React } from 'react';
import './button.css';


const ProjectButton = ( props ) => {

  const onClick = props.onClick;
  const active = props.active;

  return (
  <div className={active ? 'active projectbutton-background': 'projectbutton-background'} id={(props.name).replace(/ /g, '')} onClick={onClick}>
    <div className="projectbutton-wrapper" style={{ backgroundImage: `url(${props.projectLogo})`}}>
    <div className="ornament-border-top-left"></div>
    <div className="ornament-border-top-right"></div>
    <div className="ornament-border-bottom-right"></div>
    <div className="ornament-border-bottom-left"></div>
    <button className="projectbutton"><h1>{props.name}</h1></button>
    </div>

  </div>
  )
 };
 
 export default ProjectButton;