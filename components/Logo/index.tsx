import Link from 'next/link';

import { DEFAULT_IMAGES } from '@/constants';

import * as S from './styles';

function Logo({ isDisabledLink = false }: { isDisabledLink?: boolean }) {
  return (
    <>
      {isDisabledLink ? (
        <S.Logo>
          <img src={DEFAULT_IMAGES.LOGO} alt="logo" />
        </S.Logo>
      ) : (
        <Link href="/" passHref>
          <S.Logo>
            <img src={DEFAULT_IMAGES.LOGO} alt="logo" />
          </S.Logo>
        </Link>
      )}
    </>
  );
}

export default Logo;
