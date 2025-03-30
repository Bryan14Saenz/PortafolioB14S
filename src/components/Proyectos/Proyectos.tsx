// Importaciones de Iconos
import { SiNetlify } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
// Importaciones de Hook
import { useProyectos } from '../../Hook';
// Importaciones de estilos
import './proyectos.scss';

// Componente de Proyectos
export const Proyectos = () => {
  const {
    // Llamada a Hook
    tecnologías,
    filtro,
    setFiltro,
    setIndex,
    proyectosVisibles,
    handlePrev,
    handleNext,
  } = useProyectos();

  return (
    <section className="proyectos">
      <h2>Proyectos</h2>

      <div className="filtros">
        {tecnologías.map((tecnologías) => (
          <button
            key={tecnologías}
            className={filtro === tecnologías ? 'activo' : ''}
            onClick={() => {
              setFiltro(tecnologías);
              setIndex(0);
            }}
          >
            {tecnologías}
          </button>
        ))}
      </div>

      <div className="carrusel">
        <button className="prev" onClick={handlePrev}>
          &#8249;
        </button>

        <div className="grid">
          {proyectosVisibles.map((proyecto) => (
            <div className="card" key={proyecto.id}>
              <div className="img">
                <img src={proyecto.img} alt={proyecto.nombre} />
              </div>
              <h2 className="titulo">{proyecto.nombre}</h2>
              <div className="tecnologías">
                {proyecto.tecnologías.map((tecnologia) => (
                  <span key={proyecto.id}>{tecnologia}</span>
                ))}
              </div>
              <div className="enlaces">
                <button>
                  {proyecto.enlaces.map((enlace) => (
                    <a
                      key={proyecto.id}
                      href={enlace.github || enlace.netlify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="icon" title="GitHub" />
                    </a>
                  ))}
                </button>
                <button>
                  {proyecto.enlaces.map((enlace) => (
                    <a
                      key={proyecto.id}
                      href={enlace.netlify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiNetlify className="icon" title="Netlify" />
                    </a>
                  ))}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};
