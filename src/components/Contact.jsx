import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import '../App.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_blv468c', 'template_9e9c1pj', form.current, 'TTAkZzie67JHd7yj4')
      .then(
        () => {
          console.log('SUCCESS!');
          // Réinitialiser le formulaire après envoi
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 style={{ color: 'aqua' }}>LANGLOIS Séverine</h2>
        <p style={{ color: 'white' }}>N&apos;hésitez pas à me contacter !</p>
        <div className="contact-detail">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>Sorgues</span>
        </div>
        <div className="contact-detail">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>lorquangel@hotmail.fr</span>
        </div>
        <div className="social-icons">
          <a href="https://github.com/Evilqueenregal" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/s%C3%A9verine-langlois/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:lorquangel@hotmail.fr">
            <FontAwesomeIcon icon={faAt} size="2x" />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="user_name" 
              value={formData.user_name}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="user_email" 
              value={formData.user_email}
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange} 
              required 
            />
          </div>
          <input type="submit" value="Send" className="send-button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
