import styled, { css } from 'styled-components';

export const Body = styled.section`
  position: relative;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 212, 255, 0) 100%
  );
  color: ${({ theme }) => theme.colors.blue};
  padding: 1rem;
  padding-bottom: 7rem;
  height: calc(100% - 70px);

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow: auto;

  ${({ $noPadding }: { $noPadding?: boolean }) => {
    if (!$noPadding) return null;
    return css`
      padding: 0;
    `;
  }}

  p {
    letter-spacing: 1px;
    word-spacing: 2px;
    line-height: 2rem;
  }
`;
