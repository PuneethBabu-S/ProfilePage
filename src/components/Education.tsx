import { education } from '../data/profile';

export default function Education() {
  return (
    <section className="section education-section">
      <div className="container">
        <p className="section-label">Education</p>
        <div className="accent-line" />
        <div className="education-list">
          {education.map((edu, i) => (
            <div key={i} className="edu-item card">
              <div className="edu-header">
                <div>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-degree">{edu.degree}</p>
                </div>
                <span className="edu-period">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
