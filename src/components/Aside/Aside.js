import React from 'react';
import './Aside.css'

const Aside = ({ selectedProject }) => {
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
        <a href={selectedProject.gitHub} target='_blank' rel="noreferrer">GitHub</a>
        <h4>{selectedProject.date}</h4>
        <h4>{selectedProject.technology.join(', ')}</h4>
        
      </section>
  )
  }
}

export default Aside;
