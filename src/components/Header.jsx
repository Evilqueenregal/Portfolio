import { useState } from 'react';
import '../App.css'; 

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-title">
        Langlois Séverine
      </div>
      <nav className="header-nav">
        <button 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => handleClick('about')}
        >
          À Propos
        </button>
        <button 
          className={activeSection === 'tech' ? 'active' : ''}
          onClick={() => handleClick('tech')}
        >
          Tech
        </button>
        <button 
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => handleClick('projects')}
        >
          Projets
        </button>
        <button 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => handleClick('contact')}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;

