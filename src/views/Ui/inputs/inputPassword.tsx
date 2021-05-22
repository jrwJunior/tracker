/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, forwardRef } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

// Style components
import { FieldPassword, FieldPreffix } from 'views/styled/fields';

interface InputPasswordProps {
  name: string;
  placeholder?: string;
  isErrors: boolean;
}

const InputPassword = forwardRef((props: InputPasswordProps, ref) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (): void => {
    setVisible(!visible);
  };

  return (
    <>
      <FieldPassword
        ref={ref}
        type={visible ? 'text' : 'password'}
        {...props}
      />
      <FieldPreffix onClick={handleVisibleChange}>
        {visible ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} />}
      </FieldPreffix>
    </>
  );
});

InputPassword.defaultProps = {
  placeholder: 'Пароль',
};

export default InputPassword;
