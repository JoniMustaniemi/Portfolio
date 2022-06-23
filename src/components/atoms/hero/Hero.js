import { React } from 'react';
import './hero.css';


const Hero = ( props ) => {

  const scrollTo = () => {
    window.scrollTo({
      top: 9999,
      behavior: 'smooth',
    });
  }

  const handleClick = () => {
    scrollTo();
  }

  return (
    <><div className="bg-image"></div>
    <div className="bg-text" onClick={handleClick}>
      <h1>Joni Mustaniemi</h1>
      <p>Developer portfolio</p>
    </div></>
  )
 };
 
 export default Hero;