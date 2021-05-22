/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import { ErrorMessage } from '@hookform/error-message';

// Style components
import { FormControl } from 'views/styled/form';
import { FieldPhone, Field, FieldError } from 'views/styled/fields';
// UI
import FieldPassword from 'views/Ui/inputs/inputPassword';

interface FieldProps {
  name: string;
  type?: string;
  defaultValue?: string;
  autoFocus?: boolean;
  placeholder?: string;
  errors: {
    [key: string]: any;
  };
}

// eslint-disable-next-line max-len
const Input = forwardRef<HTMLInputElement | null, FieldProps>(
  ({ errors, type, ...rest }, ref) => {
    const { name } = rest;
    const propsField = {
      ref,
      ...rest,
      isErrors: errors[name]?.message,
    };

    const FormField = name !== 'password' ? Field : FieldPassword;

    const fields = () => {
      if (name !== 'phone') {
        return <FormField {...propsField} />;
      }

      return (
        <FieldPhone isErrors={errors[name]?.message}>
          <PhoneInput country="ua" enableAreaCodes specialLabel="" {...rest} />
        </FieldPhone>
      );
    };

    return (
      <FormControl>
        {fields()}
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <FieldError>{message}</FieldError>}
        />
      </FormControl>
    );
  },
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
