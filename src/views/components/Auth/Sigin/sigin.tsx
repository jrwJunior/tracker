/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Style components
import { ButtonPrimary } from 'views/styled/buttons';
import { Wrapper, FormError } from 'views/styled/form';

// Components
import { signInSchema } from 'utilities/helpers/validationSchem';
import Logo from 'views/components/Logo';
import Form from 'views/shared/Form';
// UI
import FormField from 'views/Ui/inputField';
import Indicator from 'views/Ui/indicator';

import { userLogin } from 'states/ducks/auth/action';
import { RootState } from 'states/store';

// interface FormProps {
//   register: RegisterOptions;
//   errors: ErrorOption;
//   formState: FormState<FieldValues>;
// }

const Container = styled.div`
  text-align: center;
  padding: 140px 15px 68px 15px;
  background-color: #f3f7f8;
`;

const Title = styled.div`
  font-size: 52px;
  line-height: 1;
  font-weight: 400;
  color: #000;
`;

const Sigin = () => {
  const dispatch = useDispatch();
  const login = useCallback(user => dispatch(userLogin(user)), [dispatch]);

  const { error, isSubmitted } = useSelector((state: RootState) => state.login);

  return (
    <>
      <Container>
        <Logo />
        <Title>Вітаємо Вас в системі документообігу</Title>
      </Container>
      <Wrapper>
        <Form schema={signInSchema} onFetch={login}>
          {({ register, errors, formState }: any) => (
            <>
              <FormField
                ref={register}
                name="firstName"
                placeholder="Ваше ім’я"
                errors={errors}
              />
              <FormField
                ref={register}
                name="patronymic"
                placeholder="По батькові"
                errors={errors}
              />
              <FormField
                ref={register}
                name="secondName"
                placeholder="Прізвище"
                errors={errors}
              />
              <FormField
                ref={register}
                name="password"
                type="password"
                placeholder="Пароль"
                errors={errors}
              />
              <div>
                <Link to="/auth/reset_password">Відновити пароль</Link>
              </div>
              <ButtonPrimary
                variant="primary"
                className="css-button"
                mr={2}
                height={50}
                type="submit"
                disabled={!formState.isValid || isSubmitted}
              >
                <span>Увійти</span>
                {isSubmitted && <Indicator />}
              </ButtonPrimary>
              <FormError>{error?.message}</FormError>
            </>
          )}
        </Form>
      </Wrapper>
    </>
  );
};

export default Sigin;
