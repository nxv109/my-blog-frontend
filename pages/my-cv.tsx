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
      <S.BackHome>
        <Link href="/">Home</Link>
      </S.BackHome>
      <S.Header>
        <S.Name>Nguyễn Xuân Vĩnh</S.Name>
        <S.Info>
          <S.Text style={{marginBottom: '1rem'}}>Front-end Developer</S.Text>
          <S.Text>Núi Thành - Quảng Nam</S.Text>
          <S.Text>0337892690 | nxv109@gmail.com</S.Text>
        </S.Info>
      </S.Header>
      <S.Section>
        <S.Title>PROFILE</S.Title>
        <ul>
          <li>
            My name is Vinh, I am an enthusiastic and optimistic front-end
            Developer, with nearly two years of experience and have worked
            through many different projects such as E-commerce, management
            system, product promotion, branding...I have a Bachelor of Practice
            in Software Engineering.
          </li>
          <li>
            I have knowledge of HTML, CSS, Javascript, ReactJS, NextJS, Bootstrap,
            Typescript, Styled-components and Git,... Additionally, have a certain
            understanding of NodeJS, MongoDB, VueJS.
          </li>
          <li>My goal for the next two years is to become a team lead.</li>
        </ul>
      </S.Section>
      <S.Section>
        <S.Title>SKILLS</S.Title>
        <ul>
          <li>Teamwork</li>
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
                Thoi gian bat dau - thoi gian ket thuc
              </S.CompletionTime>
            </S.Right>
          </S.OrganizationWrapper>
          <ul>
            <li>Gạch đầu dòng nêu rõ vai trò của bản thân tại vị trí này.</li>
            <li>Mỗi gạch đầu dòng bắt đầu bằng một động từ.</li>
            <li>Nên có từ 6-8 gạch đầu dòng cho mỗi vị trí công việc. 2</li>
            <li>Mỗi gạch đầu dòng nên có số liệu kết quả.</li>
            <li>Hướng dẫn them: https://anhtuanle.com/articles/ </li>
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
