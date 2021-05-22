import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

// Style components
import { FieldTextButton } from 'views/styled/form';

// eslint-disable-next-line max-len
const InputButtonPassword = () => {
  const [visible, setVisible] = useState(false);

  return (
    <FieldTextButton
      role="img"
      aria-label="eye-invisible"
      onClick={() => setVisible((prevState: boolean) => !prevState)}
    >
      {visible ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} />}
    </FieldTextButton>
  );
};

export default InputButtonPassword;
