import { summary } from '../data/profile';

export default function Summary() {
  return (
    <section className="section summary-section">
      <div className="container">
        <p className="section-label">About</p>
        <div className="accent-line" />
        <p className="summary-text">{summary}</p>
      </div>
    </section>
  );
}
