import {React, Fragment} from 'react';
import './cornerimage.css';

const CornerImage = ( props ) => {

  return (
      <div className={"corner-" + props.location}></div>
  )
 };
 
 export default CornerImage;