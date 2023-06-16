'use client';
import { planDurationType } from '@/types/plan-duration-type';
import { planType } from '@/types/plan-type';
import { ReactNode, createContext, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext({
  countFormPage: 2,
  plan: planType.ARCADE,
  planDurationOption: planDurationType.MONTHLY,
  setCountFormPage: (value: number) => {},
  setPlan: (value: planType) => {},
  setPlanDurationOption: (value: planDurationType) => {}
});

export function ContextProvider({ children }: ProviderProps) {
  const [countFormPage, setCountFormPage] = useState(2);
  const [plan, setPlan] = useState(planType.ARCADE);
  const [planDurationOption, setPlanDurationOption] = useState(
    planDurationType.MONTHLY
  );

  return (
    <Context.Provider
      value={{
        countFormPage,
        setCountFormPage,
        plan,
        setPlan,
        planDurationOption,
        setPlanDurationOption
      }}
    >
      {children}
    </Context.Provider>
  );
}
