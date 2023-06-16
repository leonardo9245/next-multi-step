'use client';

import { IAddon } from '@/types/addon-type';
import { planDurationType } from '@/types/plan-duration-type';
import { PlanObj, planType } from '@/types/plan-type';
import { ReactNode, createContext, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext({
  countFormPage: 1,
  plan: planType.ARCADE,
  planDurationOption: planDurationType.MONTHLY,
  planObj: { plan: 'Arcade', price: 9 },
  addons: [{ name: '', price: 0 }],
  setCountFormPage: (value: number) => {},
  setPlan: (value: planType) => {},
  setPlanDurationOption: (value: planDurationType) => {},
  setPlanObj: (value: PlanObj) => {},
  setAddons: (value: IAddon[]) => {}
});

export function ContextProvider({ children }: ProviderProps) {
  const [countFormPage, setCountFormPage] = useState(4);
  const [plan, setPlan] = useState(planType.ARCADE);
  const [planDurationOption, setPlanDurationOption] = useState(
    planDurationType.MONTHLY
  );
  const [planObj, setPlanObj] = useState<PlanObj>({
    plan: 'Arcade',
    price: 9
  });

  const [addons, setAddons] = useState<IAddon[]>([{ name: '', price: 0 }]);

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
        setPlanObj,
        addons,
        setAddons
      }}
    >
      {children}
    </Context.Provider>
  );
}
