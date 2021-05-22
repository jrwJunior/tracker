import React from 'react';
import { Text } from 'rebass';

interface UserItemProps {
  firstname: string;
  secondname: string;
  patronymic: string;
  role: string;
  position: {
    id: number;
    name: string;
  };
  status: string;
  creationdate: string;
}

const UserItem = ({
  patronymic,
  firstname,
  secondname,
  role,
  position,
  status,
  creationdate,
}: UserItemProps) => (
  <tr>
    <td style={{ width: '265px' }}>
      <Text
        fontSize={18}
        fontWeight={600}
      >{`${secondname} ${firstname} ${patronymic}`}</Text>
    </td>
    <td style={{ width: '150px', paddingRight: '3%' }}>
      <Text fontSize={18}>{role}</Text>
    </td>
    <td style={{ width: '150px', paddingRight: '3%' }}>
      <Text fontSize={18}>{position.name}</Text>
    </td>
    <td style={{ width: '150px', paddingRight: '3%' }}>
      <Text fontSize={18}>{status}</Text>
    </td>
    <td style={{ width: '170px', paddingRight: '5%' }}>
      <Text fontSize={18}>{new Date(creationdate).toLocaleDateString()}</Text>
    </td>
  </tr>
);

export default UserItem;
