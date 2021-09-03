import { createGlobalStyle, css } from 'styled-components';
import { rgba } from 'polished';

const reset = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    font-family: inherit;
  }

  img {
    vertical-align: middle;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
`;

const base = css`
  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamilies.en};
    font-size: 1.6rem;
    line-height: 1.5;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 100%;
    margin: 0 auto;
  }

  main {
    background: linear-gradient(to right top, #12172d, #242b4e);
    height: 100vh;
    display: flex;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
  }

  button {
    padding: 0;
    border: 0;
    outline: 0;
    background: none;
    cursor: pointer;
  }

  #app {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .xv-profile {
    position: relative;
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
    );
    width: 1200px;
    max-width: 100%;
    height: 70%;
    margin: auto;
    backdrop-filter: blur(2px);
    box-shadow: ${({ theme }) =>
      `0px 0px 20px 5px ${rgba(theme.colors.white, 0.2)}`};
    z-index: 3;
    display: flex;

    @media (max-width: 1024px) {
      height: 100%;
      border-radius: 0;
    }
  }

  // editor
  .editor-height {
    min-height: 275px;
  }

  .editor-wrapper {
    box-shadow: 0 1px 0 ${({ theme }) => rgba(theme.colors.blue, 0.2)};
  }

  // circle decor background
  .circle {
    position: absolute;
    background: ${({ theme }) => rgba(theme.colors.yellow, 0.5)};
    border-radius: 50%;
  }

  .circle1 {
    width: 20rem;
    height: 20rem;
    bottom: 10%;
    left: 12%;
    animation: circle1 10s 0.3s infinite;
  }

  .circle2 {
    width: 25rem;
    height: 25rem;
    top: 10%;
    right: 10%;
    animation: circle2 10s 0.6s infinite;
  }

  .circle3 {
    width: 10rem;
    height: 10rem;
    top: 55%;
    left: 55%;
    animation: circle3 10s 0.9s infinite;
  }

  @keyframes circle1 {
    0% {
      bottom: 10%;
      left: 12%;
    }

    25% {
      bottom: 5%;
      left: 17%;
    }

    45% {
      bottom: 10%;
      left: 12%;
    }

    85% {
      bottom: 17%;
      left: 5%;
    }

    100% {
      bottom: 10%;
      left: 12%;
    }
  }

  @keyframes circle2 {
    0% {
      top: 10%;
      right: 10%;
    }

    25% {
      top: 5%;
      right: 15%;
    }

    45% {
      top: 10%;
      right: 10%;
    }

    85% {
      top: 15%;
      right: 5%;
    }

    100% {
      top: 10%;
      right: 10%;
    }
  }

  @keyframes circle3 {
    0% {
      top: 55%;
      left: 55%;
    }

    25% {
      top: 50%;
      left: 60%;
    }

    45% {
      top: 55%;
      left: 55%;
    }

    85% {
      top: 60%;
      left: 50%;
    }

    100% {
      top: 55%;
      left: 55%;
    }
  }
`;

export default createGlobalStyle`
  ${reset}
  ${base}
`;
