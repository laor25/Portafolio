import './Contact.css'

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <div className="section-label">
                    <span className="section-num">04.</span> Contacto
                </div>

                <div className="contact-inner">
                    <div className="contact-left">
                        <h2 className="contact-heading">
                            ¿Necesitas un <span className="contact-accent">desarrollo?</span>
                        </h2>
                        <p className="contact-desc">
                            ¿Tienes una idea o proyecto en mente? Puedo ayudarte a construirlo.
                            Desarrollo aplicaciones web, móviles y de escritorio a medida.
                            Escríbeme y conversamos sobre tu proyecto en mente.
                        </p>
                        <a href="mailto:luis-olv@outlook.es" className="contact-mail-btn">
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M22 7l-10 7L2 7" />
                            </svg>
                            luis-olv@outlook.es
                        </a>
                    </div>

                    <div className="contact-cards">
                        <a href="mailto:luis-olv@outlook.es" className="contact-card">
                            <span className="contact-card-icon">📧</span>
                            <div>
                                <span className="contact-card-title">Email</span>
                                <span className="contact-card-value">luis-olv@outlook.es</span>
                            </div>
                        </a>
                        <a href="tel:+593979787133" className="contact-card">
                            <span className="contact-card-icon">📱</span>
                            <div>
                                <span className="contact-card-title">Teléfono</span>
                                <span className="contact-card-value">0979 787 133</span>
                            </div>
                        </a>
                        <div className="contact-card">
                            <span className="contact-card-icon">📍</span>
                            <div>
                                <span className="contact-card-title">Ubicación</span>
                                <span className="contact-card-value">Guayaquil, Ecuador</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact