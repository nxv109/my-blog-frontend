import * as S from './styled';

function Header({ header: listThs }: any) {
  return (
    <S.Thead>
      <S.Tr>
        {listThs.map((item: any, index: number) => (
          <S.Th key={index} width={item.width || '100'}>
            {item.render()}
          </S.Th>
        ))}
      </S.Tr>
    </S.Thead>
  );
}

export default Header;
