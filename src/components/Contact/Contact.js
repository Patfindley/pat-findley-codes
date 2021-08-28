import { useRef, useState } from 'react';
import './Contact.css'

const Contact = () => {
  const contactName = useRef()
  const contactEmail = useRef()
  const contactMessage = useRef()
  const [submitted, setSubmitted] = useState(false)
  
  const submitForm = (e) => {
    const submitURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse'

    console.log("submit log")
    e.preventDefault()

    const getInputData = () => {
      let dataToPost = new FormData()
    
      dataToPost.append('entry.2005620554', contactName.current.value)
      dataToPost.append('entry.1045781291', contactEmail.current.value)
      dataToPost.append('entry.839337160', contactMessage.current.value)
      return dataToPost
    }

  fetch(submitURL, {
    method: "POST",
    mode: "no-cors",
    header:{
      'Content-Type': 'application/json'
     },
    body: getInputData()
    })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.error(err))
} 

  return (
    <div className='form-container'>
      <form className='contact-form' action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse' method='POST'  
      onSubmit={(e) => {submitForm(e)}}
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
      <button className='submit-button' type='submit' >Submit</button>
    </form>
    </div>
  )
}

export default Contact;