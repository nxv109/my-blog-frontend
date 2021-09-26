import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export const InputWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 0 ${({ theme }) => rgba(theme.colors.blue, 0.2)};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  color: ${({ theme }) => rgba(theme.colors.black, 0.5)};
`;

export const Input = styled.input`
  display: none;
  padding: 1.5rem 0;

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
