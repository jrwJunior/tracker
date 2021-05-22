import styled from 'styled-components';

import { FieldError } from './fields';

export const Wrapper = styled.div`
  position: relative;
  max-width: 565px;
  margin: auto;
  padding: 45px 35px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  text-align: right;

  input[name='password'] {
    margin-bottom: 16px;
  }

  button[type='submit'] {
    margin-top: 25px;
  }

  a[href='/auth/reset_password'] {
    font-size: 14px;
    color: #6e6669;
    text-decoration: underline;

    &:hover {
      color: #6e6669;
      opacity: 0.7;
    }
  }
`;

export const FormControl = styled.div`
  position: relative;

  input[name='password'] {
    padding-right: 25px;
  }
`;

export const FormError = styled(FieldError)`
  position: static;
  display: block;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

export const FieldTextButton = styled.span`
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;

  svg {
    opacity: 0.6;
  }
`;
