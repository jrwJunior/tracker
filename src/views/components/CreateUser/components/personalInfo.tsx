/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { GrAdd } from 'react-icons/gr';

// Style components
import { FieldGroup, FieldSelect } from 'views/styled/fields';
import Create from 'views/shared/Modals/info';
// UI
import FormField from 'views/Ui/inputField';
import FormSelect from 'views/Ui/selects/select';
import Indicator from 'views/Ui/indicator';

type PositionsType = {
  id: number;
  name: string;
};

const Add = styled.span`
  position: absolute;
  top: 15px;
  left: 30%;
  cursor: pointer;
`;

const PersonalInfo = ({ positions, register, control, errors }: any) => {
  const pos = useMemo(
    () =>
      positions.map(({ id, name }: PositionsType) => ({
        value: id,
        label: name,
      })),
    [positions],
  );

  const LoadingIndicator = () => <Indicator />;
  const fieldProps = {
    ref: register,
    errors,
  };

  return (
    <>
      <FieldGroup>
        <FormField name="secondName" placeholder="Прізвище" {...fieldProps} />
        <FormField name="firstName" placeholder="Ім’я" {...fieldProps} />
      </FieldGroup>
      <FieldGroup>
        <FormField
          name="patronymic"
          placeholder="По батькові"
          {...fieldProps}
        />
      </FieldGroup>
      <FieldGroup>
        <FormSelect
          control={control}
          name="position"
          placeholder="Посада"
          components={{ LoadingIndicator }}
          options={pos}
          errors={errors}
        />
        <Create
          title="Додати посаду"
          onUpdate={data => console.log(data)}
          trigger={
            <Add role="button" aria-label="Добавити посаду">
              <GrAdd size={18} />
            </Add>
          }
          options={{
            buttonText: undefined,
            form: {},
          }}
        />
        <FormSelect
          control={control}
          name="role"
          placeholder="Роль"
          options={[
            { value: 'ADMIN', label: 'Адміністратор' },
            { value: 'USER', label: 'Користувач' },
          ]}
          errors={errors}
        />
      </FieldGroup>
      <FieldGroup>
        <FieldSelect
          name="DOCUMENTS"
          placeholder="Доступ до документів"
          isMulti
          options={[]}
          variant="line"
        />
      </FieldGroup>
    </>
  );
};

export default PersonalInfo;
