/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { AnyObjectSchema } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import _ from 'lodash';

// Style components
import { Form } from 'views/styled/form';

interface FormData {
  [key: string]: string;
}

interface FormProps {
  children: any;
  schema: AnyObjectSchema;
  isSubmitSuccessful?: boolean;
  onFetch: (data: FormData) => void;
}

// eslint-disable-next-line max-len
const FormContainer = ({
  children,
  schema,
  isSubmitSuccessful,
  onFetch,
}: FormProps) => {
  const { handleSubmit, reset, ...otherParams } = useForm<FormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const [submittedData, setSubmittedData] = useState({});

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData });
    }
  }, [isSubmitSuccessful, submittedData, reset]);

  const onSubmit = (data: FormData) => {
    const transform = _.mapKeys(data, (_v, k) => k.toLowerCase());
    const resetData = Object.keys(data).map(v => ({ [v]: '' }));

    onFetch(transform);
    setSubmittedData(resetData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {children({ ...otherParams })}
    </Form>
  );
};

FormContainer.defaultProps = {
  isSubmitSuccessful: false,
};

export default FormContainer;
