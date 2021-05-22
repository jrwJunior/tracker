/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useLocation } from 'react-router-dom';

import storage from 'utilities/helpers/storage';

type DataType = {
  [key: string]: any;
};

// eslint-disable-next-line max-len
const useFilter = (
  data: DataType,
  getFilter: (data: any, params?: string) => void,
) => {
  const [values, setValues] = React.useState<DataType>(data);
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const storageData = storage.get('filter_users');

  React.useEffect(() => {
    if (storageData) {
      setIsDisabled(false);
    }
  }, [storageData, setIsDisabled]);

  const handleFilter = (
    selectOption: { value: string; label: string },
    action: DataType,
  ): void => {
    const dynamicValue =
      action.name === 'position'
        ? { id: selectOption.value, name: selectOption.label }
        : selectOption.value;
    const option = { value: selectOption.value, label: selectOption.label };

    // eslint-disable-next-line max-len
    setValues((prevState: DataType) => ({
      ...prevState,
      [action.name]: option,
    }));
    getFilter({ ...storageData, [action.name]: dynamicValue });
  };

  const handleClearFilter = (): void => {
    getFilter({}, `?page=${parseInt(params.get('page')!, 10) - 1}&size=5`);
    setValues({ role: null, position: null, status: null });
    setIsDisabled(true);
  };

  return {
    values,
    isDisabled,
    onFilters: handleFilter,
    onClearFilter: handleClearFilter,
  };
};

export { useFilter };
