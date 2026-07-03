import { experience } from '../data/profile';

export default function Experience() {
  return (
    <section className="section experience-section">
      <div className="container">
        <p className="section-label">Experience</p>
        <div className="accent-line" />
        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item card">
              <div className="exp-header">
                <div>
                  <p className="exp-company">{exp.company}</p>
                  {exp.client && (
                    <p className="exp-client">Client: {exp.client}</p>
                  )}
                  <p className="exp-role">{exp.role}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
