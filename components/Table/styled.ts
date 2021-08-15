import styled from 'styled-components';

interface IThProps {
  width?: string;
}

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
`;

export const Th = styled.th<IThProps>`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  padding: 10px 5px;
`;

export const Td = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  padding: 10px 5px;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
`;
