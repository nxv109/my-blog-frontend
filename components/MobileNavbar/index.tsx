import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/Button';
import Logo from '@/components/Logo';
import useUser from '@/hooks/useUser';

import webStorage from '@/utils/webStorage';
import {
  NAVBAR_ITEMS_CLIENT,
  NAVBAR_ITEMS_ADMIN,
  EXCLUDE_PATH_NAME,
} from '@/constants/navbarItem';

import * as S from './styles';

function MobileNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleHideNavbar = () => {
    setShowNavbar(false);
  };

  const router = useRouter();
  const user = useUser();

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
                  onClick={handleHideNavbar}
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
              EXCLUDE_PATH_NAME.find(
                router =>
                  router.pathname === item.pathname && router.isAuth !== !!user,
              )
            )
              return null;

            return (
              <Link href={item.pathname} key={index}>
                <a
                  className={router.pathname === item.pathname ? 'active' : ''}
                  onClick={handleHideNavbar}
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
    <>
      <S.Btn onClick={handleToggleNavbar}>
        <S.Line></S.Line>
        <S.Line></S.Line>
        <S.Line></S.Line>
      </S.Btn>
      <S.NavbarWrapper style={{ left: showNavbar ? 0 : '150%' }}>
        <S.Navbar>
          <Logo />
          {renderNavbarItems()}
          {user ? (
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
      </S.NavbarWrapper>
    </>
  );
}

export default MobileNavbar;
