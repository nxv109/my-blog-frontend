import { ReactNode } from 'react';

import * as S from './styles';

type Props = {
  noPadding?: boolean;
  children: ReactNode;
};

function Body({ children, noPadding }: Props) {
  return <S.Body $noPadding={noPadding}>{children}</S.Body>;
}

export default Body;
