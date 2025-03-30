// Importaciones de Iconos
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from 'react-icons/fa';
import { SiCanva, SiJquery, SiNetlify, SiTypescript } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
// Importaciones de estilos
import './habilidades.scss';

// Componente de Habilidades
export const Habilidades = () => {
  return (
    <section className="habilidades">
      <h2>Tecnologías</h2>
      <div className="grid">
        <div className="herramientas">
          <h3>Herramientas</h3>
          <ul>
            <li>
              <TbBrandVscode className="icon" title="Visual Studio Code" />
            </li>
            <li>
              <FaGitAlt className="icon" title="Git" />
            </li>
            <li>
              <FaGithub className="icon" title="GitHub" />
            </li>
            <li>
              <SiNetlify className="icon" title="Netlify" />
            </li>
            <li>
              <SiCanva className="icon" title="Canva" />
            </li>
          </ul>
        </div>
        <div className="front-end">
          <h3>Front-End</h3>
          <ul>
            <li>
              <FaHtml5 className="icon" title="HTML5" />
            </li>
            <li>
              <FaCss3Alt className="icon" title="CSS3" />
            </li>
            <li>
              <FaSass className="icon" title="Sass" />
            </li>
            <li>
              <FaBootstrap className="icon" title="Bootstrap" />
            </li>
            <li>
              <FaJs className="icon" title="JavaScript" />
            </li>
            <li>
              <SiJquery className="icon" title="JQuery" />
            </li>
            <li>
              <SiTypescript className="icon" title="TypeScript" />
            </li>
            <li>
              <FaReact className="icon" title="React" />
            </li>
          </ul>
        </div>
        <div className="back-end">
          <h3>Back-End</h3>
          <ul>
            <p>En proceso...</p>
          </ul>
        </div>
      </div>
    </section>
  );
};
