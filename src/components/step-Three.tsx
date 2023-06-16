import { Addon } from './addon';
import { Buttons } from './buttons';

export interface IStepThreeProps {}

export function StepThree(props: IStepThreeProps) {
  return (
    <>
      <div className="bg-white rounded-md space-y-4 px-6 py-8 shadow-md">
        <h2 className="font-bold text-3xl text-primaryColor">Pick add-ons</h2>
        <p className="text-gray-400 text-lg">
          Add-ons help enhance your gaming experience
        </p>
        <Addon
          name="Online service"
          price={1}
          description="Access to multiplayer games"
        />
        <Addon
          name="Larger storage"
          price={2}
          description="Extra 1TB of cloud Save"
        />
        <Addon
          name="Customizable profile"
          price={2}
          description="custom theme on your profile"
        />
      </div>
      <Buttons />
    </>
  );
}
