import { useContextForm } from '@/hooks/useContextForm';
import { PlanOption } from './plan-option';
import { planType } from '@/types/plan-type';

export interface ISecondStepProps {
  selected: boolean;
}

export function SecondStep(props: ISecondStepProps) {
  const { plan } = useContextForm();

  return (
    <div className="bg-white rounded-md space-y-4 px-6 py-8 shadow-md">
      <h2 className="font-bold text-3xl text-primaryText">Select your plan</h2>
      <p className="text-gray-400 text-lg">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex flex-col gap-4">
        <PlanOption
          planName="Arcade"
          planPrice={9}
          planDuration="mo"
          planIcon="./images/icon-arcade.svg"
          selected={plan === planType.ARCADE}
          planValue={planType.ARCADE}
        />
        <PlanOption
          planName="Advanced"
          planPrice={12}
          planDuration="mo"
          planIcon="./images/icon-advanced.svg"
          selected={plan === planType.ADVANCED}
          planValue={planType.ADVANCED}
        />
        <PlanOption
          planName="Pro"
          planPrice={15}
          planDuration="mo"
          planIcon="./images/icon-pro.svg"
          selected={plan === planType.PRO}
          planValue={planType.PRO}
        />
        <div> Monthly/yearly</div>
      </div>
    </div>
  );
}
