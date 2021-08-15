import * as S from './styled';

function Body({ body: items, renderBody }: any) {
  return (
    <S.Tbody>
      {items.map((item: any) => (
        <S.Tr key={item._id}>
          {renderBody().map((renderItem: any, index: number) => (
            <S.Td key={index}>{renderItem.render(item)}</S.Td>
          ))}
        </S.Tr>
      ))}
    </S.Tbody>
  );
}

export default Body;
