import React from 'react';
import emailjs from 'emailjs-com';
import '../App.scss'

export default function Contact() {

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    emailjs.sendForm('service_qotqq3s', 'template_inmif69', form, 'pClb0Ji8eKLhvORty')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been sent!');
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact">
      <div className="contact-section">
        <h4>Let's Connect!</h4>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="info">
            <input type="text" name="from_name" required placeholder='Name' className='nameField' />
            <input type="email" name="reply_to" required placeholder='Email'/>
          </div>
          <textarea name="message" rows={4} required placeholder='Your Message'/><br />
      <button type="submit" value="Send">Send Message</button>
    </form>
      </div>
    </div>
    
  );
}
