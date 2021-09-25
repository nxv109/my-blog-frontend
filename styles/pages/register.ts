import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 30px;
  }
`;

export const Container = styled.div`
  width: 400px;
  max-width: 100%;

  button {
    margin: auto;
    display: flex;
  }
`;

export const FormGroup = styled.div`
  & > div,
  input {
    padding: 1rem;
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const LoginLink = styled.a`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  margin-top: 1rem;
`
