/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Styled componets
import { Table } from 'views/styled/trash';
// Components
import PositionItem from './positionItem';

const PositionList = ({ positions, ...rest }: any) => (
  <Table>
    <tbody>
      {positions.map((position: any) => (
        <PositionItem key={position.id} {...position} {...rest} />
      ))}
    </tbody>
  </Table>
);

export default PositionList;
