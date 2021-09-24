import styled, { keyframes } from 'styled-components';

const pl2 = keyframes`
  100% {box-shadow: 0 0 0 40px #0000}
`;

export const Loader = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.yellow};
  box-shadow: 0 0 0 0 #0004;
  animation: ${pl2} 1.5s infinite linear;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:after,
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: 0 0 0 0 #0004;
    animation: inherit;
    animation-delay: -0.5s;
  }

  &:after {
    animation-delay: -1s;
  }
`;
