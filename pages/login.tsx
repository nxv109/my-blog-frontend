import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import userService from '@/services/userService';
import webStorage from '@/utils/webStorage';
import { APP_KEYS } from '@/constants';

import EmptyLayout from '@/components/Layout/EmptyLayout';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import Logo from '@/components/Logo';
import Head from '@/components/Head';

import * as S from '@/styles/pages/login';

function Login() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const userId = webStorage.get(APP_KEYS.USER_ID);

    if (userId) {
      router.push('/');
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const { data } = await userService.login({
        url: '/login',
        data: formData,
      });

      // save localStorage
      webStorage.set(APP_KEYS.ACCESS_TOKEN, data.accessToken);
      webStorage.set(APP_KEYS.REFRESH_TOKEN, data.refreshToken);
      webStorage.set(APP_KEYS.USER_ID, data.data._id);

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (isLogin) return <Loader />;

  return (
    <S.Wrapper>
      <Head title="Login" />
      <Logo />
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <Input
            name="username"
            onChange={handleChange}
            placeholder="username/email"
          />
        </S.FormGroup>
        <S.FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </S.FormGroup>
        <Button size="large" className="primary">
          Login
        </Button>
        <Link href="/register" passHref>
          <S.RegisterLink>Register</S.RegisterLink>
        </Link>
      </S.Form>
    </S.Wrapper>
  );
}

Login.Layout = EmptyLayout;

export default Login;
