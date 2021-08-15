import styled from 'styled-components';

export const Btn = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 30px;
  height: 30px;
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
  height: 4px;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: 5px;
`;

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 150%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.7)
  );
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
  padding: 3rem;
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

  a {
    position: relative;
    text-decoration: none;
    font-size: 2.3rem;
    width: fit-content;
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors.blue};
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
    font-weight: 600;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.yellow2};
      background-clip: text;
    }

    &::after {
      position: absolute;
      content: '';
      bottom: -4px;
      left: 0;
      background: linear-gradient(to right, #8b743d, #ecdfbf);
      height: 1px;
      width: 0;
      transition: all 0.3s;
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
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
    }
  }
`;
