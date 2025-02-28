import { useState } from 'react';
import {
  AiOutlineBars,
  AiOutlineIdcard,
  AiOutlineProduct,
} from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import {
  IoChatbubbleEllipsesOutline,
  IoClose,
  IoCodeSlash,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './navbar.scss';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    
    setOpen(!open);

    navbar.style.width = open ? '80px' : '300px';
  };

  return (
    <nav className="navbar">
      <button className="cerrar" onClick={handleOpen}>
        {open ? <AiOutlineBars /> : <IoClose />}
      </button>
      <ul>
        <li>
          <Link to="/">
            <FaHome />
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/habilidades">
            <IoCodeSlash />
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="/proyectos">
            <AiOutlineProduct />
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/sobreMi">
            <AiOutlineIdcard />
            Sobre Mi
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            <IoChatbubbleEllipsesOutline />
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
