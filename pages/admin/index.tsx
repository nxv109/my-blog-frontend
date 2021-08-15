import Header from '@/components/Header';
import Body from '@/components/Body';
import AuthLayout from '@/components/Layout/AuthLayout';

import * as S from '@/styles/pages/admin';

function Dashboard() {
  return (
    <AuthLayout>
      <S.Wrapper>
        <Header title="Dashboard" />
        <Body>Dashboard</Body>
      </S.Wrapper>
    </AuthLayout>
  );
}

export default Dashboard;
