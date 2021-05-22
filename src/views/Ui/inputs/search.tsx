/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Input } from '@rebass/forms';
import { AiOutlineSearch } from 'react-icons/ai';

// Styled
import { Search, SearchIcon } from 'views/styled/fields';
// Hooks
import { useSearch } from 'utilities/hooks/useSearch';

const FieldSearch = ({ onGetSearch }: any) => {
  const { value, onSearch } = useSearch(onGetSearch);

  return (
    <Search>
      <SearchIcon role="img" aria-label="search">
        <AiOutlineSearch size="24" />
      </SearchIcon>
      <span>
        <Input value={value} placeholder="Пошук" onChange={onSearch} />
      </span>
    </Search>
  );
};

export default FieldSearch;
