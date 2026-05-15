import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      
      if (!accessKey) {
        console.error('Web3Forms Access Key is missing! Please add VITE_WEB3FORMS_KEY to your .env file.');
        throw new Error('API Key Missing');
      }

      const data = new FormData();
      data.append('access_key', accessKey);
      data.append('from_name', 'Portfolio Contact Form');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject || 'New Portfolio Contact');
      data.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>;
      case 'success':
        return <><i className="fa-solid fa-check"></i> Message Sent!</>;
      case 'error':
        return <><i className="fa-solid fa-exclamation-triangle"></i> Failed to Send</>;
      default:
        return <><i className="fa-solid fa-paper-plane"></i> Send Message</>;
    }
  };

  const getButtonStyle = () => {
    if (status === 'success') return { background: 'linear-gradient(135deg, #10b981, #059669)' };
    if (status === 'error') return { background: 'linear-gradient(135deg, #ef4444, #dc2626)' };
    if (status === 'sending') return { opacity: 0.7 };
    return {};
  };

  return (
    <section className="section" id="contact">
      <div className="section__container">
        <ScrollReveal>
          <span className="section__label">Contact</span>
          <h2 className="section__title">Let's Work Together</h2>
          <p className="section__subtitle">
            Have a project in mind? Let's bring it to life. I'm always open to new opportunities and collaborations.
          </p>
        </ScrollReveal>
        <div className="contact__grid">
          <ScrollReveal className="contact__info">
            <div className="contact__card">
              <div className="contact__card-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div>
                <div className="contact__card-label">Location</div>
                <div className="contact__card-value">Vadodara, Gujarat</div>
              </div>
            </div>
            <a href="mailto:kgmodi3112004@gmail.com" className="contact__card">
              <div className="contact__card-icon"><i className="fa-solid fa-envelope"></i></div>
              <div>
                <div className="contact__card-label">Email</div>
                <div className="contact__card-value">kgmodi3112004@gmail.com</div>
              </div>
            </a>
            <a href="https://github.com/Modi-Krish" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-icon"><i className="fa-brands fa-github"></i></div>
              <div>
                <div className="contact__card-label">GitHub</div>
                <div className="contact__card-value">github.com/modi-krish</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/modikrish0311/" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-icon"><i className="fa-brands fa-linkedin-in"></i></div>
              <div>
                <div className="contact__card-label">LinkedIn</div>
                <div className="contact__card-value">linkedin.com/in/modikrish0311</div>
              </div>
            </a>
            <a href="https://wa.me/918160443606" target="_blank" rel="noopener noreferrer" className="contact__card">
              <div className="contact__card-icon"><i className="fa-brands fa-whatsapp"></i></div>
              <div>
                <div className="contact__card-label">WhatsApp</div>
                <div className="contact__card-value">+91 81604 43606</div>
              </div>
            </a>
          </ScrollReveal>
          <ScrollReveal>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__group">
                <label className="form__label" htmlFor="name">Your Name</label>
                <input className="form__input" type="text" id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="email">Your Email</label>
                <input className="form__input" type="email" id="email" name="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="subject">Subject</label>
                <input className="form__input" type="text" id="subject" name="subject" placeholder="Project Collaboration" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="message">Message</label>
                <textarea className="form__textarea" id="message" name="message" placeholder="Tell me about your project..." required value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button
                type="submit"
                className="btn btn--primary form__submit"
                disabled={status === 'sending'}
                style={getButtonStyle()}
              >
                {getButtonContent()}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
