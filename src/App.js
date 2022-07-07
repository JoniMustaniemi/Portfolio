import { React, useState } from 'react';
import ProjectContextCard from './components/atoms/project-context-card/ProjectContextCard';
import ProjectContainer from './components/organisms/project-container/ProjectContainer';
import './interface/interface.css';
import reactlogo from '../src/pics/react-logo.png';
import pythonlogo from '../src/pics/python-logo.png';
import typescriptlogo from '../src/pics/ts-logo.png';
import nodelogo from '../src/pics/node-logo.png';
import designlogo from '../src/pics/ideation.png';

function App() {

  const [active, setActive] = useState({
    React: false,
    Python: false,
    Typescript: false,
    Nodejs: false,
    Design: false,
  });

  const [activeElementId, setactiveElementId] = useState('');

  const displayActive = (element) => {
    let id = element.id;

    if (id === activeElementId) {
      setactiveElementId('');
    } else {
      setactiveElementId(id);
    }
  }

  const scrollTo = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    });
  }

  const handleActiveStatus = (e) => {
    let currentStatus = active[e.currentTarget.id];
    setActive({[e.currentTarget.id]: !currentStatus});
    displayActive(e.currentTarget);
    scrollTo();
  }

  return (
    <div className="main-wrapper">
      <div className="secondary-wrapper">
      <div className='topbar'>
        <ProjectContextCard name="React" projectLogo={reactlogo} active={active.React} onClick={handleActiveStatus}/>
        <ProjectContextCard name="Python" projectLogo={pythonlogo} active={active.Python} onClick={handleActiveStatus}/>
        <ProjectContextCard name="Typescript" projectLogo={typescriptlogo} active={active.Typescript} onClick={handleActiveStatus}/>
        <ProjectContextCard name="Nodejs" projectLogo={nodelogo} active={active.Nodejs} onClick={handleActiveStatus}/>
        <ProjectContextCard name="Design" projectLogo={designlogo} active={active.Design} onClick={handleActiveStatus}/>
      </div>
        <ProjectContainer activeElementId={activeElementId} activeElement={active}/>
      </div>
    </div>
  );
}

export default App;
