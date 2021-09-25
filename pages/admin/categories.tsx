import Header from '@/components/Header';
import Body from '@/components/Body';
import AuthLayout from '@/components/Layout/AuthLayout';

import * as S from '@/styles/pages/admin';

function Categories() {
  return (
    <AuthLayout>
      <S.Wrapper>
        <Header title="Categories" />
        <Body>Coming soon</Body>
      </S.Wrapper>
    </AuthLayout>
  );
}

export default Categories;
