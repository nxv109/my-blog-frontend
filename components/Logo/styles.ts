import styled, { keyframes } from 'styled-components';

export const Logo = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  text-decoration: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.black};

  /* &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 83px;
    height: 100%;
    background: ${({ theme }) => theme.colors.blue};
    z-index: -1;
  } */

  & > img {
    width: 100%;
  }
`;
