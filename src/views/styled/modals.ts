import styled from 'styled-components';
import Modal from 'react-modal';

export const Dialog = styled(Modal)`
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum', 'tnum';
  pointer-events: none;
  position: relative;
  top: 100px;
  width: 520px;
  max-width: calc(100vw - 32px);
  margin: 0 auto;
  padding: 0 0 24px;
`;

export const DialogContent = styled.div`
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: auto;
`;

export const DialogTitle = styled.span`
  font-size: 22px;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
  display: block;
  overflow: hidden;
`;

export const DialogBodyWrapper = styled.div`
  padding: 20px 45px;
`;

export const DialogBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    text-align: center;
    margin-top: 25px;

    button[type='submit'] {
      margin: 0 0 0 auto;
      span {
        right: 0px;
      }
    }
  }

  & div > span {
    position: static;
    display: block;
    text-align: center;
    margin: 15px 0;
  }

  input {
    margin-bottom: 15px !important;
  }

  .jbQxwO.css-button {
    display: inline-block;
  }
`;

export const DialogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0px auto;
`;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 1);
  }

  span {
    display: block;
    width: 56px;
    height: 56px;
    font-size: 16px;
    font-style: normal;
    line-height: 56px;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
  }
`;
