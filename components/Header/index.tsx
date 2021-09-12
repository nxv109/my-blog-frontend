import { useRouter } from 'next/router';
import * as S from './styles';

type Props = {
  title: string;
  showBackButton?: boolean;
};

function Header({ title, showBackButton }: Props) {
  const router = useRouter();

  return (
    <S.Header>
      <S.Left>
        {showBackButton && (
          <S.BackButton
            onClick={() => router.back()}
            className="material-icons"
          >
            arrow_back_ios
          </S.BackButton>
        )}
        <S.Title>{title}</S.Title>
      </S.Left>
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
