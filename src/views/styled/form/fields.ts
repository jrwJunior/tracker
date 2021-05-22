import styled, { css } from 'styled-components';
import { Input } from '@rebass/forms';
import Select from 'react-select';

export const FieldGroup = styled.div`
  position: relative;
  display: flex;

  & > div {
    min-width: 320px;
    margin-right: 95px;
    margin-bottom: 38px;

    .css-4y926w {
      margin-bottom: 0;
    }
  }
`;

export const Field = styled(Input)<{ isErrors?: boolean }>`
  &.css-4y926w {
    border: 0;
    border-bottom: 2px solid #000;
    padding: 6px 8px;
    margin-bottom: 40px;
    transition: all 0.15s;
  }

  ${({ isErrors }) =>
    isErrors &&
    css`
      &.css-4y926w {
        border-color: #ff4d4f;
        animation: transform_error 0.2s;

        &:focus {
          outline: none;
          border-bottom: 2px solid #ff4d4f;
          box-shadow: 0 2px 0 rgb(255 24 24 / 20%);
        }
      }
    `}

  &:focus {
    outline: none;
    border-bottom: 2px solid #40a9ff;
    box-shadow: 0 2px 0 rgb(24 144 255 / 20%);
  }

  &::placeholder {
    font-size: 16px;
  }

  @keyframes transform_error {
    33% {
      transform: translateX(-7px);
    }
    66% {
      transform: translateX(7px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const FieldPhone = styled.div<{ isErrors?: boolean }>`
  .form-control {
    width: 100%;
    font-size: 16px;
    padding: 9px 8px;
    border: 0;
    border-bottom: 2px solid #000;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-bottom: 2px solid #40a9ff;
      box-shadow: 0 2px 0 rgb(24 144 255 / 20%);
    }

    &::placeholder {
      font-size: 16px;
      opacity: 0.6;
    }
  }

  ${({ isErrors }) =>
    isErrors &&
    css`
      .form-control {
        border-color: #ff4d4f;
        animation: transform_error 0.2s;

        &:focus {
          outline: none;
          border-bottom: 1px solid #ff4d4f;
          box-shadow: 0 2px 0 rgb(255 24 24 / 20%);
        }
      }
    `}
`;

export const FieldPassword = styled(Field)<{ isErrors?: boolean }>``;

export const FieldSelect = styled(Select)<{
  variant?: string;
  isErrors?: boolean;
}>`
  &.css-select {
    width: 150px;

    .css-1okebmr-indicatorSeparator {
      display: none;
    }
    .css-1wa3eu0-placeholder,
    .css-1uccc91-singleValue {
      font-size: 18px;
    }
  }

  & .css-yk16xz-control {
    ${({ variant }) =>
      variant === 'gradient' &&
      css`
        border-radius: 10px;
        border: double 2px transparent;
        background-image: linear-gradient(white, white),
          linear-gradient(to right, #afffff, #faffa0);
        background-origin: border-box;
        background-clip: padding-box, border-box;

        &:hover {
          border-color: transparent;
        }
      `}

    ${({ variant }) =>
      variant === 'line' &&
      css`
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid #000;
        border-radius: 0;

        &.css-938pci-singleValue {
          opacity: 1;
        }

        &:hover {
          border-color: #000;
        }
      `}
    cursor: pointer;

    & span:first-child {
      right: 25px;
    }
  }

  & .css-1pahdxg-control {
    ${({ variant }) =>
      variant === 'gradient' &&
      css`
        border-radius: 10;
        border-width: 2px;
        box-shadow: none;
        border-color: #40a9ff;

        &:hover {
          border-color: #40a9ff;
        }
      `}
    ${({ variant }) =>
      variant === 'line' &&
      css`
        border: 0;
        border-bottom: 2px solid #40a9ff;
        border-radius: 0;
        box-shadow: none;

        &:hover {
          border-bottom: 2px solid #40a9ff;
        }
      `}
  }

  & .css-26l3qy-menu {
    margin-top: 0;
    border-radius: 0;
    border: 1px solid #40a9ff;
    border-top: 0;

    .css-1n7v3ny-option {
      font-weight: 500;
      background-color: rgba(34, 45, 71, 0.05);
      cursor: pointer;
    }
  }

  ${({ isErrors }) =>
    isErrors &&
    css`
      .css-yk16xz-control {
        border-color: #ff4d4f;
        animation: transform_error 0.2s;

        &:focus {
          outline: none;
          border-bottom: 1px solid #ff4d4f;
          box-shadow: 0 2px 0 rgb(255 24 24 / 20%);
        }
      }
    `}
`;

export const FieldPreffix = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  opacity: 0.7;
  cursor: pointer;
`;

export const FieldError = styled.span`
  position: absolute;
  left: 0;
  bottom: -25px;
  font-size: 14px;
  line-height: 1.5715;
  color: #ff4d4f;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;
