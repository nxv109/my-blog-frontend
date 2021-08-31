import styled from 'styled-components';

export const Navbar = styled.nav`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  width: 20%;
  height: 100%;
  padding: 3rem;
  border-right: 5px solid ${({ theme }) => theme.colors.yellow2};
  box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.7);
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

  @media (max-width: 1024px) {
    display: none;
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
