import Image from 'next/image';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Head from '@/components/Head';

import useUser from '@/hooks/useUser';

import { DEFAULT_IMAGES } from '@/constants';

import * as S from '@/styles/pages/profile';

function Profile() {
  const user = useUser();
  if (!user?.data) return <p>Login</p>;

  return (
    <S.Wrapper>
      <Head title={user.data.name || 'Profiles'} />
      <Header title="Profiles" />
      <Body>
        <S.Avatar>
          <Image
            src={user.data.avatar || DEFAULT_IMAGES.AVATAR}
            layout="fill"
            alt="avatar"
          />
        </S.Avatar>
        <S.Info>
          <S.Name>{user.data.name}</S.Name>
          <S.Bio>{user.data.bio}</S.Bio>
        </S.Info>
      </Body>
    </S.Wrapper>
  );
}

export default Profile;
