// Importaciones de React
import { useState } from 'react';
// Importaciones de los Proyectos
import proyectos from '../services/proyectos';

// Constantes
const proyectosPorPagina = 3;
const tecnologías = [
  'Todos',
  ...new Set(proyectos.flatMap((proyecto) => proyecto.tecnologías)),
];

// Lógica que permite filtrar proyectos y crear el carrusel
export const useProyectos = () => {
  const [filtro, setFiltro] = useState('Todos');
  const [index, setIndex] = useState(0);

  const proyectosFiltrados =
    filtro === 'Todos'
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.tecnologías.includes(filtro));

  const totalPaginas = Math.ceil(
    proyectosFiltrados.length / proyectosPorPagina
  );
  const proyectosVisibles = proyectosFiltrados.slice(
    index * proyectosPorPagina,
    index * proyectosPorPagina + proyectosPorPagina
  );

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? totalPaginas - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === totalPaginas - 1 ? 0 : prevIndex + 1
    );
  };

  return {
    tecnologías,
    filtro,
    setFiltro,
    setIndex,
    proyectosVisibles,
    handlePrev,
    handleNext,
  };
};
