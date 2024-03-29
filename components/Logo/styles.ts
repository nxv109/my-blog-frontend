import styled, { keyframes } from 'styled-components';

export const Logo = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  text-decoration: none;
  border-radius: 5px;
  min-width: 150px;

  @media (max-width: 1024px) {
    max-width: 50%;
    margin: 0 auto 5rem auto;
  }

  @media (max-width: 637px) {
    max-width: 100%;
    margin: 0 auto 5rem auto;
  }

  & > img {
    width: 100%;
  }
`;
