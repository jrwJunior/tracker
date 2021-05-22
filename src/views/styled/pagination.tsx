import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-top: auto;
  text-align: center;

  ul {
    padding: 20px 0px;

    & > li {
      display: inline-block;
      min-width: 25px;
      height: 25px;
      margin-right: 8px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      vertical-align: middle;
      border-radius: 6px;
      outline: 0;
      user-select: none;
      cursor: pointer;
      transition: all 0.3s;

      &:hover > a,
      &.selected:hover > a {
        color: rgb(158, 158, 158);
      }

      & > a {
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
      }

      &.selected {
        background-color: rgb(232, 240, 99);
        transform: rotate(45deg);
      }

      &.selected > a {
        display: block;
        color: rgb(0, 0, 0);
        outline: none;
        transform: rotate(-45deg);
      }
    }
  }
`;
