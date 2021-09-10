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
        <S.Address>
          <S.Label> Địa chỉ</S.Label>
          <S.Text>0337892690 | nxv109@gmail.com</S.Text>
        </S.Address>
      </S.Header>
      <S.Section>
        <S.Title>PROFILE</S.Title>
        <ul>
          <li>
            Duis a quam non nequelobortismalesuada. Praesenteuismod.
            Donecnullaaugue, venenatisscelerisque, dapibus a, consequat at, leo
          </li>
          <li>
            Duis a quam non nequelobortismalesuada. Praesenteuismod.
            Donecnullaaugue, venenatisscelerisque, dapibus a, consequat at, leo
          </li>
          <li>
            Duis a quam non nequelobortismalesuada. Praesenteuismod.
            Donecnullaaugue, venenatisscelerisque, dapibus a, consequat at, leo
          </li>
        </ul>
      </S.Section>
      <S.Section>
        <S.Title>SKILLS</S.Title>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          <li>Skill 5</li>
        </ul>
      </S.Section>
      <S.Section>
        <S.Title>EXPERIENCE</S.Title>
        <S.Experience>
          <S.OrganizationWrapper>
            <S.Left>
              <S.OrganizationName>Ten cong ty</S.OrganizationName>
              <S.PositionName>Ten vi tri</S.PositionName>
            </S.Left>
            <S.Right>
              <S.CompanyAddress>Dia diem</S.CompanyAddress>
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
        <S.Experience>
          <S.OrganizationWrapper>
            <S.Left>
              <S.OrganizationName>Ten cong ty</S.OrganizationName>
              <S.PositionName>Ten vi tri</S.PositionName>
            </S.Left>
            <S.Right>
              <S.CompanyAddress>Dia diem</S.CompanyAddress>
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
        <S.Experience>
          <S.OrganizationWrapper>
            <S.Left>
              <S.OrganizationName>Ten cong ty</S.OrganizationName>
              <S.PositionName>Ten vi tri</S.PositionName>
            </S.Left>
            <S.Right>
              <S.CompanyAddress>Dia diem</S.CompanyAddress>
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
            <S.OrganizationName>Ten cong ty</S.OrganizationName>
            <S.PositionName>Ten vi tri</S.PositionName>
          </S.Left>
          <S.Right>
            <S.CompanyAddress>Dia diem</S.CompanyAddress>
            <S.CompletionTime>
              Thoi gian bat dau - thoi gian ket thuc
            </S.CompletionTime>
          </S.Right>
        </S.OrganizationWrapper>
      </S.Section>
    </S.Wrapper>
  );
}

Cv.Layout = OutSiderLayout;

export default Cv;
