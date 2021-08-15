import Header from './Header';
import Body from './Body';

import { IPostItems } from '@/typings/posts';

import * as S from './styled';

interface IProps {
  header: Record<string, any>;
  body: IPostItems[];
  renderBody: any;
}

function Table({ header, body, renderBody }: IProps) {
  return (
    <S.Table>
      <Header header={header} />
      <Body body={body} renderBody={renderBody} />
    </S.Table>
  );
}

export default Table;
