import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Code = styled.div`
  font-size: 8rem;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-right: 2rem;
  .zero {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Text = styled.p`
  font-size: 3rem;
`;
