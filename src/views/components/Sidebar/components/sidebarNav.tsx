import React from 'react';

// Style components
import { Link } from 'views/styled/sidebar';

const SidebarNav = () => (
  <ul>
    <li>
      <Link to="/users">Користувачі</Link>
    </li>
    <li>
      <Link to="/positions">Посади</Link>
    </li>
  </ul>
);

export default SidebarNav;
