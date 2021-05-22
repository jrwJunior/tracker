import styled from 'styled-components';

const Foo = styled.div`
  border: 2px double transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, rgb(175, 255, 255), rgb(250, 255, 160));
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

export const LabelText = styled(Foo)`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  color: rgb(137, 137, 137);
  padding: 2px 15px;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  margin-top: 50px;

  & > div:first-child {
    margin-right: 6%;
  }

  & > div {
    margin-right: 3%;
  }
`;

export const Table = styled.table`
  td:first-child {
    padding-right: 6%;

    & > div {
      white-space: nowrap;
    }
  }

  td {
    padding: 15px 0;
  }
`;

export const Empty = styled.div`
  font-size: 14px;
  margin: 50px auto;
  text-align: center;
  color: #929292;

  svg {
    width: 85px;
    height: auto;
  }
`;

export const ActionEdit = styled.div`
  position: relative;
  top: 8px;

  span {
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.6;
    }
  }

  span:first-child {
    margin-right: 30px;
  }
`;
