import {React, Fragment} from 'react';
import CornerImage from '../../atoms/corner-image/CornerImage';
import './backgroundbuilder.css';
import '../../molecules/../atoms/corner-image/CornerImage';

const Backgroundbuilder = ( props ) => {

  return (
    <Fragment>
      <div className="backgroundimage"></div>
      <CornerImage location="bottom-left"/>
      <CornerImage location="top-left"/>
      <CornerImage location="top-right"/>
      <CornerImage location="bottom-right"/>
    </Fragment>
  )
 };
 
 export default Backgroundbuilder;