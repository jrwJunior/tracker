/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

// Components
import Sidebar from 'views/components/Sidebar';
import RenderRoutes from 'views/routes/renderRoutes';

import { routes } from 'views/routes/routes';

const Admin = styled.div`
  height: 100%;
  background: linear-gradient(rgb(175, 255, 255), rgb(253, 255, 224));
`;

const Main = styled.main`
  width: calc(100% - 280px);
`;

const Manager = styled.div`
  display: flex;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  padding: 0px 35px;
`;

const Dashborad: React.FC = () => (
  <Admin>
    <Manager>
      <Sidebar />
      <Main>
        <RenderRoutes routes={routes} />
      </Main>
    </Manager>
  </Admin>
);

export default Dashborad;
