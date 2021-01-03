/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('render app component', () => {
    render(<App />);
  });
});
