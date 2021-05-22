/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// Style components
import { LabelText, Info } from 'views/styled/trash';
import { FieldSelect } from 'views/styled/form/fields';
import { ButtonText } from 'views/styled/buttons';
// UI
import Indicator from 'views/Ui/indicator';
import IconSort from 'views/Ui/Icons/sort';

import { usePrevious } from 'utilities/hooks/usePrevious';
import storage from 'utilities/helpers/storage';

type PositionsType = {
  id: number;
  name: string;
};

interface UserFinfoProps {
  values: {
    [key: string]: any;
  };
  positions: readonly any[];
  isLoading: boolean;
  onFilters: (options: { value: string; label: string }, action: any) => void;
  onSort: (data: PositionsType, query: string) => void;
}

const UserFinfo = ({
  values: { role, position, status },
  positions,
  isLoading,
  onFilters,
  onSort,
}: UserFinfoProps) => {
  const [sort, setSort] = useState<string>('asc');
  const prevState = usePrevious(sort);
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const pos = useMemo(
    () =>
      positions.map(({ id, name }: PositionsType) => ({
        value: id,
        label: name,
      })),
    [positions],
  );
  const storageData = storage.get('filter_users');
  const propsSelect = {
    isSearchable: false,
    isClearable: false,
  };

  useEffect(() => {
    if (prevState && sort !== prevState) {
      onSort(
        { ...storageData },
        `?page=${
          parseInt(params.get('page')!, 10) - 1
        }&size=5&sort=firstName,${sort}`,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, prevState, storageData, onSort]);

  const handleSortClick = (): void => {
    setSort((state: string) => (state === 'asc' ? 'desc' : 'asc'));
  };

  const LoadingIndicator = () => <Indicator />;

  return (
    <Info>
      <LabelText>Прізвище ім’я по батькові</LabelText>
      <FieldSelect
        name="role"
        placeholder="Роль"
        className="css-select"
        value={role}
        onChange={onFilters}
        options={[
          { value: 'ADMIN', label: 'Адміністратор' },
          { value: 'USER', label: 'Користувач' },
        ]}
        variant="gradient"
        {...propsSelect}
      />
      <FieldSelect
        name="position"
        placeholder="Посада"
        className="css-select"
        value={position}
        onChange={onFilters}
        isLoading={isLoading}
        components={{ LoadingIndicator }}
        options={pos}
        variant="gradient"
        {...propsSelect}
      />
      <FieldSelect
        name="status"
        placeholder="Статус"
        className="css-select"
        value={status}
        onChange={onFilters}
        options={[
          { value: 'INVITATION_SENT', label: 'Надіслано запрошення' },
          { value: 'ACTIVE', label: 'Онлайн' },
          { value: 'DEACTIVATED', label: 'Деактивовано' },
          { value: 'PASSWORD_RESTORE', label: 'Відновлення паролю' },
        ]}
        variant="gradient"
        {...propsSelect}
      />
      <LabelText>Дата реєстрації</LabelText>
      <ButtonText
        style={{
          transform:
            sort === 'desc' ? `rotate(${sort === 'desc' && 180}deg)` : '',
        }}
        role="button"
        onClick={handleSortClick}
      >
        <IconSort />
      </ButtonText>
    </Info>
  );
};

export default UserFinfo;
