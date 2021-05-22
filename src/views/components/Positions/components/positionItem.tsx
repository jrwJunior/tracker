/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Text } from 'rebass';
import { TiPencil } from 'react-icons/ti';

// Style
import { ActionEdit } from 'views/styled/trash';
// Components
import Edit from 'views/shared/Modals/info';
import Delete from 'views/shared/Modals/confirm';

interface PositionItemProps {
  name: string;
  id: number;
  error: string;
  onUpdate: (pos: any) => void;
  onDelete: (id: number) => void;
}

// eslint-disable-next-line max-len
const PositionItem = ({
  name,
  id,
  error,
  onUpdate,
  onDelete,
}: PositionItemProps) => (
  <tr>
    <td>
      <Text fontSize={18} fontWeight={600}>
        {name}
      </Text>
    </td>
    <td style={{ textAlign: 'right', padding: 0 }}>
      <ActionEdit>
        <Edit
          title="Редагувати посаду"
          onUpdate={onUpdate}
          trigger={
            <span role="button" aria-label="Редагувати">
              <TiPencil size={36} color="#134464" />
            </span>
          }
          options={{
            buttonText: 'Зберегти зміни',
            form: {
              defaultValue: name,
            },
            error,
            data: { id },
          }}
        />
        <Delete onDelete={onDelete} data={{ id }} />
      </ActionEdit>
    </td>
  </tr>
);

export default PositionItem;
