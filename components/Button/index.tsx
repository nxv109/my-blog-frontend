import { ReactNode } from 'react';
import Link from 'next/link';

import * as S from './styles';

type Props = {
  className?: string;
  url?: string;
  children: ReactNode;
  isLink?: boolean;
  size?: string;
  disabled?: boolean;
  onClick?: () => void;
};

function Button({
  className,
  isLink = false,
  url = '/',
  children,
  size = 'normal',
  disabled = false,
  onClick,
}: Props) {
  return (
    <>
      {isLink ? (
        <Link href={url}>
          <S.Link $size={size} className={className}>
            {children}
          </S.Link>
        </Link>
      ) : (
        <S.Button
          className={className}
          $size={size}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </S.Button>
      )}
    </>
  );
}

export default Button;
