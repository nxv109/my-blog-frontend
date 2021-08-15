import Image from 'next/image';

import Header from '@/components/Header';
import Body from '@/components/Body';

import useUser from '@/hooks/useUser';

import { DEFAULT_IMAGES } from '@/constants';

import * as S from '@/styles/pages/profile';

function Profile() {
  const user = useUser();
  if (!user) return <p>Login</p>;

  return (
    <S.Wrapper>
      <Header title="About Myself" />
      <Body>
        <S.Avatar>
          <Image
            src={user.avatar || DEFAULT_IMAGES.AVATAR}
            layout="fill"
            alt="avatar"
          />
        </S.Avatar>
        <S.Info>
          <S.Name>{user.name}</S.Name>
          <S.Bio>{user.bio}</S.Bio>
        </S.Info>
      </Body>
    </S.Wrapper>
  );
}

export default Profile;
