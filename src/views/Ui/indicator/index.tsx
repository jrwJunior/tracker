import React from 'react';
import styled from 'styled-components';

const Spinner = styled.span`
  position: absolute;
  top: calc(50% - 19px);
  right: 10px;
  width: 38px;
  height: auto;

  svg {
    fill: #0090ff;
  }
`;

const Indicator = () => (
  <Spinner>
    <svg viewBox="0 0 100 100">
      <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </Spinner>
);

export default Indicator;
