import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
  width: 100%;
  height: 100%;
`;

export const PostWrapper = styled.div`
  width: 100%;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
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
  margin: 1rem 0 2rem;
  text-transform: capitalize;
  text-align: center;
  font-size: 2.5rem;
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

export const Tag = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 5px;
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
    line-height: 3rem;
  }

  & > * {
    margin: 1.6rem 0;
  }

  blockquote {
    background: ${({ theme }) => theme.colors.gray2};
    border-left: 5px solid ${({ theme }) => theme.colors.yellow};
    padding: 1rem;
    margin: 0;
  }

  pre {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.sm} !important;
    padding: 1rem;
    margin: 0;
    border-radius: 5px;
    overflow-x: auto;

    span {
      color: ${({ theme }) => theme.colors.white} !important;
      font-size: ${({ theme }) => theme.fontSizes.sm} !important;
    }
  }

  code {
    background: ${({ theme }) => theme.colors.blue};
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;
