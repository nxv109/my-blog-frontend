import styled from 'styled-components';
import { rgba } from 'polished';

export const Textarea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  padding: 1.5rem 0;
  box-shadow: 0 1px 0 ${({ theme }) => rgba(theme.colors.blue, 0.2)};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    letter-spacing: 2px;
    color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
  }
`;
