import { useContextForm } from '@/hooks/useContextForm';
import { planDurationType } from '@/types/plan-duration-type';

export interface IPlanDurationProps {}

export function PlanDuration(props: IPlanDurationProps) {
  const { planDurationOption, setPlanDurationOption } = useContextForm();

  const handleSwitchToggle = () => {
    if (planDurationOption === planDurationType.MONTHLY) {
      setPlanDurationOption(planDurationType.YEARLY);
    } else {
      setPlanDurationOption(planDurationType.MONTHLY);
    }
  };

  return (
    <div className="flex justify-center bg-bgPage py-4 my-4">
      <div className={`flex items-center  cursor-pointer gap-4`}>
        <span
          className={` font-bold text-lg ${
            planDurationOption === planDurationType.MONTHLY
              ? 'text-primaryColor'
              : 'text-gray-400'
          }`}
        >
          Monthly
        </span>
        <div
          className="relative inline-flex items-center w-12 h-6 ml-2 transition-colors duration-200 ease-linear rounded-full bg-primaryColor"
          onClick={() => handleSwitchToggle()}
        >
          <span
            className={`absolute w-4 h-4 transition-transform duration-200 ease-linear bg-white rounded-full shadow left-1 top-1 ${
              planDurationOption === planDurationType.YEARLY && 'translate-x-6'
            }`}
          ></span>
        </div>
        <span
          className={` font-bold text-lg  ${
            planDurationOption === planDurationType.YEARLY
              ? 'text-primaryColor'
              : 'text-gray-400'
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}