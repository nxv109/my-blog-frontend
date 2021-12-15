import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Head from '@/components/Head';
import Body from '@/components/Body';
import Loader from '@/components/Loader';

import postService from '@/services/postService';

import { IPostItems } from '@/typings/posts';

import * as S from '@/styles/pages/posts';

const limitNumber = 8;

function Posts({ postsList }: { postsList: IPostItems[] }) {
  const [posts, setPosts] = useState<IPostItems[] | null>(null);
  const [loading, setLoading] = useState(false);
  let limitRef = useRef(limitNumber);
  let postsLength = useRef(0);

  useEffect(() => {
    setPosts(postsList);
  }, []);

  const handleScroll = async (e: any) => {
    const scrollHeight = Math.round(e.target.scrollHeight);
    const scrollTop = Math.round(e.target.scrollTop);
    const clientHeight = Math.round(e.target.clientHeight);

    if (scrollTop !== 0 && scrollHeight - scrollTop - clientHeight <= 1) {
      // NOTE: Kiểm tra xem nếu còn posts thì tiếp tục loading không thì thôi
      if (
        postsLength.current === 0 ||
        postsLength.current >= limitRef.current
      ) {
        try {
          setLoading(true);

          const { data } = await postService.getPosts({
            url: '/posts',
            params: { limit: limitRef.current + limitNumber },
          });

          limitRef.current += limitNumber;
          postsLength.current = data.data.length;

          setPosts(data.data);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  if (!posts) return <Loader />;

  return (
    <S.Wrapper>
      <Head title="Posts" />
      <Header title="Posts" />
      <Body callback={handleScroll}>
        <S.PostWrapper>
          {posts.map((post: IPostItems) => (
            <Link
              href={`/posts/${
                post.slug ? `${post.slug}-${post._id}` : post._id
              }`}
              key={post._id}
              passHref
            >
              <S.PostItem>
                <S.Info>
                  <S.Title>{post.title}</S.Title>
                  <S.Summary>{post.summary}</S.Summary>
                </S.Info>
              </S.PostItem>
            </Link>
          ))}
          <S.LoaderWrapper>
            {loading ? <Loader isLoading /> : null}
          </S.LoaderWrapper>
        </S.PostWrapper>
      </Body>
    </S.Wrapper>
  );
}

export const getStaticProps = async () => {
  try {
    const { data } = await postService.getPosts({ url: '/posts' });

    return {
      props: {
        postsList: data.data,
        limit: data.meta.limit,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Posts;
