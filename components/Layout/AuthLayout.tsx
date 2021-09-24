import React from 'react';

import Notfound from '@/pages/404';
import useUser from '@/hooks/useUser';

import { USER_ROLES } from '@/constants';

interface IProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: IProps) {
  const user = useUser();

  if (!user?.data || user.data.role !== USER_ROLES.ADMIN) {
    return <Notfound />;
  }

  return <>{children}</>;
}

export default AuthLayout;
