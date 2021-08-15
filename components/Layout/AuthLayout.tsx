import React from 'react';

import Notfound from '@/pages/404';
import Loader from '@/components/Loader';
import useUser from '@/hooks/useUser';

import { USER_ROLES } from '@/constants';
import isClient from '@/utils/isClient';

interface IProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: IProps) {
  const user = useUser();

  if (!isClient || !user) return <Loader />;

  if (user.role !== USER_ROLES.ADMIN) {
    return <Notfound />;
  }

  return <>{children}</>;
}

export default AuthLayout;
