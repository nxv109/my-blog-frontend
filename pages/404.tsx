import Header from '@/components/Header';
import Body from '@/components/Body';

import * as S from '@/styles/pages/404';

function Notfound() {
  return (
    <S.Wrapper>
      <Header title="404 Not Found" />
      <Body>
        <S.Box>
          <S.Code>
            <span>4</span>
            <span className="zero">0</span>
            <span>4</span>
          </S.Code>
          <S.Text>Not found</S.Text>
        </S.Box>
      </Body>
    </S.Wrapper>
  );
}

export default Notfound;
