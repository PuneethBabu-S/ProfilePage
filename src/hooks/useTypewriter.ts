import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed = 45, delay = 300) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    const start = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(timer);
      }, speed);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(start);
  }, [text, speed, delay]);

  return displayed;
}
