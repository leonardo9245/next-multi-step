'use client';
import { ReactNode, createContext, useState } from 'react';

interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext({
  countFormPage: 1,
  setCountFormPage: (value: number) => {}
});

export function ContextProvider({ children }: ProviderProps) {
  const [countFormPage, setCountFormPage] = useState(1);

  return (
    <Context.Provider value={{ countFormPage, setCountFormPage }}>
      {children}
    </Context.Provider>
  );
}
