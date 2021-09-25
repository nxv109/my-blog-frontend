import { useEffect, useState } from 'react';

import Header from '@/components/Header';
import Body from '@/components/Body';
import postService from '@/services/postService';
import { IPostItems } from '@/typings/posts';
import Head from '@/components/Head';

import * as S from '@/styles/pages/blogs';

type Params = {
  [key: string]: any;
};

function Posts({ post }: { post: IPostItems }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(post.content);
  }, []);

  return (
    <S.Wrapper>
      <Head title={post.title} />
      <Header title="Posts" showBackButton />
      <Body>
        <S.PostWrapper>
          <S.PostTitle>{post.title}</S.PostTitle>
          {post.article_thumbnail && (
            <S.PostAvatar>
              <img src={post.article_thumbnail} alt={post.title} />
            </S.PostAvatar>
          )}
          <S.PostContent dangerouslySetInnerHTML={{ __html: content }} />
        </S.PostWrapper>
      </Body>
    </S.Wrapper>
  );
}

export const getStaticProps = async ({ params }: { params: Params }) => {
  try {
    const { data } = await postService.getPosts({ url: `/posts/${params.id}` });

    return {
      props: {
        post: data.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const { data } = await postService.getPosts({ url: '/posts' });
    const posts = data.data;

    const paths = posts.map((post: IPostItems) => ({
      params: { id: post._id },
    }));

    return { paths, fallback: 'blocking' };
  } catch {}
};

export default Posts;
