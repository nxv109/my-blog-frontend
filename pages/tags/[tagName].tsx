import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from '@/components/Header';
import Head from '@/components/Head';
import Body from '@/components/Body';
import Loader from '@/components/Loader';

import postService from '@/services/postService';

import { IPostItems } from '@/typings/posts';

import * as S from '@/styles/pages/posts';

function PostsWithTag({ posts }: { posts: IPostItems[] }) {
  const { query } = useRouter();

  if (!posts) return <Loader />;

  return (
    <S.Wrapper>
      <Head title={`Posts with ${query.tagName} tag`} />
      <Header title={`${query.tagName} tag`} showBackButton />
      <Body>
        <S.PostWrapper>
          {posts.map((post: IPostItems) => (
            <Link href={`/posts/${post._id}`} key={post._id} passHref>
              <S.PostItem>
                <S.Info>
                  <S.Title>{post.title}</S.Title>
                  <S.Summary>{post.summary}</S.Summary>
                </S.Info>
              </S.PostItem>
            </Link>
          ))}
        </S.PostWrapper>
      </Body>
    </S.Wrapper>
  );
}

export const getServerSideProps = async ({
  params,
}: {
  params: Record<string, any>;
}) => {
  try {
    const { data } = await postService.getPostsWithTag({
      url: `/tags/${params.tagName}`,
    });

    return {
      props: {
        posts: data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PostsWithTag;
