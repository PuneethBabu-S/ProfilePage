import { skills } from '../data/profile';

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <div className="accent-line" />
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group card">
              <p className="skill-category">{group.category}</p>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
