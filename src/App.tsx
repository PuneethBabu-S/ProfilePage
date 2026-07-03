import { useState, useEffect } from 'react';
import './styles/themes.css';
import './App.css';

import StyleSwitcher from './components/ThemeToggle';
import Editorial from './layouts/Editorial';
import Terminal from './layouts/Terminal';
import Bento from './layouts/Bento';

export type Style = 'editorial' | 'terminal' | 'bento';

const STORAGE_KEY = 'portfolio-style';

function getInitialStyle(): Style {
  const stored = localStorage.getItem(STORAGE_KEY) as Style | null;
  if (stored && ['editorial', 'terminal', 'bento'].includes(stored)) return stored;
  return 'editorial';
}

export default function App() {
  const [style, setStyle] = useState<Style>(getInitialStyle);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, style);
  }, [style]);

  return (
    <>
      <StyleSwitcher current={style} onChange={setStyle} />
      {style === 'editorial' && <Editorial />}
      {style === 'terminal'  && <Terminal  />}
      {style === 'bento'     && <Bento     />}
    </>
  );
}
