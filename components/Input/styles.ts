import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 1.5rem 0;
  box-shadow: 0 1px 0 ${({ theme }) => rgba(theme.colors.blue, 0.2)};
  font-size: ${({ theme }) => theme.fontSizes.md};

  &::placeholder {
    letter-spacing: 2px;
    color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
  }

  ${({ $size }: { $size?: string }) => {
    if (!$size) return null;

    const sizes: Record<string, any> = {
      small: css`
        height: 35px;
      `,
      normal: css`
        height: 37px;
      `,
      large: css`
        height: 39px;
      `,
    };

    return sizes[$size];
  }}
`;
