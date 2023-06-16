'use client';
import { useContextForm } from '@/hooks/useContextForm';
import React from 'react';

export interface IFormPartProps {}

export function StepPart(props: IFormPartProps) {
  const { countFormPage } = useContextForm();

  const partsStyle =
    'transition-colors font-bold text-lg border-2 rounded-full px-4 py-2';

  return (
    <div className="flex gap-4">
      <div
        className={`${partsStyle} ${
          countFormPage === 1 ? 'bg-white  text-primaryColor' : 'text-white'
        }`}
      >
        1
      </div>
      <div
        className={`${partsStyle} ${
          countFormPage === 2 ? 'bg-white text-primaryColor' : 'text-white '
        }`}
      >
        2
      </div>
      <div
        className={`${partsStyle} ${
          countFormPage === 3 ? 'bg-white text-primaryColor' : 'text-white'
        }`}
      >
        3
      </div>
      <div
        className={`${partsStyle} ${
          countFormPage === 4 ? 'bg-white text-primaryColor' : 'text-white'
        }`}
      >
        4
      </div>
    </div>
  );
}
