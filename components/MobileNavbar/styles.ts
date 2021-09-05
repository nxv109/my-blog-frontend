import styled from 'styled-components';

export const Btn = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 25px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Line = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.yellow};
  animation: line 2s;

  @keyframes line {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DiagonalLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.yellow};

  &:nth-child(1) {
    transform: rotate(45deg);
    animation: diagonalLine1 2s;
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
    animation: diagonalLine2 2.5s;
  }

  @keyframes diagonalLine1 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes diagonalLine2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom, rgb(35 35 35), rgb(0 0 0 / 70%));
  transition: all 1s ease;
  padding: 0 5rem;
  z-index: 1;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  display: flex;
  flex-flow: column;

  &__login-btn,
  &__register-btn {
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 1.5rem;
    font-size: 1.4rem;
    cursor: pointer;
  }

  &__login-btn {
    background: transparent;
    color: #8b743d;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 0 #8b743d;
  }

  &__register-btn {
    background: #12172d;
    color: #ecdfbf;
    box-shadow: 1px 1px 0 #12172d;
  }
`;

export const NavbarItems = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .run-up {
    &:nth-child(1) {
      animation: runUp 1s;
      animation-fill-mode: forwards;
      animation-delay: 0.6s;
    }

    &:nth-child(2) {
      animation: runUp 1s;
      animation-fill-mode: forwards;
      animation-delay: 0.9s;
    }

    &:nth-child(3) {
      animation: runUp 1s;
      animation-fill-mode: forwards;
      animation-delay: 1.2s;
    }

    @keyframes runUp {
      from {
        top: 30%;
        opacity: 0;
      }
      to {
        top: 0;
        opacity: 1;
      }
    }
  }

  a {
    position: relative;
    opacity: 0;
    text-decoration: none;
    font-size: 2.3rem;
    width: fit-content;
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors.white};
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.yellow2};
      background-clip: text;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    @media (max-width: 1024px) {
      font-size: 3rem;
    }
  }
`;

export const UserSection = styled.div`
  border-radius: 2rem;
  margin-top: auto;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;

  button {
    &:first-child {
      margin-bottom: 1rem;
      color: #ecdfbf;
    }
  }
`;
