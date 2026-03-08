import './About.css'
import foto from '../../assets/laor.jpeg'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="section-label">
          <span className="section-num">01.</span> Sobre mí
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-heading">
              Desarrollador apasionado<br />
              <span className="about-accent">por construir cosas.</span>
            </h2>
            <p>
              Soy estudiante de 5to semestre de Desarrollo de Software en el
              <strong> Instituto Tecnológico Superior Liceo Cristiano</strong>, Guayaquil.
              Me especializo en construir aplicaciones completas desde el frontend hasta la base de datos.
            </p>
            <p>
              Trabajo con tecnologías como <strong>C# / .NET</strong>, <strong>Python con Django</strong>,
              <strong> Angular</strong>, <strong>React</strong> y apps móviles con <strong>.NET MAUI</strong>.
            </p>
            <p>
              Si tienes un proyecto en mente, puedo ayudarte a construirlo.
              Desarrollo aplicaciones web, móviles y de escritorio a medida
              con tecnologías modernas.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">5to</span>
                <span className="stat-label">Semestre</span>
              </div>
              <div className="stat">
                <span className="stat-num">6+</span>
                <span className="stat-label">Tecnologías dominadas</span>
              </div>
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Proyectos construidos</span>
              </div>
            </div>
          </div>

          <div className="about-card">
            {/* Foto */}
            <div className="about-card-top">
              <div className="about-avatar-ring" />
              <img src={foto} alt="Luis Olvera" className="about-avatar-img" />
              <div className="about-status-badge">
                <span className="about-status-dot" />
                Disponible
              </div>
            </div>

            {/* Info con iconos */}
            <div className="about-info">
              <div className="info-row">
                <div className="info-icon-wrap">
                  <span>👤</span>
                </div>
                <div className="info-content">
                  <span className="info-label">Nombre</span>
                  <span className="info-value">Luis Antonio Olvera</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-wrap">
                  <span>📍</span>
                </div>
                <div className="info-content">
                  <span className="info-label">Ubicación</span>
                  <span className="info-value">Guayaquil, Ecuador</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-wrap">
                  <span>📧</span>
                </div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <a href="mailto:luis-olv@outlook.es" className="info-link">luis-olv@outlook.es</a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-wrap">
                  <span>📱</span>
                </div>
                <div className="info-content">
                  <span className="info-label">Teléfono</span>
                  <span className="info-value">0979 787 133</span>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-wrap">
                  <span>🎓</span>
                </div>
                <div className="info-content">
                  <span className="info-label">Instituto</span>
                  <span className="info-value">Liceo Cristiano</span>
                </div>
              </div>
            </div>

            {/* botón CV */}
            <div className="about-card-footer">
              <a href="/Dev_CV.pdf" download className="about-cv-btn">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About