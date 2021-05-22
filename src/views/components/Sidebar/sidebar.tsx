import React from 'react';

// Style components
import { Side, Container } from 'views/styled/sidebar';

// Components
import Navigation from './components/sidebarNav';

const Sidebar = () => (
  <Side>
    <Container>
      <Navigation />
    </Container>
  </Side>
);

export default Sidebar;
