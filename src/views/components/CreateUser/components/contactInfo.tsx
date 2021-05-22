/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Heading } from 'rebass';
import { Controller } from 'react-hook-form';

// Style components
import { FieldGroup } from 'views/styled/fields';
// UI
import FormField from 'views/Ui/inputField';

const ContactInfo = ({ register, control, errors }: any) => {
  const fieldProps = {
    ref: register,
    errors,
  };

  return (
    <>
      <Heading
        fontSize={[22]}
        fontWeight={[500]}
        fontFamily="unset"
        color="#000"
        marginBottom={40}
      >
        Контактні дані
      </Heading>
      <FieldGroup>
        <Controller
          name="phone"
          control={control}
          defaultValue="+380"
          errors={errors}
          as={FormField}
        />
        <FormField name="email" placeholder="Пошта" {...fieldProps} />
      </FieldGroup>
      <FieldGroup>
        <FormField
          ref={register}
          name="password"
          type="password"
          placeholder="Пароль"
          errors={errors}
        />
      </FieldGroup>
    </>
  );
};

export default ContactInfo;
