'use client';
import { useContextForm } from '@/hooks/useContextForm';
import React from 'react';

export interface IButtonsProps {}

export function Buttons(props: IButtonsProps) {
  const { countFormPage, setCountFormPage } = useContextForm();

  const handleAddCount = () => {
    let count = countFormPage;

    count = count + 1;

    if (count <= 4) setCountFormPage(count);
  };

  const handleDecreaseCount = () => {
    let count = countFormPage;

    count = count - 1;

    if (count >= 1) setCountFormPage(count);
  };

  const buttonStyle = 'text-lg font-bold';

  return (
    <div className="absolute flex bottom-0 justify-between items-center min-w-full bg-white py-4 px-4 mt-4">
      <button
        onClick={handleDecreaseCount}
        className={`${buttonStyle} text-gray-400 ${
          countFormPage > 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Go Back
      </button>

      <button
        onClick={handleAddCount}
        className={`${buttonStyle} text-white bg-primaryColor px-4 py-3 rounded-md`}
      >
        Next Step
      </button>
    </div>
  );
}
