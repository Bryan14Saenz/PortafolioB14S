import Cuadros from '../components/Cuadros/Cuadros';
import Inicio from '../components/Inicio/Inicio';
import NavBar from '../components/NavBar/NavBar';

export default function InicioPage() {
  return (
    <div>
      <NavBar />
      <Inicio />
      <Cuadros />
    </div>
  );
}
