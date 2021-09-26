import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

export const PostWrapper = styled.div`
  width: 100%;
`;

export const PostItem = styled.a`
  display: flex;
  align-items: flex-start;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  &:not(:first-child) {
    padding-top: 1rem;
  }

  &:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 20%;
  margin-right: 1rem;

  img {
    width: 100%;
    object-fit: cover;
    margin: 0;
  }
`;

export const Info = styled.div``;

export const Title = styled.div`
  width: 100%;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: 0.4rem;
`;

export const Summary = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 15px;

  /* truncate multiline */
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// post
export const PostTitle = styled.h1`
  margin: 1rem 0 3rem;
  text-transform: capitalize;
  text-align: center;
  font-size: 2.5rem;
`;

export const PostAvatar = styled.div`
  margin: 2rem 0;

  img {
    width: 100%;
  }
`;

export const PostContent = styled.p`
  * {
    font-family: ${({ theme }) => theme.fontFamilies.en} !important;
    line-height: 2.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.md} !important;
    line-height: 1.6rem;
  }

  & > * {
    margin: 2.5rem 0;
  }

  blockquote {
    background: ${({ theme }) => theme.colors.gray2};
    border-left: 5px solid ${({ theme }) => theme.colors.yellow};
    padding: 1rem;
    margin: 0;
  }

  pre {
    background: ${({ theme }) => theme.colors.gray3};
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem;
    margin: 0;
    max-height: 500px;
    overflow-x: auto;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;
