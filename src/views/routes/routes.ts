import Users from 'views/components/Users';
import CreateUser from 'views/components/CreateUser';
import Positions from 'views/components/Positions';

export const routes = [
  {
    path: '/users',
    exact: true,
    key: '',
    component: Users,
  },
  {
    path: '/users/create',
    key: '',
    exact: true,
    component: CreateUser,
  },
  {
    path: '/positions',
    key: '',
    exact: true,
    component: Positions,
  },
];
