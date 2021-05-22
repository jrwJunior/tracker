/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';

import storage from 'utilities/helpers/storage';

const useSearch = (getSearch: (params: Object) => void) => {
  const [value, setValue] = useState<string>('');

  // eslint-disable-next-line max-len
  const handleQueryByName = (
    evt: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = evt.target;
    const storageValue = storage.get('filter_users');

    setValue(value);
    getSearch({ ...storageValue, query: value });
  };

  return {
    value,
    onSearch: handleQueryByName,
  };
};

export { useSearch };
