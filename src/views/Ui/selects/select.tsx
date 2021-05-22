/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

// Style components
import { FieldSelect, FieldError } from 'views/styled/fields';
import { FormControl } from 'views/styled/form';

const Select = ({ errors, ...rest }: any) => (
  <FormControl>
    <Controller
      {...rest}
      isErrors={errors[rest.name]?.message}
      as={FieldSelect}
      styles={{
        option: (styles: any, { isSelected, isFocused }: any) => ({
          ...styles,
          backgroundColor: isSelected ? 'rgba(34,45,71,.05)' : 'transparent',
          color: '#000',
          cursor: 'pointer',
          transition: 'all 0.15s',
          fontSize: '14px',
          ':hover': {
            ...styles,
            opacity: '0.5',
            backgroundColor: isSelected ? 'rgba(34,45,71,.05)' : 'transparent',
            color: '#000',
            cursor: 'pointer',
            fontSize: '14px',
          },
          ':active': {
            ...styles[':active'],
            backgroundColor: isFocused && 'transparent',
          },
        }),
        indicatorSeparator: (styles: React.CSSProperties) => ({
          ...styles,
          display: 'none',
        }),
        singleValue: (styles: React.CSSProperties) => ({
          ...styles,
          opacity: '0.6',
        }),
      }}
    />
    <ErrorMessage
      errors={errors}
      name={rest.name}
      render={({ message }) => <FieldError>{message}</FieldError>}
    />
  </FormControl>
);

Select.defaultProps = {
  isSearchable: false,
  variant: 'line',
  defaultValue: '111',
};

export default Select;
