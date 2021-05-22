/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// Styled componets
import { Table } from 'views/styled/trash';

// Components
import UserItem from './userItem';

interface UserListProps {
  users: any;
}

const UserList = ({ users }: UserListProps) => (
  <Table>
    <tbody>
      {users.map((user: any) => (
        <UserItem key={user.id} {...user} />
      ))}
    </tbody>
  </Table>
);

export default UserList;
