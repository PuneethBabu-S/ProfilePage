import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="hero-location">
              <span className="location-dot">▸</span>
              {profile.location}
            </p>
          </div>
          <div className="hero-links">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="hero-link">
                Email
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-link">
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
