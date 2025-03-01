import certificadoMentors from '../../assets/Img/certificadoMentors.png';
import './sobremi.scss';

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <h2>Sobre Mi</h2>
      <div className="contenido">
        <p>
          ¡Hola! Soy un programador web con una sólida base en desarrollo
          frontend y próximamente en backend, apasionado por crear soluciones
          eficientes y atractivas para la web. Enfocado en aprender y aplicar
          tecnologías modernas, busco contribuir a proyectos innovadores,
          mientras desarrollo mis habilidades en un entorno colaborativo y de
          constante aprendizaje.
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
}
