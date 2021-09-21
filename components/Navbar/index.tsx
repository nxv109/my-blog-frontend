import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Logo from '@/components/Logo';

import webStorage from '@/utils/webStorage';
import {
  NAVBAR_ITEMS_CLIENT,
  NAVBAR_ITEMS_ADMIN,
  AUTH_ROUTES,
} from '@/constants/navbarItem';

import { IUsers } from '@/typings/users';

import * as S from './styles';

function Navbar({ user }: { user: IUsers }) {
  const router = useRouter();

  const handleLogout = () => {
    webStorage.removeAll();
    router.push('/login');
  };

  const renderNavbarItems = () => {
    if (user && user.role === 1) {
      return (
        <S.NavbarItems>
          {NAVBAR_ITEMS_ADMIN.map((item, index) => {
            return (
              <Link href={item.pathname} key={index}>
                <a
                  className={router.pathname === item.pathname ? 'active' : ''}
                >
                  {item.name}
                </a>
              </Link>
            );
          })}
        </S.NavbarItems>
      );
    } else {
      return (
        <S.NavbarItems>
          {NAVBAR_ITEMS_CLIENT.map((item, index) => {
            if (
              AUTH_ROUTES.find(
                router =>
                  router.pathname === item.pathname &&
                  router.isAuth !== !!user._id,
              )
            )
              return null;

            return (
              <Link href={item.pathname} key={index}>
                <a
                  className={router.pathname === item.pathname ? 'active' : ''}
                >
                  {item.name}
                </a>
              </Link>
            );
          })}
        </S.NavbarItems>
      );
    }
  };

  return (
    <S.Navbar>
      <Logo />
      {renderNavbarItems()}
      {user && user._id ? (
        <S.UserSection>
          <Button className="primary" onClick={handleLogout}>
            Logout
          </Button>
        </S.UserSection>
      ) : (
        <S.UserSection>
          <Button size="large" isLink url="/login">
            Login
          </Button>
          <Button className="primary" size="large" isLink url="/register">
            Register
          </Button>
        </S.UserSection>
      )}
    </S.Navbar>
  );
}

export default Navbar;
