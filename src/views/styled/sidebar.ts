import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Side = styled.aside`
  width: 280px;
  height: 100%;
  padding-right: 8px;
`;

export const Container = styled.div`
  text-align: center;
  padding: 45px 20px;
  background-color: rgb(255, 255, 255);
`;

export const Link = styled(NavLink)`
  display: block;
  font-size: 22px;
  color: #898989;
  padding: 8px 0;
  border: solid 2px transparent;

  &.active {
    color: #000;
    border-radius: 10px;
    background-image: linear-gradient(white, white),
      linear-gradient(to right, #afffff, #faffa0);
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }

  &:hover {
    color: #000;
  }
`;
