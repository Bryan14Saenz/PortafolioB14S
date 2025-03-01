import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';

export const useNavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    const navbar = document.querySelector('.navbar') as HTMLElement;

    setOpen(!open);

    navbar.style.width = open ? '80px' : '250px';
  };

  const btnNavBar = open ? <IoClose /> : <AiOutlineBars />;

  return {
    btnNavBar,
    handleOpen,
  };
};
