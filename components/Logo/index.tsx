import Link from 'next/link';

import LogoDefault from '@/assets/images/logo.png';

import * as S from './styles';

function Logo({ isDisabledLink = false }: { isDisabledLink?: boolean }) {
  return (
    <>
      {isDisabledLink ? (
        <S.Logo>
          <img src={LogoDefault} alt="logo" />
        </S.Logo>
      ) : (
        <Link href="/" passHref>
          <S.Logo>
            <img src={LogoDefault} alt="logo" />
          </S.Logo>
        </Link>
      )}
    </>
  );
}

export default Logo;
