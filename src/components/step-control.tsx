'use client';
import { useContextForm } from '@/hooks/useContextForm';
import { FirstStep } from './first-step';
import { SecondStep } from './second-step';
import { StepThree } from './step-Three';
import { StepFour } from './step-four';

export function StepControl() {
  const { countFormPage } = useContextForm();

  const handleSteps = () => {
    if (countFormPage === 1) return <FirstStep />;
    if (countFormPage === 2) return <SecondStep />;
    if (countFormPage === 3) return <StepThree />;
    if (countFormPage === 4) return <StepFour />;
  };

  return <>{handleSteps()}</>;
}
