import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Aside.css'

const Aside = ({ selectedProject }) => {
  // useEffect(() => {
  //   gsap.fromTo(
  //     '.aside-link',
  //     {
  //       color: () => {
  //         return `#df562a`;
  //       },
  //     },
  //     {
  //       color: 'black',
  //       duration: 5.5,
  //       repeat: -1,
  //       ease: 'none',
  //     }
  //   );
  // });

  if (selectedProject.id === 0) {
    return (
      <section className='aside-wrap'>
      <div dangerouslySetInnerHTML={{__html: selectedProject.body}}></div>
    </section>
    )
  } else {
  return (
    <section className='aside-project-wrap'>
        <h1>{selectedProject.name}</h1>
        <a className='aside-link' href={selectedProject.gitHub} target='_blank' rel="noreferrer"> GitHub </a>
        {selectedProject.deploy.length > 1 && 
        <a className='aside-link' href={selectedProject.deploy} target='_blank' rel="noreferrer"> Deploy </a>}
        <h4 className='aside-project-info'><strong>Date:</strong> {selectedProject.date}</h4>
        <h4 className='aside-project-info'><strong>Technologies:</strong> {selectedProject.technology.join(', ')}</h4>
        
      </section>
  )
  }
}

export default Aside;
