'use client';
import { useContextForm } from '@/hooks/useContextForm';
import React from 'react';

export interface IFormPartProps {}

export function StepPart(props: IFormPartProps) {
  const { countFormPage } = useContextForm();

  const stepsStyle =
    'border-stepsBgColor w-10 h-10 transition-colors font-bold text-lg border-2 rounded-full px-[13px] py-1 ';

  const stepsContainer = 'md:flex gap-4 items-center';
  const stepsInfo = 'hidden md:block text-white uppercase';

  return (
    <div className="md:bg-bg-image-desktop md:px-8 md:py-8 md:min-h-[600px] md:min-w-[300px] bg-no-repeat bg-contain">
      <div className="flex gap-4 md:flex-col md:gap-8 ">
        <div className={stepsContainer}>
          <div
            className={` ${stepsStyle} ${
              countFormPage === 1
                ? 'bg-stepsBgColor  text-primaryColor'
                : 'text-white'
            }`}
          >
            1
          </div>
          <div className={stepsInfo}>
            <p className="text-gray-400">step 1</p>
            <strong>Your info</strong>
          </div>
        </div>

        <div className={stepsContainer}>
          <div
            className={`  ${stepsStyle} ${
              countFormPage === 2
                ? 'bg-stepsBgColor  text-primaryColor'
                : 'text-white '
            }`}
          >
            2
          </div>
          <div className={stepsInfo}>
            <p className="text-gray-400">step 2</p>
            <p>Select plan</p>
          </div>
        </div>

        <div className={stepsContainer}>
          <div
            className={`${stepsStyle} ${
              countFormPage === 3
                ? 'bg-stepsBgColor  text-primaryColor'
                : 'text-white'
            }`}
          >
            3
          </div>
          <div className={stepsInfo}>
            <p className="text-gray-400">step 3</p>
            <p>Add-ons</p>
          </div>
        </div>

        <div className={stepsContainer}>
          <div
            className={`${stepsStyle} ${
              countFormPage >= 4
                ? 'bg-stepsBgColor  text-primaryColor'
                : 'text-white'
            }`}
          >
            4
          </div>
          <div className={stepsInfo}>
            <p className="text-gray-400">step 4</p>
            <p>Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
