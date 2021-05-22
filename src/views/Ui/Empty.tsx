import React from 'react';

import { Empty } from 'views/styled/trash';
import EmptyIcon from './Icons/emptyUsers';

const EmptyUsers = () => (
  <Empty>
    <EmptyIcon />
    <p>На даний момент не знайдено не одного користувача</p>
  </Empty>
);

export default EmptyUsers;
