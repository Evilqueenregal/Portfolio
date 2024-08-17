import '../App.css'; 
import profileImage from '../assets/images/profile.webp';
import cvFile from '../assets/docs/cv ciblé.pdf';

const APropos = () => {
    return (
      <div className="apropos-container">
        <img src={profileImage} alt="Mon Profil" className="profile-image" />
        <p className="apropos-description">
            Bonjour, je m&apos;appelle Séverine Langlois. Après une reconversion professionnelle couronnée par l&apos;obtention de mon diplôme de formatrice pour adultes, j&apos;ai choisi de me spécialiser dans le numérique, un domaine qui m&apos;a toujours passionnée.<br /><br />
            Dès mes premiers stages en numérique, j&apos;ai ressenti une véritable connexion avec ce secteur, confirmant que cette voie était celle que je souhaitais poursuivre.<br /><br />
            J&apos;aime apprendre et relever de nouveaux défis, et je prends plaisir à créer des solutions innovantes. Mon enthousiasme et ma motivation me poussent à constamment élargir mes compétences, car je crois fermement que l&apos;apprentissage est un processus continu.<br /><br />
            Je suis impatiente de mettre mes compétences au service de projets passionnants et de contribuer activement à leur succès. Je vous invite à télécharger mon CV pour découvrir mon parcours en détail.
        </p>

        <a href={cvFile} download className="cv-button">
          Télécharger Mon CV
        </a>
      </div>
    );
  };
  
  export default APropos;