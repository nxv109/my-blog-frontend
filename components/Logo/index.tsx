import Link from 'next/link';

import LogoDefault from '@/assets/images/logo.png';

import * as S from './styles';

function Logo() {
  return (
    <Link href="/" passHref>
      <S.Logo>
        <img src={LogoDefault} alt="logo" />
      </S.Logo>
    </Link>
  );
}

export default Logo;
