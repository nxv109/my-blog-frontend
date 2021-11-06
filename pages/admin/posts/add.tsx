// @ts-nocheck
import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useForm, Controller } from 'react-hook-form';

import postService from '@/services/postService';
import tagService from '@/services/tagService';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Input from '@/components/Input';
import Button from '@/components/Button';
import AuthLayout from '@/components/Layout/AuthLayout';

import webStorage from '@/utils/webStorage';
import {
  tagNotExistInDB,
  // debounce,
  handleUploadFile,
} from '@/utils/pages/admin/posts';

import { APP_KEYS, ROUTES } from '@/constants';

import { ITags } from '@/typings/tags';

const MyEditor = dynamic(() => import('@/components/Editor'), {
  ssr: false,
});

import * as S from '@/styles/pages/admin';

type FormDataTProps = {
  editor_content: string;
  title: string;
  article_thumbnail: any;
  status: string;
};

function AddPost({ tagList }: { tagList: ITags[] }) {
  const router = useRouter();
  const [tags, setTags] = useState<string[]>([]);
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [inputTag, setInputTag] = useState('');
  const tagRef = useRef<HTMLDivElement>(null);

  const { handleSubmit, control, register } = useForm({
    mode: 'onChange',
  });

  const getThumbnailFileName = file => {
    if (Array.from(file).length !== 0) {
      return handleUploadFile(file[0]);
    } else {
      return null;
    }
  };

  const handleSubmitFormData = async (
    data: FormDataTProps,
    autoSave: boolean = true,
    status: string = 'draft',
  ) => {
    const token = webStorage.get(APP_KEYS.ACCESS_TOKEN);

    try {
      const thumbnailFileName = await getThumbnailFileName(
        data.article_thumbnail,
      );

      const newFormData = {
        ...data,
        tags: tagRef?.current?.values
          ? JSON.stringify(tagRef.current.values)
          : null,
        article_thumbnail: thumbnailFileName || '',
        content: data.editor_content,
        status,
      };

      const tagsNotExistInDB = tagNotExistInDB(tagList, tagRef.current.values);

      await Promise.all([
        postService.addPosts({
          url: '/posts',
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
      if (!autoSave) {
        router.push(ROUTES.ADMIN_POST_LIST);
      }
    }
  };

  // TODO: Auto save after 5s
  // const callSubmitAction = () => {
  //   handleSubmit(handleSubmitFormData)();
  // };

  // const handleChangeEditorContent = () => {
  //   debounce({ callback: callSubmitAction, time: 5000 });
  // };

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
      tagRef.current.values = [...tags, e.target.value.toLowerCase()];
    }
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTag(e.target.value);
  };

  const handleDeleteTag = (tagID: number) => {
    setTags(tags.filter((_, index) => index !== tagID));
    tagRef.current.values = tagRef.current.values.filter(
      (_, index) => index !== tagID,
    );
  };

  return (
    <AuthLayout>
      <S.Wrapper>
        <Header title="Add new post" showBackButton />
        <Body>
          <S.AddNewWrapper>
            <S.FormGroup>
              <S.FormGroup>
                <Input
                  type="text"
                  placeholder="Title..."
                  {...register('title')}
                />
              </S.FormGroup>
              <S.FormGroup>
                <Input
                  type="text"
                  placeholder="Summary..."
                  {...register('summary')}
                />
              </S.FormGroup>
              <Input type="file" {...register('article_thumbnail')} />
            </S.FormGroup>
            <S.FormGroup>
              <Controller
                name="editor_content"
                control={control}
                render={({ field }) => {
                  return (
                    <MyEditor
                      value={field.value}
                      onChange={(e: any) => {
                        field.onChange(e);
                        // handleChangeEditorContent();
                      }}
                    />
                  );
                }}
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
            <Button
              onClick={handleSubmit((data: any) =>
                handleSubmitFormData(data, false, 'public'),
              )}
              className="primary"
            >
              Save with public
            </Button>
            <Button
              onClick={handleSubmit((data: any) =>
                handleSubmitFormData(data, false),
              )}
              className="primary"
            >
              Save with draft
            </Button>
          </S.AddNewWrapper>
        </Body>
      </S.Wrapper>
    </AuthLayout>
  );
}

export const getServerSideProps = async () => {
  try {
    const [tags] = await Promise.all([
      tagService.getTags({
        url: '/tags',
      }),
    ]);

    return {
      props: {
        tagList: tags.data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default AddPost;
