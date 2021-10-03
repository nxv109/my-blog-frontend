import * as S from './styles';

function Loader({ isLoading }: { isLoading?: boolean }) {
  if (isLoading) {
    return <S.Spinner />
  }
  return <S.Loader />;
}

export default Loader;
