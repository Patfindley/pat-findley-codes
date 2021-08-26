import {useRef} from 'react';
import './Contact.css'
const Contact = ({ windowWidth }) => {
  const contactName = useRef()
  const contactEmail = useRef()
  const contactMessage = useRef()
  
  const submitForm = (e) => {
    console.log("hi!")
    e.preventDefault()

  fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    header: {
      'Content-Type': 'application/json'
    },
    body: getInputData()
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err))
}
  
const getInputData = () => {
  let dataToPost = new FormData()

  dataToPost.append('entry.2005620554', contactName)
  dataToPost.append('entry.1045781291', contactEmail)
  dataToPost.append('entry.839337160', contactMessage)
}
  

  return (
    <>
    {/* <iframe title='contact' src='https://docs.google.com/forms/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/viewform?embedded=true' width={windowWidth} height='702' frameBorder='0' marginHeight='0' marginWidth='0'>Loading…</iframe> */}
    <form action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse' method='post' onSubmit={(e) => {submitForm(e); console.log('hello there')}}
    >
      <label for='name-input'>Your Name
        <input type='text' ref={contactName} name='entry.2005620554' placeholder='Name' required="required"></input>
      </label>
      <label>Your E-Mail
        <input type='email' ref={contactEmail} name='entry.1045781291' placeholder='E-Mail' required="required"></input>
      </label>
      <label>Say Hello!
        <input type='text' ref={contactMessage} name='entry.839337160' placeholder='Hey, Pat!' required="required"></input>
      </label>
      <button className='submit-button' type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Contact;