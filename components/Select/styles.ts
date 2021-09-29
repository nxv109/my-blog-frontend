import styled from 'styled-components';
import { rgba } from 'polished';

export const Select = styled.select`
  width: 100%;
  height: 48px;
  outline: none;
  border: none;
  padding: 1.5rem 0;
  box-shadow: 0 1px 0 ${({ theme }) => rgba(theme.colors.blue, 0.2)};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => rgba(theme.colors.black, 0.5)};

  option {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme}) => theme.colors.gray1};
  }
`;
