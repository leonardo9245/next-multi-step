'use client';
import { useEffect, useState } from 'react';
import ConfettiGenerator from 'confetti-js';
import { useContextForm } from '@/hooks/useContextForm';

export interface IConfettiProps {}

export function Confetti(props: IConfettiProps) {
  const { countFormPage } = useContextForm();

  const createConfetti = countFormPage === 5;

  useEffect(() => {
    const confettiSettings = { target: 'main' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, [createConfetti]);

  return (
    <div
      className={`${
        createConfetti
          ? 'block absolute top-0 left-0 bottom-0 right-0'
          : 'hidden'
      }  `}
    >
      <canvas id="main" />
    </div>
  );
}
