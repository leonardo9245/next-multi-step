import { useContextForm } from '@/hooks/useContextForm';
import { UserInfo } from '@/types/user-type';
import React, { ChangeEvent } from 'react';

export interface InputProps {
  inputType: string;
  inputId: string;
  inputPlaceholder: string;
  labelName: string;
  value: string;
  requiredMessage: boolean;
}

export function Input(props: InputProps) {
  const { userInfo, setUserInfo } = useContextForm();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setUserInfo({
      ...userInfo,
      [id]: value
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (!/^\d$/.test(key) && key !== 'Backspace') {
      event.preventDefault();
    }
  };

  return (
    <div className="relative">
      <label className="text-primaryColor text-sm" htmlFor={props.inputId}>
        {props.labelName}
      </label>
      {props.requiredMessage ? (
        <span className="text-[10px] absolute right-0 top-2 text-errorColor">
          this field is required
        </span>
      ) : (
        ''
      )}
      <br />
      <input
        value={props.value}
        id={props.inputId}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        className={`cursor-pointer text-primaryColor border rounded-md px-2 py-2 w-full text-base font-medium bg-transparent ${
          props.requiredMessage && 'border-errorColor'
        }`}
        onChange={handleInput}
        onKeyDown={props.inputType === 'tel' ? handleKeyDown : undefined}
        required
      />
    </div>
  );
}
