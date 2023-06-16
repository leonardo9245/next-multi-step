import { useContextForm } from '@/hooks/useContextForm';
import { planDurationType } from '@/types/plan-duration-type';
import { planType } from '@/types/plan-type';
import Image from 'next/image';

interface PlanOptionProps {
  planIcon: string;
  planName: string;
  planPrice: number;
  selected: boolean;
  planTypeOption: planType;
}

export function PlanOption(props: PlanOptionProps) {
  const { setPlan, planDurationOption, setPlanObj } = useContextForm();

  const planPriceUpdate =
    planDurationOption === planDurationType.MONTHLY
      ? props.planPrice
      : props.planPrice * 10;

  const handlePlanType = (value: planType) => {
    setPlan(value);
    setPlanObj({ plan: props.planName, price: planPriceUpdate });
  };

  return (
    <div
      className={`flex items-center gap-4 border rounded-lg px-4 py-4 ${
        props.selected ? 'border-primaryColor bg-bgPage' : ''
      }`}
      onClick={() => handlePlanType(props.planTypeOption)}
    >
      <Image src={props.planIcon} width={60} height={60} alt="" />
      <div className="flex flex-col">
        <p className="font-bold text-xl text-primaryColor">{props.planName}</p>
        <small className="text-lg text-gray-400">
          ${planPriceUpdate}/
          <span>
            {planDurationOption === planDurationType.YEARLY ? 'yr' : 'mo'}
          </span>
        </small>
        {planDurationOption === planDurationType.YEARLY ? (
          <small className="text-primaryColor">2 months free</small>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
