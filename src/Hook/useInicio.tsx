// Importaciones de React
import { useState, useEffect } from 'react';
// Importaciones de Iconos
import { FaMoon, FaSun } from 'react-icons/fa';
// Importaciones de los Redes Sociales
import redes from '../services/redes';
// Importaciones de los Curriculums y la Imagen
import curriculum from '../assets/Pdf/Curriculum.pdf';
import bryanSanchez from '../assets/Img/bryanSanchez.png';

// Función de Hook
export const useInicio = () => {
  const [modoColor, setModoColor] = useState(() => {
    const modoGuardado = localStorage.getItem('modoClaro');
    return modoGuardado === 'true';
  });

  const cambiarColor = () => {
    const nuevoModo = !modoColor;
    setModoColor(nuevoModo);
    localStorage.setItem('modoClaro', nuevoModo.toString());

    if (nuevoModo) {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    } else {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    }
  };

  useEffect(() => {
    if (modoColor) {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    } else {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#fff';
    }
  }, [modoColor]);

  const btnColor = modoColor ? (
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
