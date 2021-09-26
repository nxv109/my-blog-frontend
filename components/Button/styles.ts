import styled, { css } from 'styled-components';

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fontFamilies.en};
  outline: none;
  border: none;
  box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.blue};
  font-size: 1.4rem;
  cursor: pointer;

  &.primary {
    background: ${({ theme }) => theme.colors.blue};
    color: #ecdfbf;
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
  }

  ${({ $size }: { $size?: string }) => {
    if (!$size) return null;

    const sizes: Record<string, any> = {
      small: css`
        padding: 0.5rem 1rem;
      `,
      normal: css`
        padding: 1rem 1.5rem;
      `,
      large: css`
        padding: 1.5rem 2rem;
      `,
    };

    return sizes[$size];
  }}
`;

export const Link = styled(Button)`
  &.primary {
    background: ${({ theme }) => theme.colors.blue};
    color: #ecdfbf;
  }
`;
