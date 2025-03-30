// Importaciones de certificados
import certificadoMentors from '../../assets/Img/certificadoMentors.png';
// Importaciones de estilos
import './sobremi.scss';

// Componente de Sobre Mi
export const SobreMi = () => {
  return (
    <section className="sobre-mi">
      <h2>Sobre Mi</h2>
      <div className="contenido">
        <p>
          Soy un programador web con una sólida base en desarrollo front-end,
          apasionado por crear soluciones eficientes y atractivas para la web.
          Enfocado en aprender y aplicar tecnologías modernas, en busca de
          contribuir en proyectos innovadores, mientras desarrollo mis
          habilidades en un entorno colaborativo y de constante aprendizaje.
        </p>
        <div className="recursos">
          <h3>Certificaciones</h3>
          <div className="grid">
            <div>
              <button
                type="button"
                onClick={() => window.open(certificadoMentors)}
              >
                <img src={certificadoMentors} alt="certificado de Mentors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
