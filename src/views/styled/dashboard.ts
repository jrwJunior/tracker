import styled from 'styled-components';

export const Head = styled.div`
  padding: 50px 25px 12px;
  background-color: #fff;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding: 0 25px;
  background-color: #fff;
  overflow: hidden;

  table {
    tr {
      border-bottom: 1px double transparent;
      background-image: linear-gradient(white, white),
        linear-gradient(to right, rgb(175, 255, 255), rgb(250, 255, 160));
      background-origin: border-box;
      background-clip: padding-box, border-box;
      cursor: pointer;
    }
  }
`;

export const HeadActions = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 50px;

  input {
    margin-right: auto;
  }
`;

export const UserActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyFilter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #cbcfd7;
  font-size: 14px;
`;
