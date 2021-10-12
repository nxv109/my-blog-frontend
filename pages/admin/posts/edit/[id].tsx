import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';

import postService from '@/services/postService';
import uploadService from '@/services/uploadService';
import categoryService from '@/services/categoryService';
import tagService from '@/services/tagService';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Input from '@/components/Input';
import InputFile from '@/components/InputFile';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';
import Select from '@/components/Select';
import AuthLayout from '@/components/Layout/AuthLayout';

import webStorage from '@/utils/webStorage';
import { tagNotExistInDB } from '@/utils/pages/admin/posts';

import { APP_KEYS, ROUTES } from '@/constants';

import { ICategoryItems } from '@/typings/categories';
import { ITags } from '@/typings/tags';
import { IPostItems } from '@/typings/posts';

const MyEditor = dynamic(() => import('@/components/Editor'), { ssr: false });

import * as S from '@/styles/pages/admin';

function Edit({
  categories,
  post,
  tagList,
}: {
  categories: ICategoryItems[];
  post: IPostItems;
  tagList: ITags[];
}) {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [formData, setFormData] = useState({
    ...post,
    category: post?.category?._id,
  });
  const [tags, setTags] = useState<string[]>(post.tags || []);
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [inputTag, setInputTag] = useState('');
  const tagRef = useRef<HTMLDivElement>(null);

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
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleChangeEditorContent = (value: string) => {
    setContent(value);
  };

  const handleSubmit = async () => {
    const token = webStorage.get(APP_KEYS.ACCESS_TOKEN);
    const newFormData = { ...formData, tags: JSON.stringify(tags), content };

    try {
      const tagsNotExistInDB = tagNotExistInDB(tagList, tags);

      await Promise.all([
        postService.updatePost({
          url: `/posts/${router.query.id}`,
          data: newFormData,
          headers: {
            Authorization: token,
          },
        }),
        ...tagsNotExistInDB.map(tag => {
          return tagService.addTag({
            url: '/tags',
            data: { name: tag },
            headers: {
              Authorization: token,
            },
          });
        }),
      ]);
    } finally {
      router.push(ROUTES.ADMIN_POST_LIST);
    }
  };

  // Handle Tag feature
  useEffect(() => {
    if (tagRef.current) {
      setPaddingLeft(tagRef.current.offsetWidth);
    }
  }, [tagRef.current, tags]);

  const handlePressEnter = async (e: any) => {
    if (
      e.key === 'Enter' &&
      e.target.value &&
      !tags.includes(e.target.value.toLowerCase())
    ) {
      setTags([...tags, e.target.value.toLowerCase()]);
      setInputTag('');
    }
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(e.target.value);
    // TODO: Search tags
  };

  const handleDeleteTag = (tagID: number) => {
    setTags(tags.filter((_, index) => index !== tagID));
  };

  return (
    <AuthLayout>
      <S.Wrapper>
        <Header title="Edit the post" showBackButton />
        <Body>
          <S.AddNewWrapper>
            <S.FormGroup>
              <Input
                isControlled
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
              <MyEditor value={formData.content} onChange={handleChangeEditorContent} />
            </S.FormGroup>
            <S.FormGroup>
              <Select
                values={categories}
                name="category"
                defaultValue={formData?.category || ''}
                onChange={handleChange}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.TagWrapper>
                <Input
                  type="text"
                  name="tags"
                  value={inputTag}
                  style={{ paddingLeft: `${paddingLeft + 5}px` }}
                  placeholder="Add new tags..."
                  isControlled
                  onChange={handleTags}
                  onKeyDown={handlePressEnter}
                />
                <S.Tags ref={tagRef}>
                  {tags.map((tag: string, index) => (
                    <S.Tag key={index}>
                      <span>{tag}</span>
                      <S.DeleteTagBtn onClick={() => handleDeleteTag(index)}>
                        x
                      </S.DeleteTagBtn>
                    </S.Tag>
                  ))}
                </S.Tags>
              </S.TagWrapper>
            </S.FormGroup>
            <Button onClick={handleSubmit} className="primary">
              Edit
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
    const [post, categories, tags] = await Promise.all([
      postService.getPostById({
        url: `/posts/${params.id}`,
      }),
      categoryService.getCategories({
        url: '/categories',
      }),
      tagService.getTags({
        url: '/tags',
      }),
    ]);

    return {
      props: {
        categories: categories.data.data,
        post: post.data.data,
        tagList: tags.data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Edit;
