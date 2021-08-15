import * as S from './styles';

type Props = {
  title: string;
}

function Header({ title }: Props) {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      {/* TODO: Do it after */}
      {/* <S.InputSearch
        type="text"
        className="xv-profile__search"
        placeholder="Search..."
      /> */}
    </S.Header>
  );
}

export default Header;
