import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
  margin-right: auto;

  .css-4y926w {
    font-size: 18px;
    line-height: 1.5715;
    border-radius: 20px;
    border: double 2px transparent;
    background-image: linear-gradient(white, white),
      linear-gradient(to right, #afffff, #faffa0);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    padding: 4px 15px 4px 60px;

    &::placeholder {
      font-size: 20px;
      color: #898989;
    }

    &:focus {
      border: 2px solid #40a9ff;
      box-shadow: 0 0 2px 1px rgb(24 144 255 / 40%);
    }
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 8px;
  left: 30px;
`;
