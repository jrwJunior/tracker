/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable radix */
import React, { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PagePagination from 'react-paginate';

// Styled
import { PaginationContainer } from 'views/styled/pagination';
// utils
import storage from 'utilities/helpers/storage';

interface IPaginationProps {
  totalPage: number;
  isFiltred: boolean;
  onGetData: (data?: Object, query?: string) => void;
}

const Pagination = ({ totalPage, isFiltred, onGetData }: IPaginationProps) => {
  const { push } = useHistory();
  const { url } = useRouteMatch();
  const storageData = storage.get('filter_users');

  useEffect(() => {
    if (totalPage > 1) {
      push({ pathname: url, search: '?page=1' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (page: { selected: number }): void => {
    if (isFiltred) {
      onGetData({ ...storageData }, `?page=${page.selected}&size=5`);
    } else {
      onGetData(`?page=${page.selected}&size=5`);
    }

    push({ pathname: url, search: `?page=${page.selected + 1}` });
  };

  if (totalPage < 2) {
    return null;
  }

  return (
    <PaginationContainer>
      <PagePagination
        previousLabel={null}
        nextLabel={null}
        breakLabel="..."
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={0}
        onPageChange={handleChange}
      />
    </PaginationContainer>
  );
};

export default React.memo(Pagination);
