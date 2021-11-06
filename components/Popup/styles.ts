import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import Button from '@/components/Button';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 1rem;
  background: ${({ theme }) => rgba(theme.colors.black, 0.5)};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  width: 325px;
  max-width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: 4px solid ${({ theme }) => theme.colors.gray4};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray3};
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  ${({ $type }: { $type?: string }) => {
    if (!$type) return null;

    const types: Record<string, any> = {
      normal: css`
        color: ${({ theme }) => theme.colors.black};
      `,
      warning: css`
        color: ${({ theme }) => theme.colors.yellow};
      `,
      serious: css`
        color: ${({ theme }) => theme.colors.red};
      `,
    };

    return types[$type];
  }}
`;

export const Content = styled.div``;

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const CancelBtn = styled(Button)`
  width: 100px;
`;

export const AcceptBtn = styled(Button)`
  width: 100px;
`;
