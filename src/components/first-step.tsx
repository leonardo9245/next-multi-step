'use client';
import React, { ChangeEvent, useState } from 'react';

export interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export function FirstStep() {
  const inputStyles =
    'border-2 rounded-sm px-2 py-2 w-full text-base font-bold';

  const labelStyles = 'text-primaryText';
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: ''
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setUserInfo(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (!/^\d$/.test(key) && key !== 'Backspace') {
      event.preventDefault();
    }
  };

  return (
    <div className="bg-white rounded-md space-y-4 px-6 py-8 shadow-md">
      <h2 className="font-bold text-3xl text-primaryText">Personal info</h2>
      <p className="text-gray-400 text-lg">
        Please provide your name, email address, and phone number.
      </p>
      <form className="space-y-4 ">
        <div>
          <label className={labelStyles} htmlFor="name">
            Name
          </label>
          <br />
          <input
            id="name"
            type="text"
            placeholder="e.g.Stephen King"
            className={inputStyles}
            value={userInfo.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className={labelStyles} htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="e.g.stephenking@lorem.com"
            className={inputStyles}
            value={userInfo.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className={labelStyles} htmlFor="phone">
            Phone Number
          </label>
          <br />
          <input
            id="phone"
            type="tel"
            placeholder="e.g +1 234 567 890"
            className={inputStyles}
            value={userInfo.phone}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
    </div>
  );
}
