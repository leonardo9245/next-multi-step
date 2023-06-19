import { useContextForm } from '@/hooks/useContextForm';
import { PlanOption } from './plan-option';
import { planType } from '@/types/plan-type';
import { PlanDuration } from './plan-duration';
import { Buttons } from './buttons';

export interface ISecondStepProps {}

export function SecondStep(props: ISecondStepProps) {
  const { plan } = useContextForm();

  return (
    <>
      <div className="bg-white rounded-md space-y-4 px-6 py-8 shadow-md mb-20 md:shadow-none md:space-y-8 md:px-12">
        <div>
          <h2 className="font-bold text-3xl text-primaryColor">
            Select your plan
          </h2>
          <p className="text-gray-400 text-lg">
            You have the option of monthly or yearly billing
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <PlanOption
              planName="Arcade"
              planPrice={9}
              planIcon="./images/icon-arcade.svg"
              selected={plan === planType.ARCADE}
              planTypeOption={planType.ARCADE}
            />
            <PlanOption
              planName="Advanced"
              planPrice={12}
              planIcon="./images/icon-advanced.svg"
              selected={plan === planType.ADVANCED}
              planTypeOption={planType.ADVANCED}
            />
            <PlanOption
              planName="Pro"
              planPrice={15}
              planIcon="./images/icon-pro.svg"
              selected={plan === planType.PRO}
              planTypeOption={planType.PRO}
            />
          </div>
          <PlanDuration />
        </div>
        <Buttons name="" isValid={true} />
      </div>
    </>
  );
}
