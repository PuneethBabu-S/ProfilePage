import { profile, summary, skills, experience, projects, education } from '../data/profile';
import { useInView } from '../hooks/useInView';

function BentoCard({ className = '', children, style }: { className?: string; children: React.ReactNode; style?: React.CSSProperties }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div ref={ref} className={`bn-card${inView ? ' bn-card--in' : ''} ${className}`} style={style}>
      {children}
    </div>
  );
}

export default function Bento() {
  return (
    <div className="bn">
      <div className="bn-grid">

        {/* Hero */}
        <BentoCard className="bn-hero">
          <div className="bn-hero-glow" />
          <p className="bn-hero-eyebrow">{profile.title}</p>
          <h1 className="bn-hero-name">{profile.name}</h1>
          <p className="bn-hero-tagline">{profile.tagline}</p>
          <div className="bn-hero-links">
            <a href={`mailto:${profile.email}`} className="bn-btn">Email</a>
            {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="bn-btn">GitHub</a>}
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="bn-btn">LinkedIn</a>}
          </div>
        </BentoCard>

        {/* Stat cards */}
        <BentoCard className="bn-stat bn-stat--years">
          <span className="bn-stat-num">5<span className="bn-stat-plus">+</span></span>
          <span className="bn-stat-label">Years Experience</span>
        </BentoCard>

        <BentoCard className="bn-stat bn-stat--micro">
          <span className="bn-stat-num">30<span className="bn-stat-plus">+</span></span>
          <span className="bn-stat-label">Microservices Built</span>
        </BentoCard>

        <BentoCard className="bn-stat bn-stat--awards">
          <span className="bn-stat-num">8</span>
          <span className="bn-stat-label">Impact Awards</span>
        </BentoCard>

        {/* Summary */}
        <BentoCard className="bn-summary">
          <p className="bn-section-tag">About</p>
          <p className="bn-summary-text">{summary}</p>
        </BentoCard>

        {/* Skills */}
        <BentoCard className="bn-skills">
          <p className="bn-section-tag">Skills</p>
          <div className="bn-skills-inner">
            {skills.map((g) => (
              <div key={g.category} className="bn-skill-group">
                <p className="bn-skill-cat">{g.category}</p>
                <div className="bn-skill-pills">
                  {g.items.map(item => <span key={item} className="bn-pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Experience */}
        <BentoCard className="bn-experience">
          <p className="bn-section-tag">Experience</p>
          <div className="bn-exp-list">
            {experience.map((exp, i) => (
              <div key={i} className="bn-exp-item">
                <div className="bn-exp-dot" />
                <div className="bn-exp-content">
                  <p className="bn-exp-company">{exp.company}</p>
                  {exp.client && <p className="bn-exp-client">↳ {exp.client}</p>}
                  <p className="bn-exp-role">{exp.role}</p>
                  <p className="bn-exp-period">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Location */}
        <BentoCard className="bn-location">
          <div className="bn-location-pin">📍</div>
          <p className="bn-location-city">{profile.location}</p>
          <p className="bn-location-sub">Available for remote</p>
        </BentoCard>

        {/* Projects */}
        {projects.map((p, i) => (
          <BentoCard key={i} className={`bn-project bn-project--${i}`}>
            <p className="bn-section-tag">Project 0{i + 1}</p>
            <h3 className="bn-project-name">{p.name}</h3>
            <div className="bn-project-tech">
              {p.tech.map(t => <span key={t} className="bn-pill bn-pill--sm">{t}</span>)}
            </div>
            <ul className="bn-project-highlights">
              {p.highlights.slice(0, 3).map((h, j) => <li key={j}>{h}</li>)}
            </ul>
            {(p.github || p.demo) && (
              <div className="bn-project-links">
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="bn-btn bn-btn--sm">GitHub ↗</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="bn-btn bn-btn--sm">Demo ↗</a>}
              </div>
            )}
          </BentoCard>
        ))}

        {/* Education */}
        <BentoCard className="bn-education">
          <p className="bn-section-tag">Education</p>
          <div className="bn-edu-list">
            {education.map((edu, i) => (
              <div key={i} className="bn-edu-item">
                <p className="bn-edu-inst">{edu.institution}</p>
                <p className="bn-edu-degree">{edu.degree}</p>
                <p className="bn-edu-period">{edu.period}</p>
              </div>
            ))}
          </div>
        </BentoCard>

      </div>
    </div>
  );
}
