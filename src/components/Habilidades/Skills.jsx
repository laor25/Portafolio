import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'HTML / CSS / JS', level: 85 },
      { name: 'Angular + TypeScript', level: 75 },
      { name: 'React', level: 70 },
      { name: 'Node.js / Express', level: 65 },
    ],
  },
  {
    category: 'Backend & Desktop',
    icon: '⚙️',
    skills: [
      { name: 'C# / .NET', level: 75 },
      { name: 'ASP.NET REST APIs', level: 80 },
      { name: 'Python / Django', level: 90 },
      { name: 'Windows Forms', level: 80 },
    ],
  },
  {
    category: 'Mobile & DBs',
    icon: '📱',
    skills: [
      { name: '.NET MAUI (Android)', level: 70 },
      { name: 'SQL Server', level: 75 },
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    category: 'Sistemas & Redes',
    icon: '🌐',
    skills: [
      { name: 'VirtualBox / Linux', level: 72 },
      { name: 'Redes virtuales', level: 68 },
      { name: 'Git', level: 89 },
      { name: 'Metodologías ágiles', level: 70 },
    ],
  },
]

const soft = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Proactividad',
  'Aprendizaje constante',
  'Adaptabilidad',
  'Resolución de problemas',
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="section-label">
          <span className="section-num">02.</span> Habilidades
        </div>

        <h2 className="skills-heading">
          Conocimientos <span className="skills-accent">técnicos</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.category} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="skill-bars">
                {group.skills.map(s => (
                  <div key={s.name} className="bar-item">
                    <div className="bar-top">
                      <span>{s.name}</span>
                      <span className="bar-pct">{s.level}%</span>
                    </div>
                    <div className="bar-track">
                      <div
                        className="bar-fill"
                        style={{ '--w': `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-section">
          <h3 className="soft-title">Habilidades blandas</h3>
          <div className="soft-grid">
            {soft.map(s => (
              <div key={s} className="soft-chip">
                <span className="soft-dot" />
                {s}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills