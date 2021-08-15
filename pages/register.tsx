import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import uploadService from '@/services/uploadService';
import userService from '@/services/userService';

import webStorage from '@/utils/webStorage';
import { APP_KEYS } from '@/constants';

import EmptyLayout from '@/components/Layout/EmptyLayout';
import Input from '@/components/Input';
import InputFile from '@/components/InputFile';
import Loader from '@/components/Loader';
import Button from '@/components/Button';
import Logo from '@/components/Logo';

import * as S from '@/styles/pages/register';

function Register() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    avatar: '',
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

  const handleUploadAvatar = async (file: Blob | string) => {
    let timer;
    clearTimeout(timer);

    setIsUploading(true);
    const response = await uploadService.uploadImage(file);

    timer = setTimeout(() => {
      setIsUploading(false);
    }, 1000);

    setFormData({ ...formData, avatar: response.data.display_url });
  };

  const handleSubmit = async () => {
    try {
      const response = await userService.addUser({
        url: '/register',
        params: formData,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLogin) return <Loader />;

  return (
    <S.Wrapper>
      <Logo />
      <S.Container>
        <S.FormGroup>
          <Input name="name" onChange={handleChange} placeholder="your name" />
        </S.FormGroup>
        <S.FormGroup>
          <Input
            name="username"
            onChange={handleChange}
            placeholder="username"
          />
        </S.FormGroup>
        <S.FormGroup>
          <Input name="email" onChange={handleChange} placeholder="email" />
        </S.FormGroup>
        <S.FormGroup>
          <InputFile
            name="avatar"
            label="Choose a avatar"
            onChange={handleUploadAvatar}
          />
        </S.FormGroup>
        <S.FormGroup>
          <Input
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </S.FormGroup>
        <Button
          size="large"
          className="primary"
          disabled={isUploading}
          onClick={handleSubmit}
        >
          {isUploading ? 'Uploading...' : 'Register'}
        </Button>
      </S.Container>
    </S.Wrapper>
  );
}

Register.Layout = EmptyLayout;

export default Register;
