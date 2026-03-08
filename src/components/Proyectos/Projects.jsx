import { useState } from 'react'
import './Projects.css'

const projects = [
    {
        id: 1,
        title: 'Lista de Tareas Académicas',
        subtitle: 'App Móvil Android',
        description:
            'Aplicación móvil Android para gestión de tareas académicas. Implementa arquitectura MVVM, Shell navigation, persistencia con SQLite y exportación de archivos. Incluye modo oscuro.',
        tech: ['.NET MAUI', 'C#', 'SQLite', 'MVVM', 'Android'],
        type: 'Mobile App',
        color: '#6366f1',
        icon: '📱',
        live: 'https://drive.google.com/uc?export=download&id=1SRVzMMoiQEnMybg-hDQe2p1L9nbKLMcl',
        repo: 'https://github.com/laor25/TareasAcademicas.git',
        featured: true,
        liveLabel: 'Descargar APK',
        liveIcon: 'download',
        devs: ['Luis Olvera'],
    },
    {
        id: 2,
        title: 'Gelatina Jamaica',
        subtitle: 'Página Web — Proyecto Institucional',
        description:
            'Sitio web para una marca de gelatina de Jamaica. Desarrollado como proyecto del Instituto Tecnológico Superior Liceo Cristiano. Incluye galería de fotos, catálogo de productos y diseño responsive.',
        tech: ['Python', 'Django', 'Railway', 'MySQL', 'REST','Angular','TypeScript','Bootstrap'],
        type: 'Web App',
        color: '#10b981',
        icon: '🍹',
        live: 'https://amaikaweb-developer.up.railway.app/galeriasFotos',
        repo: 'https://github.com/Ealiaga83/amaika_web.git',
        featured: false,
        liveLabel: 'Ver Página',
        liveIcon: 'demo',
        devs: ['Luis Olvera', 'Eddy Aliaga'],
    },
    {
        id: 3,
        title: 'Dashboard Angular',
        subtitle: 'Frontend SPA',
        description:
            'Single Page Application con Angular y TypeScript. Panel de administración con gráficas dinámicas, tablas paginadas, autenticación y consumo de APIs REST.',
        tech: ['Angular', 'TypeScript', 'SCSS', 'RxJS', 'Angular Material'],
        type: 'Frontend',
        color: '#f59e0b',
        icon: '🖥️',
        live: '#',
        repo: '#',
        featured: false,
        liveLabel: 'Demo',
        liveIcon: 'demo',
        devs: ['Luis Olvera'],
    },
]

function Projects() {
    const [hovered, setHovered] = useState(null)

    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                <div className="section-label">
                    <span className="section-num">03.</span> Proyectos
                </div>

                <div className="projects-top">
                    <h2 className="projects-heading">
                        Proyectos <span className="projects-accent">desarrollados</span>
                    </h2>
                    <p className="projects-sub">Una selección de mis proyectos más recientes.</p>
                </div>

                <div className="projects-list">
                    {projects.map((p, i) => (
                        <div
                            key={p.id}
                            className={`project-card ${p.featured ? 'featured' : ''} ${hovered === p.id ? 'active' : ''}`}
                            onMouseEnter={() => setHovered(p.id)}
                            onMouseLeave={() => setHovered(null)}
                            style={{ '--project-color': p.color }}
                        >
                            <div className="project-card-glow" />

                            <div className="project-left">
                                <span className="project-num">0{i + 1}</span>
                                <div className="project-icon">{p.icon}</div>
                            </div>

                            <div className="project-body">
                                <div className="project-meta">
                                    <span className="project-type">{p.type}</span>
                                    {p.featured && <span className="project-badge">Destacado</span>}
                                </div>
                                <h3 className="project-title">{p.title}</h3>
                                <p className="project-subtitle">{p.subtitle}</p>
                                <p className="project-desc">{p.description}</p>
                                <div className="project-tech">
                                    {p.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                {p.devs && (
                                    <div className="project-devs">
                                        <span className="project-devs-label">Desarrollado por</span>
                                        <div className="project-devs-list">
                                            {p.devs.map((dev, i) => (
                                                <span key={i} className="project-dev-badge">
                                                    <span className="project-dev-dot" style={{ background: i === 0 ? '#6366f1' : '#10b981' }} />
                                                    {dev}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="project-actions">
                                <a href={p.live} target="_blank" rel="noreferrer" className="action-btn">
                                    {p.liveIcon === 'download' ? (
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    )}
                                    {p.liveLabel}
                                </a>
                                <a href={p.repo} target="_blank" rel="noreferrer" className="action-btn">
                                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.57.1.78-.25.78-.55v-2.16c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.97 10.97 0 012.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-footer">
                    <a href="https://github.com/Ealiaga83/amaika_web.git" target="_blank" rel="noreferrer" className="more-link">
                        Ver más en GitHub →
                    </a>
                </div>

                <div className="dev-section">
                    <h3 className="dev-title">
                        <span className="dev-title-line" />
                        Equipo de desarrollo - Página Web — Proyecto Institucional
                        <span className="dev-title-line" />
                    </h3>
                    <div className="dev-grid">
                        <div className="dev-card">
                            <div className="dev-avatar">LO</div>
                            <div className="dev-info">
                                <span className="dev-name">Luis Olvera</span>
                                <span className="dev-role">Full Stack Developer</span>
                                <div className="dev-tags">
                                    <span>.NET</span>
                                    <span>React</span>
                                    <span>MAUI</span>
                                </div>
                            </div>
                            <a href="https://github.com/laor25" target="_blank" rel="noreferrer" className="dev-github">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.57.1.78-.25.78-.55v-2.16c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.97 10.97 0 012.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                                GitHub
                            </a>
                        </div>

                        <div className="dev-card">
                            <div className="dev-avatar dev-avatar-2">EA</div>
                            <div className="dev-info">
                                <span className="dev-name">Eddy Aliaga</span>
                                <span className="dev-role">Full Stack Developer</span>
                                <div className="dev-tags">
                                    <span>Angular</span>
                                    <span>Python</span>
                                    <span>SQL</span>
                                </div>
                            </div>
                            <a href="https://github.com/Ealiaga83" target="_blank" rel="noreferrer" className="dev-github">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.57.1.78-.25.78-.55v-2.16c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.97 10.97 0 012.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects