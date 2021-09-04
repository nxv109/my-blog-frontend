import Image from 'next/image';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Button from '@/components/Button';

import { projects } from '@/constants/projects';

import * as S from '@/styles/pages/about-me';

function AboutMe() {
  const handleDetail = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <S.Wrapper>
      <Header title="About me" />
      <Body noPadding>
        <S.InnerWrapper>
          <S.InfoBox>
            <S.InfoLeft>
              <S.Avatar>
                <Image
                  src="https://i.ibb.co/Mhwkp8z/profile-small-size.jpg"
                  layout="fill"
                  alt="avatar"
                />
              </S.Avatar>
            </S.InfoLeft>
            <S.InfoRight>
              <S.GreetBox>
                <S.Greeting>Hi!</S.Greeting>
                <S.Name>I'm Vinh</S.Name>
              </S.GreetBox>
              <S.BioBox>
                <S.Profession>Front-end Developer.</S.Profession>
                <S.BioText>
                  I'm a Front-end Developer always happy, smiley, and full of
                  energy, I have experience in Website development and nice work
                  with Reactjs, Redux, Nodejs, MongoDB, Html, Css,...
                  Additionally, I have knowledge about Vuejs, Mobx, Grapql,...
                  And ready to study other techs.
                </S.BioText>
              </S.BioBox>
            </S.InfoRight>
          </S.InfoBox>
          <S.SectionBox>
            <S.Title>Projects I did</S.Title>
            <S.Content>
              {projects.map((project, index) => (
                <S.Project key={index}>
                  <S.Image>
                    <Image
                      src={project.imgURL}
                      layout="fill"
                      alt={project.name}
                    />
                  </S.Image>
                  <S.ProjectInfo>
                    <S.ProjectName>{project.name}</S.ProjectName>
                    <S.ProjectDescription>
                      {project.description}
                    </S.ProjectDescription>
                    <Button
                      className="primary"
                      size="normal"
                      onClick={() => handleDetail(project.url)}
                    >
                      View detail
                    </Button>
                  </S.ProjectInfo>
                </S.Project>
              ))}
            </S.Content>
          </S.SectionBox>
          <S.SectionBox>
            <S.Title>Follow me</S.Title>
            <S.Content>
              <S.SocialWrapper>
                <S.SocialLink>
                  <a
                    href="https://www.facebook.com/nguyenxuanvinh109/"
                    target="_blank"
                  >
                    <S.Logo
                      src="https://i.ibb.co/n1bRD9h/facebook-circular-logo.png"
                      width="30"
                    />
                  </a>
                </S.SocialLink>
                <S.SocialLink>
                  <a href="https://twitter.com/nguoitoiyeu109" target="_blank">
                    <S.Logo
                      src="https://i.ibb.co/RzynQ99/twitter.png"
                      width="30"
                    />
                  </a>
                </S.SocialLink>
                <S.SocialLink>
                  <a
                    href="https://www.linkedin.com/in/v%C4%A9nh-nguy%E1%BB%85n-967606185/"
                    target="_blank"
                  >
                    <S.Logo
                      src="https://i.ibb.co/5kc86Gh/linkedin.png"
                      width="30"
                    />
                  </a>
                </S.SocialLink>
                <S.SocialLink>
                  <a href="https://github.com/nxv109" target="_blank">
                    <S.Logo
                      src="https://i.ibb.co/YNdhSp1/github.png"
                      width="30"
                    />
                  </a>
                </S.SocialLink>
              </S.SocialWrapper>
            </S.Content>
          </S.SectionBox>
        </S.InnerWrapper>
      </Body>
    </S.Wrapper>
  );
}

export default AboutMe;
