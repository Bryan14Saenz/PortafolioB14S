// Importación de componentes
import { Cuadros, Inicio, NavBar } from '../components/';

// Exportación y Renderización de la página
export default function InicioPage() {
  return (
    <>
      <NavBar />
      <Inicio />
      <Cuadros />
    </>
  );
}
