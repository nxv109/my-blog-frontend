import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 30px;
  }
`;

export const Form = styled.form`
  width: 400px;
  max-width: 100%;

  button {
    margin: auto;
    display: flex;
  }
`;

export const FormGroup = styled.div`
  input {
    padding: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Logo = styled.div`
  margin-bottom: 5rem;
  background: #12172d;
`;

export const RegisterLink = styled.a`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  margin-top: 1rem;
`
