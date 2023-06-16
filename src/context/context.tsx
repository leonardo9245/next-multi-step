'use client';

import { PlanObj } from '@/interface/interfaces';
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
  planObj: { plan: 'Arcade', price: 9 },
  setCountFormPage: (value: number) => {},
  setPlan: (value: planType) => {},
  setPlanDurationOption: (value: planDurationType) => {},
  setPlanObj: (value: PlanObj) => {}
});

export function ContextProvider({ children }: ProviderProps) {
  const [countFormPage, setCountFormPage] = useState(2);
  const [plan, setPlan] = useState(planType.ARCADE);
  const [planDurationOption, setPlanDurationOption] = useState(
    planDurationType.MONTHLY
  );
  const [planObj, setPlanObj] = useState<PlanObj>({
    plan: 'Arcade',
    price: 9
  });

  return (
    <Context.Provider
      value={{
        countFormPage,
        setCountFormPage,
        plan,
        setPlan,
        planDurationOption,
        setPlanDurationOption,
        planObj,
        setPlanObj
      }}
    >
      {children}
    </Context.Provider>
  );
}
