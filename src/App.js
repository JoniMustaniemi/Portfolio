import { React, useState } from 'react';
import ProjectButton from './components/atoms/button/Button';
import ProjectContainer from './components/atoms/project-container/ProjectContainer';
import Backgroundbuilder from './components/molecules/background-builder/BackgroundBuilder';
import './style/interface.css';
import reactlogo from '../src/pics/react-logo.png';
import pythonlogo from '../src/pics/python-logo.png';
import typescriptlogo from '../src/pics/ts-logo.png';
import nodelogo from '../src/pics/node-logo.png';
import designlogo from '../src/pics/ideation.png';

function App() {

  const [active, setActive] = useState({
    React: false,
    Python: false,
    TypeScript: false,
    NodeJS: false,
    Design: false
  });

  const [activeElementId, setactiveElementId] = useState('idle');

  const displayActive = (element) => {
    let id = element.id;
    if (id === activeElementId) {
      setactiveElementId("idle");
    } else {
      setactiveElementId(id);
    }
  }

  const handleActiveStatus = (e) => {
    let projectCard = e.currentTarget.id;
    let currentStatus = active[e.currentTarget.id];
    setActive({[projectCard]: !currentStatus});
    displayActive(e.currentTarget);
  }

  return (
    <div className="main-wrapper">
      <div className="secondary-wrapper">
      <div className='topbar'>
        <ProjectButton name="React" projectLogo={reactlogo} active={active.React} onClick={handleActiveStatus}/>
        <ProjectButton name="Python" projectLogo={pythonlogo} active={active.Python} onClick={handleActiveStatus}/>
        <ProjectButton name="TypeScript" projectLogo={typescriptlogo} active={active.TypeScript} onClick={handleActiveStatus}/>
        <ProjectButton name="NodeJS" projectLogo={nodelogo} active={active.NodeJS} onClick={handleActiveStatus}/>
        <ProjectButton name="Design" projectLogo={designlogo}  active={active.Design} onClick={handleActiveStatus}/>
      </div>
        <ProjectContainer activeElementId={activeElementId}/>
      </div>
      <Backgroundbuilder/>
    </div>
  );
}

export default App;
