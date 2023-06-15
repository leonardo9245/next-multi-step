'use client';
import { planType } from '@/types/plan-type';
import { ReactNode, createContext, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext({
  countFormPage: 2,
  plan: planType.ARCADE,
  setCountFormPage: (value: number) => {},
  setPlan: (value: planType) => {}
});

export function ContextProvider({ children }: ProviderProps) {
  const [countFormPage, setCountFormPage] = useState(2);
  const [plan, setPlan] = useState(planType.ARCADE);

  return (
    <Context.Provider
      value={{ countFormPage, setCountFormPage, plan, setPlan }}
    >
      {children}
    </Context.Provider>
  );
}
