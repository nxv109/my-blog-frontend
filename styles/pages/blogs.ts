import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
`;

export const PostWrapper = styled.div`
  width: 100%;

  img {
    max-width: 70% !important;
    min-width: 50% !important;
    display: block;
    margin: 0 auto;
  }
`;

export const PostItem = styled.a`
  display: flex;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:not(:first-child) {
    padding-top: 2rem;
  }

  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 150px;
  max-width: 100%;
  margin-right: 1rem;

  img {
    max-width: 100% !important;
    min-width: 100% !important;
    object-fit: cover;
    margin: 0 !important;
  }
`;

export const Info = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  width: 100%;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const Summary = styled.div`
  width: 100%;
`;

// post
export const PostTitle = styled.h1`
  margin: 1rem 0;
  text-transform: capitalize;
  text-align: center;
  font-size: 2.5rem;
`;

export const PostAvatar = styled.div`
  margin: 2rem 0;
`;

export const PostContent = styled.p`
  text-align: justify;
`;
