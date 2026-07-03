import type { Style } from '../App';

const STYLES: { id: Style; label: string; desc: string }[] = [
  { id: 'editorial', label: 'Editorial', desc: 'Clean & typographic' },
  { id: 'terminal',  label: 'Terminal',  desc: 'Hacker aesthetic'   },
  { id: 'bento',     label: 'Bento',     desc: 'Grid & gradient'    },
];

interface Props {
  current: Style;
  onChange: (s: Style) => void;
}

export default function StyleSwitcher({ current, onChange }: Props) {
  return (
    <nav className="style-bar" aria-label="Switch design style">
      {STYLES.map((s) => (
        <button
          key={s.id}
          className={`style-btn style-btn--${s.id}${current === s.id ? ' active' : ''}`}
          onClick={() => onChange(s.id)}
          title={s.desc}
          aria-pressed={current === s.id}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}
