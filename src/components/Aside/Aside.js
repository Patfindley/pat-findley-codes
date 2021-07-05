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
        <a className='active-link' href={selectedProject.gitHub} target='_blank' rel="noreferrer"> GitHub </a>
        {selectedProject.deploy.length > 1 && 
        <a className='active-link' href={selectedProject.deploy} target='_blank' rel="noreferrer"> Deploy </a>}
        <h4 className='aside-project-info'><strong>Date:</strong> {selectedProject.date}</h4>
        <h4 className='aside-project-info'><strong>Technologies:</strong> {selectedProject.technology.join(', ')}</h4>
        
      </section>
  )
  }
}

export default Aside;
