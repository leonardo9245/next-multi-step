'use client';
import { useContextForm } from '@/hooks/useContextForm';
import React from 'react';

export interface IButtonsProps {
  name: string;
  isValid: boolean;
}

export function Buttons(props: IButtonsProps) {
  const { countFormPage, setCountFormPage } = useContextForm();

  const handleAddCount = (valid: boolean) => {
    if (!valid) return;
    let count = countFormPage;

    count = count + 1;

    if (count <= 5) setCountFormPage(count);
  };

  const handleDecreaseCount = () => {
    let count = countFormPage;

    count = count - 1;

    if (count >= 1) setCountFormPage(count);
  };

  return (
    <div className="absolute flex bottom-0 left-0 justify-between items-center w-full bg-white py-4 px-4 mt-4 md:py-0 md:right-10 md:bottom-6 md:w-[50%] md:left-[364px] md:px-0 ">
      <button
        onClick={handleDecreaseCount}
        className={`text-lg font-bold text-gray-400 ${
          countFormPage > 1 ? 'opacity-100' : 'opacity-0'
        } hover:text-primaryColor duration-300`}
      >
        Go Back
      </button>

      <button
        id="next"
        type="submit"
        onClick={() => handleAddCount(props.isValid)}
        className={`text-lg font-bold text-white  px-4 py-3 rounded-md ${
          props.name === ''
            ? 'bg-primaryColor'
            : 'bg-purPlishBlue hover:bg-secondaryHoverColor'
        } hover:bg-primaryHoverColor duration-300`}
      >
        {props.name === '' ? 'Next Step' : props.name}
      </button>
    </div>
  );
}
