// src/hooks/useCountdown.ts
'use client';
import { useState, useEffect } from 'react';

interface TimeLeft { h: number; m: number; s: number; }

export function useCountdown(durationSeconds: number): TimeLeft {
  const [end] = useState(() => Date.now() + durationSeconds * 1000);
  const [time, setTime] = useState<TimeLeft>({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    function calc() {
      const d = Math.max(0, end - Date.now());
      setTime({
        h: Math.floor(d / 3600000),
        m: Math.floor((d % 3600000) / 60000),
        s: Math.floor((d % 60000) / 1000),
      });
    }
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [end]);

  return time;
}

export function pad(n: number) {
  return String(n).padStart(2, '0');
}
