import Header from "./components/Header";
import Banner from "./components/Banner";
import APropos from "./components/A propos";

const App = () => {
  return (
    <div>
         <Header />
         <Banner />
      <section id="about">À Propos de moi</section>
         <APropos />
      <section id="tech">Technologies</section>
      <section id="projects">Projets</section>
      <section id="contact">Me contacter</section>
    </div>
  );
};

export default App;