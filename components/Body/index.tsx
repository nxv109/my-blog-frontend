import { ReactNode, useEffect, useRef, useState } from 'react';

import useScroll from '@/hooks/useScroll';

import * as S from './styles';

type Props = {
  noPadding?: boolean;
  children: ReactNode;
  callback?: (e: EventTarget) => void;
};

function Body({ children, noPadding, callback }: Props) {
  const [bodyElm, setBodyElm] = useState(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      setBodyElm(bodyRef.current);
    }
  }, [bodyRef.current]);

  useScroll(bodyElm, callback);

  return (
    <S.Body ref={bodyRef} $noPadding={noPadding}>
      {children}
    </S.Body>
  );
}

export default Body;
