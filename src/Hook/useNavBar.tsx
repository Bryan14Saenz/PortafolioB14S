// Importaciones de React
import { useState } from 'react';
// Importaciones de Iconos
import { AiOutlineBars } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

// Función que maneja el width del navbar y su icono
export const useNavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    const navbar = document.querySelector('.navbar') as HTMLElement;

    setOpen(!open);

    navbar.style.width = open ? '70px' : '220px';
  };

  const btnNavBar = open ? <IoClose /> : <AiOutlineBars />;

  return {
    btnNavBar,
    handleOpen,
  };
};
