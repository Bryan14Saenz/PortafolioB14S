// Importaciones de Iconos
import {
  FaFacebook,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
// Importaciones de Hook
import { useInicio } from '../../Hook';
// Importaciones de estilos
import './inicio.scss';

// Componente de Inicio
export const Inicio = () => {
  // Llamada al Hook
  const { btnColor, bryanSanchez, curriculum, redes } = useInicio();

  return (
    <section className="inicio">
      <div className="enlaces">
        <ul>
          <li>
            <a href={redes.facebook} target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href={redes.twitter} target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href={redes.LinkedIn} target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={redes.github} target="_blank">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href={curriculum} download={true}>
              <FaFilePdf />
            </a>
          </li>
          <li>
            <button className="btnCambioColor">{btnColor}</button>
          </li>
        </ul>
      </div>
      <div className="contenido">
        <div className="imagen">
          <img src={bryanSanchez} alt="Bryan Sanchez" />
        </div>
        <div className="texto">
          <h1>
            Bienvenido, soy <br />
            <span> Bryan Sanchez </span>
            <br /> Web Developer - Front-End
          </h1>
        </div>
      </div>
      <div className="helloWorld">
        <h2>Hello World!...</h2>
      </div>
    </section>
  );
};
