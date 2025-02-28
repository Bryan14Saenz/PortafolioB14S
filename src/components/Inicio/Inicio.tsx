import { useState } from 'react';
import {
  FaFacebook,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTwitter,
} from 'react-icons/fa';
import bryanSanchez from '../../assets/bryanSanchez.png';
import curriculum from '../../assets/curriculum.pdf';
import './inicio.scss';

export default function Inicio() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const cambiarColor = () => {
    setModoOscuro(!modoOscuro);

    if (modoOscuro) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  };

  return (
    <div className="inicio">
      <div className="enlaces">
        <ul>
          <li>
            <a href="https://www.facebook.com/14BryanSaenz" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://x.com/14BryanSaenz" target="_blank">
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
          <li>
            <a href={curriculum} download={true}>
              <FaFilePdf />
            </a>
          </li>
          <li>
            <button type="button" className="btnCambioColor">
              {modoOscuro ? (
                <FaMoon onClick={cambiarColor} />
              ) : (
                <FaSun onClick={cambiarColor} />
              )}
            </button>
          </li>
        </ul>
      </div>
      <div className="contenido">
        <div className="imagen">
          <img src={bryanSanchez} alt="Bryan Sanchez" />
        </div>
        <div className="texto">
          <h2>
            Bienvenido, soy <br /> <span> Bryan Sanchez </span> <br /> y soy
            desarrollador web
          </h2>
        </div>
      </div>
      <div className="helloWorld">
        <h2>Hello World!</h2>
      </div>
    </div>
  );
}
