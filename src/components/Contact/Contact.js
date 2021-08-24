import './Contact.css'
const Contact = ({ windowWidth }) => {
  return (
    <>
    {/* <iframe title='contact' src="https://docs.google.com/forms/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/viewform?embedded=true" width={windowWidth} height="702" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe> */}
    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse">
      <label>Your Name</label>
      <input type="text" jsname="YPqjbf"></input>
      <label>Your E-Mail</label>
      <input type="email" jsname="YPqjbf"></input>
      <label>Say Hello!</label>
      <input jsname="YPqjbf"></input>
      <button className="submit-button">Submit</button>
    </form>
    </>
  )
}

export default Contact;