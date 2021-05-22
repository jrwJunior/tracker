/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Heading } from 'rebass';

// Style components
import { Head, Main, HeadActions } from 'views/styled/dashboard';
import { ButtonPrimary } from 'views/styled/buttons';
import { LabelText, Info } from 'views/styled/trash';
// UI
import FieldSearch from 'views/Ui/inputs/search';
// Actions
import {
  positionsAsync,
  createPositionAsync,
  updatePostitionAsync,
  deletePostitionAsync,
  clearError,
} from 'states/ducks/positions/action';
import { RootState } from 'states/store';
// Components
import Create from 'views/shared/Modals/info';
import Pagination from 'views/components/Pagination';
import PositionList from './components/positionList';

const Positions = () => {
  const dispatch = useDispatch();

  const getPositions = useCallback(
    (params?) => dispatch(positionsAsync(params)),
    [dispatch],
  );
  const create = useCallback(pos => dispatch(createPositionAsync(pos)), [
    dispatch,
  ]);
  const update = useCallback(pos => dispatch(updatePostitionAsync(pos)), [
    dispatch,
  ]);
  const deletePos = useCallback(id => dispatch(deletePostitionAsync(id)), [
    dispatch,
  ]);
  const clear = useCallback(() => dispatch(clearError()), [dispatch]);

  const { positions, totalPage, error } = useSelector(
    (state: RootState) => ({
      positions: state.positions.positions,
      error: state.positions.errorPos,
      totalPage: state.positions.totalPage,
    }),
    shallowEqual,
  );

  const props = {
    positions,
    error,
    onUpdate: update,
    onDelete: deletePos,
  };

  useEffect(() => {
    getPositions('?page=0&size=5');
  }, [getPositions]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (error) {
      const id = setTimeout(() => clear(), 2000);
      return () => clearTimeout(id);
    }
  }, [error, clear]);

  return (
    <>
      <Head>
        <Heading
          fontSize={[24]}
          fontWeight={[500]}
          fontFamily="unset"
          color="#000"
        >
          Посади
        </Heading>
        <HeadActions>
          <FieldSearch />
          <Create
            title="Додати посаду"
            onUpdate={create}
            trigger={
              <ButtonPrimary
                className="css-button"
                variant="primary"
                mr={2}
                height={38}
                fontSize={15}
              >
                Додати посаду
              </ButtonPrimary>
            }
            options={{
              buttonText: undefined,
              form: {},
              data: {},
              error,
            }}
          />
        </HeadActions>
        <Info>
          <LabelText style={{ minWidth: '160px' }}>Посади</LabelText>
        </Info>
      </Head>
      <Main style={{ height: 'calc(100% - 281px)' }}>
        <PositionList {...props} />
        <Pagination
          totalPage={totalPage}
          onGetData={getPositions}
          isFiltred={false}
        />
      </Main>
    </>
  );
};

export default Positions;
