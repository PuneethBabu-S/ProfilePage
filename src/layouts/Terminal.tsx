import { profile, summary, skills, experience, projects, education } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import { useState, useEffect } from 'react';

function Prompt({ cmd, children, delay = 0 }: { cmd: string; children?: React.ReactNode; delay?: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  if (!show) return null;
  return (
    <div className="tm-block">
      <div className="tm-cmd"><span className="tm-ps">visitor@portfolio:~$</span> <span className="tm-cmd-text">{cmd}</span></div>
      {children && <div className="tm-output">{children}</div>}
    </div>
  );
}

export default function Terminal() {
  const name = useTypewriter(profile.name, 70, 800);

  return (
    <div className="tm">
      <div className="tm-scanlines" />

      {/* Window chrome */}
      <div className="tm-window">
        <div className="tm-titlebar">
          <span className="tm-dot tm-dot--red" />
          <span className="tm-dot tm-dot--yellow" />
          <span className="tm-dot tm-dot--green" />
          <span className="tm-title">portfolio — zsh — 120×40</span>
        </div>

        <div className="tm-body">
          {/* Intro */}
          <div className="tm-banner">
            <pre className="tm-ascii">{`
 ____  ___  ____ ______ ______ ____  __     ____  ____
|    \\|   \\|    |      |      |    \\|  |   |    ||    \\
|  o  )    |  | |      |      |  o  )  |    |  | |  D  )
|   _/|  O |  | |_|  |_|_|  |_|   _/|  |___|  | |    /
|  |  |     |  |   |  |   |  |  |  |     |  | |    \\
|  |  |     |  |   |  |   |  |  |  |     |  | |  .  \\
|__|  |_____|____|  |__|  |__|__|  |_____|____||__|\\__|
`}</pre>
          </div>

          <Prompt cmd="whoami" delay={200}>
            <p className="tm-name">{name}<span className="tm-cursor">█</span></p>
            <p className="tm-line"><span className="tm-key">title:</span> {profile.title}</p>
            <p className="tm-line"><span className="tm-key">location:</span> {profile.location}</p>
            <p className="tm-line"><span className="tm-key">email:</span> {profile.email}</p>
            {profile.github && <p className="tm-line"><span className="tm-key">github:</span> {profile.github}</p>}
          </Prompt>

          <Prompt cmd="cat about.txt" delay={1800}>
            <p className="tm-para">{summary}</p>
          </Prompt>

          <Prompt cmd="ls -la skills/" delay={3000}>
            <div className="tm-ls">
              {skills.map((g) => (
                <div key={g.category} className="tm-ls-group">
                  <span className="tm-ls-cat">drwxr-xr-x  {g.category.padEnd(32)}</span>
                  <div className="tm-ls-items">
                    {g.items.map(item => <span key={item} className="tm-ls-item">├── {item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </Prompt>

          <Prompt cmd="git log --oneline experience" delay={4500}>
            {experience.map((exp, i) => (
              <div key={i} className="tm-git-log">
                <span className="tm-hash">{Math.random().toString(16).slice(2, 9)}</span>
                <span className="tm-git-msg">
                  [{exp.period}] {exp.role} @ {exp.company}
                  {exp.client && ` (client: ${exp.client})`}
                </span>
              </div>
            ))}
          </Prompt>

          <Prompt cmd="find ./projects -type f -name '*.md'" delay={6000}>
            {projects.map((p, i) => (
              <div key={i} className="tm-project">
                <p className="tm-project-path">./projects/{p.name.toLowerCase().replace(/\s+/g, '-')}/README.md</p>
                <div className="tm-project-body">
                  <p className="tm-project-tech"># stack: {p.tech.join(' · ')}</p>
                  {p.highlights.map((h, j) => (
                    <p key={j} className="tm-project-hi">- {h}</p>
                  ))}
                </div>
              </div>
            ))}
          </Prompt>

          <Prompt cmd="cat education.json" delay={8000}>
            <pre className="tm-json">{JSON.stringify(
              education.map(e => ({ institution: e.institution, degree: e.degree, period: e.period })),
              null, 2
            )}</pre>
          </Prompt>

          <Prompt cmd="" delay={9500}>
            <span className="tm-cursor">█</span>
          </Prompt>
        </div>
      </div>
    </div>
  );
}
