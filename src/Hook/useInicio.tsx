import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import curriculum from '../assets/Pdf/Curriculum.pdf';
import bryanSanchez from '../assets/Img/bryanSanchez.png';

const redes = {
  facebook: 'https://www.facebook.com/14BryanSaenz',
  twitter: 'https://x.com/14BryanSaenz',
  LinkedIn: 'https://www.linkedin.com/in/14bryansaenz/',
  github: 'https://github.com/Bryan14Saenz',
};

export const useInicio = () => {
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

  const btnColor = modoOscuro ? (
    <FaMoon onClick={cambiarColor} />
  ) : (
    <FaSun onClick={cambiarColor} />
  );

  return {
    btnColor,
    bryanSanchez,
    curriculum,
    redes,
  };
};
