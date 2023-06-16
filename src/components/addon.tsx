import { useContextForm } from '@/hooks/useContextForm';
import { planDurationType } from '@/types/plan-duration-type';
import { ChangeEvent, useState } from 'react';

interface IAddon {
  name: string;
  price: number;
}

interface IAddonProps {
  name: string;
  price: number;
  description: string;
}

export function Addon(props: IAddonProps) {
  const { planDurationOption } = useContextForm();
  const [addons, setAddons] = useState<IAddon[]>([]);
  const [checked, setChecked] = useState(false);

  const addonPriceUpdate =
    planDurationOption === planDurationType.MONTHLY
      ? props.price
      : props.price * 10;

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    const valueName = event.target.value;
    setChecked(event.target.checked);

    if (event.target.checked) {
      if (addons.some(obj => obj.name === valueName)) return;

      const newAddon = { name: valueName, price: addonPriceUpdate };

      setAddons(prevState => [...prevState, newAddon]);
    }

    if (!event.target.checked) {
      if (addons.some(obj => obj.name === valueName)) {
        const updatedAddons = addons.filter(obj => obj.name !== valueName);

        setAddons(updatedAddons);
      }
    }
  };

  return (
    <label
      htmlFor={props.name.split(' ').join('_')}
      className={`flex items-center  border px-4 py-4 rounded-lg ${
        checked ? 'bg-bgPage border-primaryColor' : ''
      }`}
    >
      <input
        type="checkbox"
        id={props.name.split(' ').join('_')}
        value={`${props.name}`}
        className=" w-5 h-5 "
        onChange={handleCheckBox}
      />
      <div className="flex items-center ml-4">
        <div className=" min-w-[200px]">
          <h3 className="text-primaryColor font-bold text-lg">{props.name}</h3>
          <p className="text-gray-400 text-sm">{props.description}</p>
        </div>
        <div className="text-purPlishBlue ">
          <span>
            +${addonPriceUpdate}/
            {planDurationOption === planDurationType.MONTHLY ? 'mo' : 'yr'}
          </span>
        </div>
      </div>
    </label>
  );
}
