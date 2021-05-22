/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Heading } from 'rebass';
import { IoArrowBackOutline } from 'react-icons/io5';

// Style components
import { Head, Main } from 'views/styled/dashboard';
import { ButtonPrimary } from 'views/styled/buttons';
// Componets
import Form from 'views/shared/Form';
import Personal from './components/personalInfo';
import Contact from './components/contactInfo';
import Successful from 'views/shared/Modals/successful';
// Helpers
import { createUserSchema } from 'utilities/helpers/validationSchem';
import { createUserAsync, setClearState } from 'states/ducks/create/action';
import { RootState } from 'states/store';

const CreateUser: React.FC = () => {
  const dispatch = useDispatch();

  const createUser = useCallback(user => dispatch(createUserAsync(user)), [
    dispatch,
  ]);

  const positions = useSelector((state: RootState) => state.users.userPos);
  const successfully = useSelector(
    (state: RootState) => state.createUser.successfully,
  );
  const { goBack } = useHistory();

  useEffect(() => {
    dispatch(setClearState());
  }, [dispatch]);

  return (
    <>
      <Head>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            role="button"
            aria-label="Повернутыся назад"
            aria-hidden="true"
            style={{ marginRight: '15px' }}
            onClick={goBack}
          >
            <IoArrowBackOutline size={32} />
          </span>
          <Heading
            fontSize={[24]}
            fontWeight={[500]}
            fontFamily="unset"
            color="#000"
          >
            Додаты нового користувача
          </Heading>
        </div>
      </Head>
      <Main style={{ marginTop: 0, height: 'calc(100% - 100px)' }}>
        <Form
          schema={createUserSchema}
          onFetch={createUser}
          isSubmitSuccessful={successfully}
        >
          {({ formState, ...rest }: any) => (
            <>
              <div style={{ textAlign: 'left' }}>
                <Personal positions={positions} {...rest} />
                <Contact {...rest} />
                <ButtonPrimary
                  variant="primary"
                  className="css-button"
                  height={50}
                  mr={2}
                  type="submit"
                  disabled={!formState.isValid}
                >
                  <span>Додати користувача</span>
                </ButtonPrimary>
              </div>
              <Successful isOpen={successfully} />
            </>
          )}
        </Form>
      </Main>
    </>
  );
};

export default CreateUser;
