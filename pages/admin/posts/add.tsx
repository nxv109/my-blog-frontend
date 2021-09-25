import { useRouter } from 'next/router';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import postService from '@/services/postService';
import uploadService from '@/services/uploadService';
import categoryService from '@/services/categoryService';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Input from '@/components/Input';
import InputFile from '@/components/InputFile';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import Select from '@/components/Select';
import AuthLayout from '@/components/Layout/AuthLayout';

import webStorage from '@/utils/webStorage';

import { APP_KEYS, ROUTES } from '@/constants';

import { ICategoryItems } from '@/typings/categories';

const MyEditor = dynamic(() => import('@/components/Editor'), { ssr: false });

import * as S from '@/styles/pages/admin';

function AddPost({ categories }: { categories: ICategoryItems[] }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    article_thumbnail: '',
  });

  const handleUploadThumbnail = async (file: Blob | string) => {
    const response = await uploadService.uploadImage(file);

    setFormData({
      ...formData,
      article_thumbnail: response.data.display_url,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleChangeEditorContent = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const token = webStorage.get(APP_KEYS.ACCESS_TOKEN);

    try {
      await postService.addPosts({
        url: '/posts',
        data: formData,
        headers: {
          Authorization: token,
        },
      });
    } finally {
      router.push(ROUTES.ADMIN_POST_LIST);
    }
  };

  return (
    <AuthLayout>
      <S.Wrapper>
        <Header title="Add new post" showBackButton />
        <Body>
          <S.AddNewWrapper>
            <S.FormGroup>
              <Input
                type="text"
                value={formData.title}
                name="title"
                placeholder="Title..."
                onChange={handleChange}
              />
            </S.FormGroup>
            <S.FormGroup>
              <Textarea
                value={formData.summary}
                name="summary"
                placeholder="Summary..."
                onChange={handleChange}
              />
            </S.FormGroup>
            <S.FormGroup>
              <InputFile
                type="file"
                name="article_thumbnail"
                onChange={handleUploadThumbnail}
              />
            </S.FormGroup>
            <S.FormGroup>
              <MyEditor onChange={handleChangeEditorContent} />
            </S.FormGroup>
            <S.FormGroup>
              <Select
                values={categories}
                name="category"
                defaultValue=''
                onChange={handleChange}
              />
            </S.FormGroup>
            <Button onClick={handleSubmit} className="primary">
              Save
            </Button>
          </S.AddNewWrapper>
        </Body>
      </S.Wrapper>
    </AuthLayout>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await categoryService.getCategories({
      url: '/categories',
    });

    return {
      props: {
        categories: data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default AddPost;
