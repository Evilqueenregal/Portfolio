import '../App.css'; 
import img724events from "../assets/projets/724events.webp";
import imgBankTree from "../assets/projets/bank-tree.webp";
import imgBooki from "../assets/projets/booki.webp";
import imgKasa from "../assets/projets/kasa.webp";
import imgNinacarducci from "../assets/projets/nina-carducci.webp";
import imgOhmyfood from "../assets/projets/ohmyfood.webp";
import imgSophiebluel from "../assets/projets/sophie-bluel.webp";

const projets = [
    {
      title: "Booki",
      img: imgBooki,
      description: "En tant que développeur web chez Booki, j'ai intégré l'interface du site à l'aide de HTML et CSS, en collaboration avec Sarah, la CTO, et Loïc, l'UI designer. J'ai travaillé sur des maquettes complètes pour les versions desktop, tablette et mobile, en respectant les spécifications et contraintes techniques. J'ai reçu une structure de fichiers préparée pour démarrer",
      codeLink: "https://github.com/Evilqueenregal/Booki",
      siteLink: "https://evilqueenregal.github.io/Booki/",
    },
    {
      title: "Oh My Food",
      img: imgOhmyfood,
      description: "Pour OhMyFood, j'ai créé un site 'mobile-first' répertoriant les menus de restaurants haut de gamme. Les clients précommandent leur repas pour éviter les files d'attente. Quatre restaurateurs sont déjà partenaires. J'ai assuré la conception responsive et intégré des animations élégantes pour une expérience optimale.",
      codeLink: "https://github.com/Evilqueenregal/ohmyfood",
      siteLink: "https://evilqueenregal.github.io/ohmyfood/",
    },
    {
      title: "Sophie Bluel", 
      img: imgSophiebluel,
      description: "Chez ArchiWebos, j'ai contribué à la conception du site portfolio de Sophie Bluel, architecte d'intérieur. Mon rôle en tant que développeur front-end a impliqué la création de la page de présentation, de la page de connexion de l'administrateur, et d'une modale d'upload de médias. ",
      codeLink: "https://github.com/Evilqueenregal/Sophie-bluel",
      siteLink: "https://evilqueenregal.github.io/Sophie-bluel/",
    },
    {
      title: "Kasa", 
      img: imgKasa,
      description: "En tant que développeur front-end freelance, j'ai travaillé avec Kasa, un leader de la location d'appartements entre particuliers en France. J'ai pris en charge la refonte totale de leur site web en utilisant React. Malgré l'absence temporaire du back-end, j'ai réussi à développer l'ensemble de l'application, les composants React, et les routes React Router.",
      codeLink:"https://github.com/Evilqueenregal/Kasa-main",
      siteLink: "https://evilqueenregal.github.io/Kasa-main/",
    },
    {
      title: "724 Events",  
      img: img724events,
      description: "En tant que développeur front-end freelance, j'ai été sollicité par l'agence événementielle 724events pour résoudre des problèmes de bugs et finaliser leur site web vitrine. Le projet avait été initialement démarré par un autre développeur. J'ai repris le travail en corrigeant les bugs, et en complétant le cahier de recette pour assurer un fonctionnement sans faille.",
      codeLink: "https://github.com/Evilqueenregal/724events",
      siteLink: "https://evilqueenregal.github.io/724events/",
    },
    {
      title: "Nina Carducci", 
      img: imgNinacarducci,
      description: "En tant que développeur freelance, j'ai proposé mes services d'optimisation SEO à Nina Carducci, une photographe. Après avoir effectué un audit de son site, j'ai identifié des problèmes de vitesse de chargement et de structure. J'ai proposé de résoudre ces problèmes en optimisant les images et le code du site. Mon objectif était d'améliorer son référencement et d'augmenter sa visibilité.",
      codeLink: "https://github.com/Evilqueenregal/Nina-Carducci",
      siteLink: "https://evilqueenregal.github.io/Nina-Carducci/",
    },
    {
      title: "Argent Bank",
      img: imgBankTree,
      description: "En tant que développeur front-end chez Argent Bank, j'ai travaillé sur la création du tableau de bord des utilisateurs. La première phase impliquait de créer une application web réactive avec React, en utilisant Redux pour la gestion de l'état. Dans la phase 2, j'ai travaillé sur la conception des transactions et j'ai fourni des spécifications Swagger pour les routes API associées.",
      codeLink: "https://github.com/Evilqueenregal/Argent-Bank",
      siteLink: "https://evilqueenregal.github.io/Argent-Bank/",
    },
];

const Projets = () => {
  return (
    <div className="projets-container">
      <h2>Voici mes projets :</h2>
      <div className="projets-grid">
        {projets.map((projet, index) => (
          <div key={index} className="projet">
            <img src={projet.img} alt={`Projet ${index + 1}`} className="projet-image" />
            <div className="overlay">
              <div className="description">
                <h3>{projet.title}</h3>
                {projet.description}</div>
              <div className="buttons">
                <a href={projet.codeLink} target="_blank" rel="noopener noreferrer" className="button">
                  Voir le code
                </a>
                {projet.title !== "Argent Bank" && (
                  <a href={projet.siteLink} target="_blank" rel="noopener noreferrer" className="button">
                    Voir le site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
