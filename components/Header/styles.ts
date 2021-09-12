import styled from 'styled-components';

export const Header = styled.header`
  display: inline-block;
  margin-bottom: 2rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.yellow};
  text-decoration: underline;
  word-spacing: 3px;
  word-break: break-all;
  text-transform: uppercase;
  margin-right: 2rem;
`;

export const InputSearch = styled.input`
  outline: none;
  border: 1px dotted ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.yellow};
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 5px;
  height: 4rem;
  width: 30%;
  padding: 7px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.yellow1};
  }
`;
