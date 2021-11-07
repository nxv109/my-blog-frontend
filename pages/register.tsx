import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import uploadService from '@/services/uploadService';
import userService from '@/services/userService';

import EmptyLayout from '@/components/Layout/EmptyLayout';
import Input from '@/components/Input';
import InputFile from '@/components/InputFile';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Head from '@/components/Head';
import Loader from '@/components/Loader';

import * as S from '@/styles/pages/register';

function Register() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    avatar: '',
    password: '',
  });

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
      setLoading(true);
      await userService.addUser({
        url: '/register',
        params: formData,
      });

      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Loader />;

  return (
    <S.Wrapper>
      <Head title="Register" />
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
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </S.FormGroup>
        <Button
          className="primary"
          disabled={isUploading}
          onClick={handleSubmit}
        >
          {isUploading ? 'Uploading...' : 'Register'}
        </Button>
        <Link href="/login" passHref>
          <S.LoginLink>Login</S.LoginLink>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}

Register.Layout = EmptyLayout;

export default Register;
