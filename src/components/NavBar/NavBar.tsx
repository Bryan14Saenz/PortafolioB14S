import { AiOutlineIdcard, AiOutlineProduct } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { IoChatbubbleEllipsesOutline, IoCodeSlash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useNavBar } from '../../Hook/useNavBar';
import './navbar.scss';

export default function NavBar() {
  const { btnNavBar, handleOpen } = useNavBar();

  return (
    <nav className="navbar">
      <button className="cerrar" onClick={handleOpen}>
        {btnNavBar}
      </button>
      <ul>
        <li>
          <Link to="/">
            <FaHome />
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/habilidades">
            <IoCodeSlash />
            <span>Habilidades</span>
          </Link>
        </li>
        <li>
          <Link to="/proyectos">
            <AiOutlineProduct />
            <span>Proyectos</span>
          </Link>
        </li>
        <li>
          <Link to="/sobreMi">
            <AiOutlineIdcard />
            <span>Sobre mí</span>
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            <IoChatbubbleEllipsesOutline />
            <span>Contacto</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
