import { useState } from "react";
import { Axios, db } from '../../firebase/firebase.utils';
import './contact-us.styles.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({})
  
    const updateInput = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
    const handleSubmit = event => {
      event.preventDefault()
      sendEmail()
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }
    const sendEmail = () => {
      Axios.post(
        'https://us-central1-sms-project-bc027.cloudfunctions.net/submit',
        formData
      )
        .then(res => {
          db.collection('emails').add({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date(),
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
  
    return (
      <div className = 'contact-us'>
        <h2> HOW CAN WE HELP ?</h2>
        <span> Please fill in our form and we will gladly answer your question. </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateInput}
            value={formData.name || ''}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  
  export default ContactForm


