import {
  FaFacebook,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { useInicio } from '../../Hook/useInicio';
import './inicio.scss';

export default function Inicio() {
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
            Bienvenido, soy <br /> <span> Bryan Sanchez </span> <br /> y soy
            desarrollador web
          </h1>
        </div>
      </div>
      <div className="helloWorld">
        <h2>Hello World!...</h2>
      </div>
    </section>
  );
}
