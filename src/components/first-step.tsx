'use client';
import { useContextForm } from '@/hooks/useContextForm';
import { Buttons } from './buttons';
import { Input } from './input';
import { ChangeEvent, useState } from 'react';

export function FirstStep() {
  const { userInfo, setCountFormPage } = useContextForm();
  const [isValid, setIsValid] = useState(false);
  const [messageReqField, setMessageReqField] = useState(false);

  const handlePress = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (
      userInfo.name !== '' &&
      userInfo.phone !== '' &&
      userInfo.email !== ''
    ) {
      setMessageReqField(false);
      setIsValid(true);
      setCountFormPage(2);
    } else {
      setMessageReqField(true);
    }
  };

  return (
    <>
      <div className="bg-white rounded-md space-y-4 px-6 py-8 shadow-md md:shadow-none md:px-16">
        <div>
          <h2 className="font-bold text-3xl text-primaryColor">
            Personal info
          </h2>
          <p className="text-gray-400 text-lg">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <form className="space-y-4 ">
          <Input
            inputId="name"
            inputType="text"
            inputPlaceholder="e.g.Stephen King"
            labelName="name"
            value={userInfo.name}
            requiredMessage={messageReqField && userInfo.name === ''}
          />
          <Input
            inputId="email"
            inputType="email"
            inputPlaceholder="e.g.stephenking@lorem.com"
            labelName="Email Address"
            value={userInfo.email}
            requiredMessage={messageReqField && userInfo.email === ''}
          />

          <Input
            inputId="phone"
            inputType="tel"
            inputPlaceholder="e.g +1 234 567 890"
            labelName="Phone Number"
            value={userInfo.phone}
            requiredMessage={messageReqField && userInfo.phone === ''}
          />

          <div onClick={event => handlePress(event)}>
            <Buttons name="" isValid={isValid} />
          </div>
        </form>
      </div>
    </>
  );
}
