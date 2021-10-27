import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Wave } from '../../assets/wave.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.body} 30%, ${({ theme }) => theme.colors.waveFour} 0%);
`

const BackgroundWave = styled(Wave)`
  position: relative;
  height: 100px;
  top: 68px;
  transform: rotate(180deg) scale(6.5);
  overflow: hidden;
  z-index: 1;
  fill: ${({ theme }) => theme.colors.waveFour};
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
	height: 100%;
  padding: 20px;
  margin-top:25px;
  margin-bottom: 16px;
	border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: 2;
	-webkit-box-shadow: ${({ theme }) => theme.colors.WebkitBoxShadow}; 
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  @media only screen and (max-width: 1024px) {
      width: 75%;
    }
  @media only screen and (max-width: 425px) {
      width: 79%;
    }
  @media only screen and (max-width: 320px) {
      height: 75%;
    }
`

const Hello = styled.div`
  align-self: center;
  width: 200px;
  height: 75px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`

const Head = styled.h1`
  text-align: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  margin: 16px;
  z-index: 2;
`

const Label = styled.label`
  font-weight: 400;
`

const Name = styled.input`
  max-width: 300px;
  font-size: 20px;
  margin: 5px 0;
  min-height: 35px;
  &:-webkit-autofill {
    -webkit-box-shadow: none;
  }
  &:focus {
    outline-color: ${({ theme }) => theme.colors.waveFour};
  }
`

const Email = styled.input`
  max-width: 425px;
  font-size: 20px;
  margin: 5px 0;
  min-height: 35px;
  &:-webkit-autofill {
    -webkit-box-shadow: none;
  }
  &:focus {
    outline-color: ${({ theme }) => theme.colors.waveFour};
  }
`

const Message = styled.textarea`
  height: 50%;
  font-size: 20px;
  margin: 5px 0;
  min-height: 35px;
  &:-webkit-autofill {
    -webkit-box-shadow: none;
  }
  &:focus {
    outline-color: ${({ theme }) => theme.colors.waveFour};
  }
`

const Submit = styled.button`
  display: inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid ${({ theme }) => theme.colors.waveFour};
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color: ${({ theme }) => theme.colors.waveFour};
  background-color: transparent;
  text-align:center;
  transition: all 600ms;
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.waveFour};
  }
`

const Contact = () => {
  const contactHead = useRef()
  const contactName = useRef()
  const contactEmail = useRef()
  const contactMessage = useRef()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    gsap.to('.contact-wave', 30, {css: {right: '275px'}, ease: 'power1', yoyo: 'true', repeat: '-1'})
    gsap.to('.contact-wave', 1.25, {css: {top: '70px'}, ease: 'bounce', yoyo: 'true', repeat: '-1'})
  }, [])

  useEffect(() => {
    gsap.to('.form-container', 1, {css: {visibility: 'visible'}})
    gsap.from('.form-container', .8, {y: 450, opacity: 0, stagger: 0.2})
  }, [])
  
  const submitForm = (e) => {
    e.preventDefault()

    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse', {
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
    
    handleFields()
  } 

  const getInputData = () => {
    let dataToPost = new FormData()
  
    dataToPost.append('entry.2005620554', contactName.current.value)
    dataToPost.append('entry.1045781291', contactEmail.current.value)
    dataToPost.append('entry.839337160', contactMessage.current.value)

    console.log(dataToPost)
    return dataToPost
  }

  const handleFields = () => {
    setSubmitted(true);
    contactName.current.value = '';
    contactEmail.current.value = '';
    contactMessage.current.value = '';
    setTimeout(() => { setSubmitted(false); }, 5000);
  }

  return (
		<Wrap>
			<BackgroundWave className="contact-wave" alt="wave" />
			<FormContainer className='form-container'>
				<Hello>
          {submitted? 
            <Head ref={contactHead}> SENT! </Head> :
            <Head ref={contactHead}> SAY HELLO! </Head>
          }
				</Hello>
				<Form
					action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSed7xFAkBBdilezfZe5ek5uCfr1BLEKcrlloZpu-sE0boxrbQ/formResponse"
					method="POST"
					onSubmit={(e) => {
						submitForm(e);
					}}>
					<Label htmlFor="name-input">
						What's your name?
					</Label>
					<Name
						htmlFor="name-input"
						type="text"
						ref={contactName}
						name="entry.2005620554"
						placeholder="Name"
						required="required">
          </Name>
					<Label htmlFor="email-input">
						How can I reach you best?
					</Label>
					<Email
						htmlFor="email-input"
						type="email"
						ref={contactEmail}
						name="entry.1045781291"
						placeholder="E-Mail"
						required="required">
          </Email>
					<Label htmlFor="message-input">
						What's on your mind?
					</Label>
          <Message 
            htmlFor='message-input' 
            rows='5' 
            cols='10'
            ref={contactMessage}
            name="entry.839337160"
            placeholder="Let's get coffee!"
            required="required">
          </Message>
					<Submit type="submit">
						Submit
					</Submit>
				</Form>
			</FormContainer>
		</Wrap>
	);
}

export default Contact;