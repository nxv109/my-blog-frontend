import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Loader from '@/components/Loader';

import postService from '@/services/postService';

import { IPostItems } from '@/typings/posts';
import { DEFAULT_IMAGES } from '@/constants';

import * as S from '@/styles/pages/blogs';

function Blogs({ posts }: { posts: IPostItems[] }) {
  if (!posts) return <Loader />;

  return (
    <S.Wrapper>
      <Header title="Blogs" />
      <Body>
        <S.PostWrapper>
          {posts.map((post: IPostItems) => (
            <Link href={`/blogs/${post._id}`} key={post._id} passHref>
              <S.PostItem>
                <S.Thumbnail>
                  <Image
                    src={post.article_thumbnail || DEFAULT_IMAGES.NEWS}
                    width={170}
                    height={150}
                    alt={post.title}
                  />
                </S.Thumbnail>
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

export const getServerSideProps = async () => {
  try {
    const { data } = await postService.getPosts({ url: '/posts' });

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

export default Blogs;
