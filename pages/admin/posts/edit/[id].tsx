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
import { IPostItems } from '@/typings/posts';

const MyEditor = dynamic(() => import('@/components/Editor'), { ssr: false });

import * as S from '@/styles/pages/admin';

function Edit({
  categories,
  post,
}: {
  categories: ICategoryItems[];
  post: IPostItems;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ...post,
    category: post?.category?._id,
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
      await postService.updatePost({
        url: `/posts/${router.query.id}`,
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
        <Header title="Add new post" />
        <Body>
          <S.AddNewWrapper>
            <S.FormGroup>
              <Input
                type="text"
                name="title"
                value={formData.title}
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
                label={formData.article_thumbnail || 'Select a file'}
                type="file"
                name="article_thumbnail"
                onChange={handleUploadThumbnail}
              />
            </S.FormGroup>
            <S.FormGroup>
              <MyEditor
                value={formData.content}
                onChange={handleChangeEditorContent}
              />
            </S.FormGroup>
            <S.FormGroup>
              <Select
                values={categories}
                name="category"
                defaultValue={formData?.category || ''}
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

export const getServerSideProps = async ({
  params,
}: {
  params: Record<string, any>;
}) => {
  try {
    const { data: post } = await postService.getPostById({
      url: `/posts/${params.id}`,
    });

    const { data: categories } = await categoryService.getCategories({
      url: '/categories',
    });

    return {
      props: {
        categories: categories.data,
        post: post.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Edit;
