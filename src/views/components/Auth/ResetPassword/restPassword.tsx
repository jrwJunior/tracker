/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// Style components
import { Wrapper } from 'views/styled/form';
// import { ButtonPrimary, Buttons, ButtonLink } from 'views/styled/buttons';

// Components
// import Form from 'views/shared/Form';
// import FormField from 'views/Ui/inputField';

// import { resetPasswordSchema } from 'utilities/helpers/validationSchem';

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.32;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #9a9a9a;
  margin-top: 12px;
`;

const ResetPassword = () => {
  const { goBack } = useHistory();

  return (
    <Wrapper>
      <Title>Відновлення пароля</Title>
      <Subtitle>
        На цей email ми надішлемо посилання для відновлення пароля
      </Subtitle>
      {/* <Form
        schema={resetPasswordSchema}
      >
        {({ register, errors }: any) => (
          <>
            <FormField
              ref={register}
              name='email'
              placeholder='Наприклад example@mail.com'
              errors={errors}
            />
            <Buttons>
              <ButtonLink variant='nav' onClick={goBack}>Назад</ButtonLink>
              <ButtonPrimary
                variant='primary'
                mr={2}
                type='submit'
                // disabled={isValid}
              >
                Продовжити
              </ButtonPrimary>
            </Buttons>
          </>
        )}
      </Form> */}
    </Wrapper>
  );
};

export default ResetPassword;
