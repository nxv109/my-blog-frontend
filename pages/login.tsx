import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import userService from '@/services/userService';
import webStorage from '@/utils/webStorage';
import { APP_KEYS } from '@/constants';

import EmptyLayout from '@/components/Layout/EmptyLayout';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Logo from '@/components/Logo';
import Head from '@/components/Head';
import Loader from '@/components/Loader';

import * as S from '@/styles/pages/login';

function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await userService.login({
        url: '/login',
        data: formData,
      });

      // NOTE: Save to localStorage
      webStorage.set(APP_KEYS.ACCESS_TOKEN, data.accessToken);
      webStorage.set(APP_KEYS.REFRESH_TOKEN, data.refreshToken);

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Loader />;

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
        <Button className="primary">Login</Button>
        <Link href="/register" passHref>
          <S.RegisterLink>Register</S.RegisterLink>
        </Link>
      </S.Form>
    </S.Wrapper>
  );
}

Login.Layout = EmptyLayout;

export default Login;
