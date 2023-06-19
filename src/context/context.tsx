'use client';

import { IAddon } from '@/types/addon-type';
import { planDurationType } from '@/types/plan-duration-type';
import { PlanObj, planType } from '@/types/plan-type';
import { UserInfo } from '@/types/user-type';
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
  userInfo: { name: '', email: '', phone: '' },
  setCountFormPage: (value: number) => {},
  setPlan: (value: planType) => {},
  setPlanDurationOption: (value: planDurationType) => {},
  setPlanObj: (value: PlanObj) => {},
  setAddons: (value: IAddon[]) => {},
  setUserInfo: (value: UserInfo) => {}
});

export function ContextProvider({ children }: ProviderProps) {
  const [countFormPage, setCountFormPage] = useState(1);
  const [plan, setPlan] = useState(planType.ARCADE);
  const [planDurationOption, setPlanDurationOption] = useState(
    planDurationType.MONTHLY
  );
  const [planObj, setPlanObj] = useState<PlanObj>({
    plan: 'Arcade',
    price: 9
  });

  const [addons, setAddons] = useState<IAddon[]>([{ name: '', price: 0 }]);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: ''
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
        setPlanObj,
        addons,
        setAddons,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </Context.Provider>
  );
}
