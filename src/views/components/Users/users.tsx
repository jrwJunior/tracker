/* eslint-disable max-len */
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heading } from 'rebass';
import _ from 'lodash';

// Style components
import {
  Head,
  Main,
  HeadActions,
  UserActions,
  EmptyFilter,
} from 'views/styled/dashboard';
import { ButtonPrimary, ButtonSeccondry } from 'views/styled/buttons';
// UI
import FieldSearch from 'views/Ui/inputs/search';
// actions
import { usersAsync, filterUsersAsync } from 'states/ducks/users/action';
// Hooks
import { useFilter } from 'utilities/hooks/useFilter';
import { RootState } from 'states/store';
// Components
import UserInfo from './components/usersInfo';
import UserList from './components/userList';

const Users = () => {
  const dispatch = useDispatch();

  const getFilter = useCallback(
    (filter, query?) => dispatch(filterUsersAsync(filter, query)),
    [dispatch],
  );

  const { loading, filtered, users, userPos } = useSelector(
    (state: RootState) => state.users,
  );

  const { push } = useHistory();
  const { onClearFilter, isDisabled, ...rest } = useFilter(
    {
      role: undefined,
      position: undefined,
      status: undefined,
    },
    getFilter,
  );
  const EmptyElement = (
    <EmptyFilter>Немає результатів, що відповідають фільтру</EmptyFilter>
  );

  useEffect(() => {
    dispatch(usersAsync(undefined));
  }, [dispatch]);

  const handleCreateClick = (): void => {
    push('/users/create');
  };

  return (
    <>
      <Head>
        <Heading
          fontSize={[24]}
          fontWeight={[500]}
          fontFamily="unset"
          color="#000"
        >
          Користувачі
        </Heading>
        <HeadActions>
          <FieldSearch onGetSearch={getFilter} />
          <UserActions>
            <ButtonPrimary
              className="css-button"
              variant="primary"
              mr={2}
              height={38}
              fontSize={15}
              onClick={handleCreateClick}
            >
              Додати користувача
            </ButtonPrimary>
            <ButtonSeccondry
              className="css-button"
              variant="secondary"
              mr={2}
              height={38}
              disabled={isDisabled}
              onClick={onClearFilter}
            >
              Очистити фільтр
            </ButtonSeccondry>
          </UserActions>
        </HeadActions>
        <UserInfo
          {...rest}
          onSort={getFilter}
          positions={userPos}
          isLoading={loading}
        />
      </Head>
      <Main style={{ height: 'calc(100% - 339px)' }}>
        {loading ? 'loading...' : <UserList users={users} />}
        {filtered && _.isEmpty(users) && EmptyElement}
      </Main>
    </>
  );
};

export default Users;
