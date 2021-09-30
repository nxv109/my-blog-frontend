import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Tag = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  text-decoration: none;
  padding: 0.2rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.yellow2};
    background: ${({ theme }) => theme.colors.yellow3};
  }
`;

export const TagTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
`;
