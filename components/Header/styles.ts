import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 1.5rem;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  width: 28px;
  height: 28px;
`;

export const Title = styled.div`
  font-size: 2.3rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.yellow};
  word-spacing: 3px;
  word-break: break-all;
  text-transform: uppercase;
  margin-right: 2rem;

  width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
