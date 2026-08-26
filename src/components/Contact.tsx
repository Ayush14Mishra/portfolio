import React, { FormEvent, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import '../assets/styles/Contact.scss';

function Contact() {
  const [status, setStatus] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setStatus('Please complete all three fields.');
      form.reportValidity();
      return;
    }
    setStatus('Add your real email in Contact.tsx to activate message delivery.');
  };

  return (
    <div id="contact"><div className="items-container"><div className="contact_wrapper">
      <h1>Contact Me</h1>
      <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-flex">
          <label><span>Your Name*</span><input name="name" type="text" placeholder="Your Name*" required /></label>
          <label><span>Email / Phone*</span><input name="contact" type="text" placeholder="Email / Phone*" required /></label>
        </div>
        <label><span>Message*</span><textarea name="message" placeholder="Message*" rows={9} required /></label>
        <div className="contact-actions"><span className="form-status" role="status">{status}</span><button type="submit">Send <SendIcon /></button></div>
      </form>
    </div></div></div>
  );
}

export default Contact;
