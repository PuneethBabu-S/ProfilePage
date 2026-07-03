import { profile, summary, skills, experience, projects, education } from '../data/profile';
import { useInView } from '../hooks/useInView';

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal${inView ? ' visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default function Editorial() {
  return (
    <div className="ed">
      {/* Hero */}
      <section className="ed-hero">
        <div className="ed-hero-noise" />
        <div className="ed-hero-inner">
          <span className="ed-eyebrow">{profile.title}</span>
          <h1 className="ed-name">{profile.name}</h1>
          <div className="ed-hero-bottom">
            <p className="ed-tagline">{profile.tagline}</p>
            <div className="ed-hero-links">
              <a href={`mailto:${profile.email}`} className="ed-link">Email ↗</a>
              {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="ed-link">GitHub ↗</a>}
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="ed-link">LinkedIn ↗</a>}
              <span className="ed-location">📍 {profile.location}</span>
            </div>
          </div>
        </div>
        <div className="ed-scroll-hint">scroll</div>
      </section>

      {/* Summary */}
      <section className="ed-section">
        <div className="ed-container">
          <Reveal>
            <div className="ed-section-row">
              <span className="ed-label">01 / About</span>
              <p className="ed-summary">{summary}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="ed-section ed-section--alt">
        <div className="ed-container">
          <Reveal>
            <span className="ed-label">02 / Skills</span>
          </Reveal>
          <div className="ed-skills-grid">
            {skills.map((g, i) => (
              <Reveal key={g.category} delay={i * 60}>
                <div className="ed-skill-block">
                  <p className="ed-skill-cat">{g.category}</p>
                  <div className="ed-skill-pills">
                    {g.items.map(item => <span key={item} className="ed-pill">{item}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="ed-section">
        <div className="ed-container">
          <Reveal><span className="ed-label">03 / Experience</span></Reveal>
          <div className="ed-exp-list">
            {experience.map((exp, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="ed-exp-item">
                  <div className="ed-exp-left">
                    <p className="ed-exp-company">{exp.company}</p>
                    {exp.client && <p className="ed-exp-client">↳ {exp.client}</p>}
                  </div>
                  <div className="ed-exp-right">
                    <p className="ed-exp-role">{exp.role}</p>
                    <p className="ed-exp-period">{exp.period}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="ed-section ed-section--alt">
        <div className="ed-container">
          <Reveal><span className="ed-label">04 / Projects</span></Reveal>
          <div className="ed-projects">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="ed-project">
                  <div className="ed-project-head">
                    <h3 className="ed-project-name">{p.name}</h3>
                    <div className="ed-project-tech">
                      {p.tech.map(t => <span key={t} className="ed-pill">{t}</span>)}
                    </div>
                  </div>
                  <ul className="ed-project-list">
                    {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                  {(p.github || p.demo) && (
                    <div className="ed-project-links">
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="ed-link">GitHub ↗</a>}
                      {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="ed-link">Demo ↗</a>}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="ed-section">
        <div className="ed-container">
          <Reveal><span className="ed-label">05 / Education</span></Reveal>
          <div className="ed-edu-list">
            {education.map((edu, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="ed-edu-item">
                  <p className="ed-edu-inst">{edu.institution}</p>
                  <p className="ed-edu-degree">{edu.degree}</p>
                  <p className="ed-edu-period">{edu.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
