// Importaciones de Iconos de React
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// Importaciones de los Redes Sociales
import redes from '../../services/redes';
// Importaciones de estilos
import './contacto.scss';

// Componente de Contacto
export const Contacto = () => {
  // Constantes que almacenan los enlaces de las redes
  const { email } = redes;

  return (
    <footer className="footer">
      <div className="contenedor">
        <h2>Hablemos</h2>
        <p>
          "Programa no para resolver problemas, sino para crear soluciones".
        </p>
        <a href={email}>Envíame un correo</a>
      </div>
      <div className="contacto">
        <p>B14S</p>
        <p>Aprendo y creo todos los días.</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/14BryanSaenz" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/14BryanSaenz" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/14bryansaenz/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Bryan14Saenz" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ul>
        <p>
          Desarrollado por <span>Bryan14Saenz</span> en React
        </p>
      </div>
    </footer>
  );
};
