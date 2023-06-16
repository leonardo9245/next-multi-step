import { useContextForm } from '@/hooks/useContextForm';
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
  const { setPlan, planDurationOption } = useContextForm();
  const handlePlanType = (value: planType) => {
    setPlan(value);
  };
  return (
    <div
      className={`flex items-center gap-4 border rounded-lg px-4 py-4 ${
        props.selected ? 'border-primaryColor bg-bgPage' : ''
      }`}
      onClick={() => handlePlanType(props.planTypeOption)}
    >
      <Image src={props.planIcon} width={60} height={60} alt="" />
      <div>
        <p className="font-bold text-xl text-primaryColor">{props.planName}</p>
        <small className="text-lg text-gray-400">
          ${props.planPrice}/<span>mo</span>
        </small>
      </div>
    </div>
  );
}
