import { useContextForm } from '@/hooks/useContextForm';
import { Buttons } from './buttons';
import { planDurationType } from '@/types/plan-duration-type';

export interface IStepFourProps {}

export function StepFour(props: IStepFourProps) {
  const { planObj, addons, planDurationOption, setCountFormPage } =
    useContextForm();

  const formatDuration = () => {
    return planDurationOption === planDurationType.MONTHLY ? 'mo' : 'yr';
  };

  const sumTotal = () => {
    const calcAddons = addons.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );

    const totalValue = calcAddons + planObj.price;
    return totalValue;
  };

  return (
    <>
      <div className="bg-white rounded-md space-y-6 px-6 py-8 shadow-md">
        <h2 className="font-bold text-3xl text-primaryColor">Finishing up</h2>
        <p className="text-gray-400 text-lg">
          Double-check everything looks OK before confirming.
        </p>
        <div className="bg-bgPage py-3 px-4 space-y-4 rounded-lg">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="font-bold text-primaryColor">
                {planObj.plan} (
                {planDurationOption === planDurationType.MONTHLY
                  ? 'Monthly'
                  : 'yearly'}
                )
              </h3>
              <button
                className="text-gray-400 underline"
                onClick={() => setCountFormPage(2)}
              >
                Change
              </button>
            </div>
            <p className="font-bold text-primaryColor">
              ${planObj.price}/{formatDuration()}
            </p>
          </div>
          <div className="space-y-4">
            {addons.map(
              (addon, index) =>
                addon.name !== '' && (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <p className="text-gray-400">{addon.name}</p>
                    <p className="text-primaryColor">
                      +${addon.price}/{formatDuration()}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="flex items-center justify-between px-4">
          <p className="text-gray-400">
            Total (per {formatDuration() === 'mo' ? 'month' : 'year'})
          </p>
          <p className="font-bold text-purPlishBlue">
            ${sumTotal()}/{formatDuration()}
          </p>
        </div>
      </div>

      <Buttons />
    </>
  );
}
