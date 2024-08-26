import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement de l'envoi du formulaire
    console.log('Form data:', formData);
    alert('Message envoyé!');
    // Vous pouvez également ajouter une logique pour envoyer les données à un backend.
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Votre nom :</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Votre prénom :</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Votre email :</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Votre message :</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="send-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
