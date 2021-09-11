import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
`;

export const InnerWrapper = styled.div`
  @media (min-width: 637px) {
    height: 100%;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.yellow3};

  @media (max-width: 637px) {
    flex-wrap: wrap;
  }
`;

export const InfoLeft = styled.div`
  margin-right: 4rem;

  @media (max-width: 637px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const InfoRight = styled.div``;

export const Avatar = styled.div`
  position: relative;
  width: 200px;
  max-width: 100%;
  height: 300px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const GreetBox = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.blue};

  @media (max-width: 637px) {
    font-size: 4rem;
  }
`;

export const Greeting = styled.span`
  margin-right: 3rem;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.yellow2};
`;

export const BioBox = styled.div``;

export const Profession = styled.h3`
  margin-bottom: 1rem;
`;

export const BioText = styled.div`
  & > p {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const SectionBox = styled.div``;

export const Title = styled.h3`
  background: url('https://i.ibb.co/wwb3vG5/dotted-bg.png');
  text-align: center;
  font-size: 3rem;
  margin: 3rem 0;
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  padding: 3rem;
`;

export const Project = styled.div`
  display: flex;
  box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Image = styled(Avatar)`
  width: 20%;
  height: auto;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 637px) {
    display: none;
  }
`;

export const ProjectName = styled.h4`
  font-size: 2.2rem;
  margin-bottom: 1rem;

  @media (max-width: 634px) {
    margin-bottom: 0;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 0 0 2rem;

  & > button {
    margin-top: auto;
    margin-left: auto;
  }

  @media (max-width: 634px) {
    padding: 5px;
  }
`;

export const ProjectDescription = styled.p`
  @media (max-width: 637px) {
    margin-bottom: 1rem;
  }
`;

export const SocialLink = styled.div`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Logo = styled.img``;
