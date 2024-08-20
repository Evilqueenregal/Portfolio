import '../App.css'; 
import CssIcon from '../assets/icons/logo Css.webp';
import DevToolsIcon from '../assets/icons/logo devtools.webp';
import FigmaIcon from '../assets/icons/logo figma.webp';
import GithubIcon from '../assets/icons/logo github.webp';
import HtmlIcon from '../assets/icons/logo html.webp';
import JsIcon from '../assets/icons/logo Js.webp';
import LighthouseIcon from '../assets/icons/logo lighthouse.webp';
import NodejsIcon from '../assets/icons/logo nodejs.webp';
import PostmanIcon from '../assets/icons/logo postman.webp';
import ReactDevToolsIcon from '../assets/icons/logo react devtools.webp';
import ReactIcon from '../assets/icons/logo react.webp';
import ReduxIcon from '../assets/icons/logo react redux.webp';
import SassIcon from '../assets/icons/logo sass.webp';
import SwaggerIcon from '../assets/icons/logo swagger.webp';
import TrelloIcon from '../assets/icons/logo trello.webp';
import VsCodeIcon from '../assets/icons/logo vscode.webp';
import W3CIcon from '../assets/icons/logo w3c.webp';
import WaveIcon from '../assets/icons/logo wave.webp';

const Tech = () => {
  return (
    <div className="tech-container">
      <h2 className="tech-intro">
        Je travaille avec les technologies et les outils suivants :
      </h2>

      <div className="tech-grid">
        <div className="tech-category">
          <h3 className="tech-title">Front End</h3>
          <div className="tech-icons-front">
            <img src={HtmlIcon} alt="HTML" />
            <img src={CssIcon} alt="CSS" />
            <img src={JsIcon} alt="JavaScript" />
          </div>
          <div className="tech-icons-front">
            <img src={ReactIcon} alt="React" />
            <img src={ReduxIcon} alt="Redux" />
            <img src={SassIcon} alt="Sass" />
          </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-title">Back End</h3>
          <div className="tech-icons-back">
            <img src={NodejsIcon} alt="Node.js" />
          </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-title">Versioning</h3>
          <div className="tech-icons-versioning">
            <img src={GithubIcon} alt="GitHub" />
          </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-title">Outils UI/UX</h3>
          <div className="tech-icons-outils">
            <img src={FigmaIcon} alt="Figma" />
          </div>
        </div>

        <div className="tech-category">
            <h3 className="tech-title">IDE</h3>
            <div className="tech-icons-ide">
                <img src={VsCodeIcon} alt="Vscode" />
            </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-title">Autres outis</h3>
          <div className="tech-icons-autres">
            <img src={W3CIcon} alt="W3C" />
            <img src={WaveIcon} alt="Wave" />
            <img src={DevToolsIcon} alt="Devtools" />
          </div>
          <div className="tech-icons-autres">
            <img src={TrelloIcon} alt="Trello" />
            <img src={SwaggerIcon} alt="Swagger" />
            <img src={PostmanIcon} alt="Postman" />
          </div>
          <div className="tech-icons-autres">
            <img src={ReactDevToolsIcon} alt="ReactDevTools" />
            <img src={WaveIcon} alt="Wave" />
            <img src={LighthouseIcon} alt="Lighthouse" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tech;