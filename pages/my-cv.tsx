import { useEffect } from 'react';
import Link from 'next/link';
import Head from '@/components/Head';
import OutSiderLayout from '@/components/Layout/OutSiderLayout';

import * as S from '@/styles/pages/my-cv';

function hideCircles() {
  const circles: any = document.getElementsByClassName('circle');
  const body = document.getElementsByTagName('body')[0];
  body.style.overflow = 'auto';

  Array.from(circles).forEach((circle: any) => {
    circle.style.display = 'none';
  });
}

function Cv() {
  useEffect(() => {
    hideCircles();
  }, []);

  return (
    <S.Wrapper>
      <Head title="My CV" />
      {/* <h3 style={{ textAlign: 'center' }}>Coming soon!</h3> */}
      <S.BackHome>
        <Link href="/">Home</Link>
      </S.BackHome>
      <S.Header>
        <S.Name>Nguyen Xuan Vinh</S.Name>
        <S.Info>
          <S.Text style={{ marginBottom: '1rem' }}>Front-end Developer</S.Text>
          <S.Text>Nui Thanh - Quang Nam</S.Text>
          <S.Text>0337892690 | nxv109@gmail.com</S.Text>
        </S.Info>
      </S.Header>
      <S.Section>
        <S.Title>PROFILE</S.Title>
        <ul>
          <li>
            Hi! I'm Vinh, I am an enthusiastic and optimistic front-end
            Developer, with nearly two years of experience and have worked
            through many different projects such as E-commerce, management
            system, product promotion, branding, virtual reality... I have a Bachelor of Practice
            in Software Engineering.
          </li>
          <li>
            I have knowledge of HTML, CSS, Javascript, ReactJS, NextJS,
            Bootstrap, Typescript, Styled-components and Git,... Additionally,
            have a certain understanding of NodeJS, MongoDB, VueJS.
          </li>
          {/* <li>My goal for the next two years is to become a team lead.</li> */}
        </ul>
      </S.Section>
      <S.Section>
        <S.Title>SOFT SKILLS</S.Title>
        <ul>
          <li>Be a Team</li>
          <li>Be optimistic</li>
          <li>Stay focus</li>
          <li>Always learning</li>
        </ul>
      </S.Section>
      <S.Section>
        <S.Title>EXPERIENCE</S.Title>
        <S.Experience>
          <S.OrganizationWrapper>
            <S.Left>
              <S.OrganizationName>Sun Asterisk</S.OrganizationName>
              <S.PositionName>Developer</S.PositionName>
            </S.Left>
            <S.Right>
              <S.CompanyAddress>16 Ly Thuong Kiet, Da Nang</S.CompanyAddress>
              <S.CompletionTime>
                04/2020 - Now
              </S.CompletionTime>
            </S.Right>
          </S.OrganizationWrapper>
          <ul>
            <li>Participate in research and coding.</li>
            <li>Support everyone on the Team.</li>
            <li>Join the knowledge sharing session of the Company.</li>
            <li>Participating projects: E-commerce, management
              systems, product promotion, branding, virtual reality.</li>
          </ul>
        </S.Experience>
      </S.Section>
      <S.Section>
        <S.Title>EDUCATION</S.Title>
        <S.OrganizationWrapper>
          <S.Left>
            <S.OrganizationName>
              FPT Polytechnic | Website programer
            </S.OrganizationName>
            <S.PositionName>Classification</S.PositionName>
          </S.Left>
          <S.Right>
            <S.CompanyAddress>137 Nguyen Thi Thap, Da Nang</S.CompanyAddress>
            <S.CompletionTime>Good</S.CompletionTime>
          </S.Right>
        </S.OrganizationWrapper>
      </S.Section>
    </S.Wrapper>
  );
}

Cv.Layout = OutSiderLayout;

export default Cv;
