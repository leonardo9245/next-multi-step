'use client';
import { useContextForm } from '@/hooks/useContextForm';
import Image from 'next/image';

export interface IFinalStepProps {}

export function FinalStep(props: IFinalStepProps) {
  const { userInfo, planObj, addons } = useContextForm();

  console.log({ userInfo, planObj, addons });
  return (
    <div className="bg-white rounded-md space-y-4 px-6 py-20 shadow-md flex flex-col justify-center items-center md:shadow-none md:self-center ">
      <Image
        src="./images/icon-thank-you.svg"
        width={60}
        height={60}
        alt="Thank you"
      />
      <h2 className="font-bold text-3xl text-primaryColor">Thank you!</h2>
      <p className="text-gray-400 text-base text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
