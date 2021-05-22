import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    width: 100%;
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.52947;
    font-weight: normal;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    direction: ltr;
    color: #323232;
    background-color: #fff;
    overflow-x: hidden;
  }

  #root, #shell, .root {
    min-width: 320px;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
`;

export default GlobalStyle;
