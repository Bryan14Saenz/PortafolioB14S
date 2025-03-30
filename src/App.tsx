// Importación de react y dependencias
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importación de rutas
import InicioPage from './pages/InicioPage';

// Importación de rutas cargadas con lazy
const HabilidadesPage = lazy(() => import('./pages/HabilidadesPage'));
const ProyectosPage = lazy(() => import('./pages/ProyectosPage'));
const SobreMiPage = lazy(() => import('./pages/SobreMiPage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));

// Importación de estilos
import './style/main.scss';

// Función principal
function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/habilidades" element={<HabilidadesPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/sobreMi" element={<SobreMiPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </Suspense>
  );
}

// Exportación de la App
export default App;
