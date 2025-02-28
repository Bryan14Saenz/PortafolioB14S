import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import InicioPage from './pages/InicioPage';

const HabilidadesPage = lazy(() => import('./pages/HabilidadesPage'));
const ProyectosPage = lazy(() => import('./pages/ProyectosPage'));
const SobreMiPage = lazy(() => import('./pages/SobreMiPage'));
const ContactoPage = lazy(() => import('./pages/ContactoPage'));
import './style/main.scss';

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

export default App;
