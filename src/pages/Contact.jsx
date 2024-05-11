import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <main className='contact-main'>
      <div className='form'>
        <div className='links'>
          Here goes the links
        </div>
        <hr />
        <form action="post">
          <div className="fields">
            <label htmlFor="name">Name: <span className="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="fields">
            <label htmlFor="email">Email: <span className="required">*</span></label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="fields">
            <label htmlFor="contactNumber">Contact Number: <span className="required">*</span></label>
            <input type="tel" id="contactNumber" name="contactNumber" placeholder="Enter your contact number" required />
          </div>
          <div className="fields">
            <label htmlFor="message">Message: <span className="required">*</span></label>
            <textarea rows="5" id="message" name="message" placeholder="Enter your message" required></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit">Submit</button>
            <button type="reset">Clear Form</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Contact
