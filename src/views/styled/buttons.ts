import styled from 'styled-components';
import { Button, Link } from 'rebass';

export const ButtonPrimary = styled(Button)`
  position: relative;
  background: #e8f063;
  cursor: pointer;
  transition: all 0.15s;

  &.css-button {
    font-weight: 600;
    width: auto;
    min-width: 150px;
    margin-right: 0;
    padding: 4px 25px;
    color: #000;
    border-radius: 12px;
    border-color: #e8f063;
  }

  &:enabled {
    &:hover,
    &:focus {
      opacity: 0.7;
      color: #404040;
      background: #e8f063;
      border-color: #e8f063;
    }

    &:active {
      opacity: 0.4;
      color: inherit;
      background: #e8f063;
      border-color: #e8f063;
    }
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border: 0;
    cursor: not-allowed;
  }
`;

export const ButtonSeccondry = styled(ButtonPrimary)`
  &.css-button {
    margin-top: 15px;
    color: rgb(64, 64, 64);
    background-color: rgb(241, 241, 241);
    border-color: rgb(241, 241, 241);
  }

  &:hover,
  &:focus {
    opacity: 0.6;
    color: #404040;
    background: #f1f1f1;
    border-color: #f1f1f1;
  }

  &:active {
    opacity: 0.4;
    color: inherit;
    background: #f1f1f1;
    border-color: #f1f1f1;
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
`;

export const ButtonLink = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: rgb(148, 148, 148);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    color: rgb(206, 206, 206);
  }
`;

export const ButtonText = styled.span`
  position: relative;
  top: 8px;
  width: 22px;
  height: 22px;
  cursor: pointer;

  svg {
    fill: #a5a5a5;
  }

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.4;
  }
`;

export const ButtonCancel = styled(Button)`
  &.css-button {
    font-size: 14px;
    min-width: 138px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    background: rgb(241, 172, 172);
    border: none;
    border-radius: 12px;
    padding: 4px 32px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
  }

  &:hover,
  &:focus {
    opacity: 0.7;
    color: rgb(0, 0, 0);
    background: rgb(241, 172, 172);
    outline: 0;
  }

  &:active {
    opacity: 0.4;
  }
`;

export const ButtonOk = styled(ButtonCancel)`
  &.css-button {
    background: rgb(194, 255, 191);
  }

  &:hover,
  &:focus {
    opacity: 0.7;
    color: rgb(0, 0, 0);
    background: rgb(194, 255, 191);
    outline: 0;
  }

  &:active {
    opacity: 0.4;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  & button[type='submit'] {
    margin: 0;
  }
`;
