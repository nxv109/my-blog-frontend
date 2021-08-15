import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 3rem;
`;

export const InnerWrapper = styled.div`
  height: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.yellow3};
`;

export const InfoLeft = styled.div`
  margin-right: 10rem;
`;

export const InfoRight = styled.div``;

export const Avatar = styled.div`
  position: relative;
  width: 200px;
  max-width: 100%;
  height: 400px;
  border-right: 5px solid ${({ theme }) => theme.colors.yellow2};
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const GreetBox = styled.h2`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.blue};
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

export const BioText = styled.p``;

export const ProjectBox = styled.div``;

export const Title = styled.h3`
  text-align: center;
  font-size: 3rem;
  margin: 3rem 0;
`;

export const Projects = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  padding: 3rem;
`;

export const Project = styled.div`
  display: flex;
  box-shadow: 5px 5px 15px -6px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const Image = styled(Avatar)`
  width: 200px;
  height: 200px;
`;

export const ProjectName = styled.h4`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 1rem 1rem 2rem;

  & > button {
    margin-top: auto;
    margin-left: auto;
  }
`;

export const ProjectDescription = styled.p``;
