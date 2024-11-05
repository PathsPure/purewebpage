import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    topic: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      'service_a41p6sc',
      'template_9xeuok6',
      form.current,
      'v816-xGSh2DFwo2l1'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ email: '', topic: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Get in touch with us to learn more about Pure Paths</p>
        
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              disabled={sending}
            />
          </div>

          <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              disabled={sending}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
              rows="5"
              disabled={sending}
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 