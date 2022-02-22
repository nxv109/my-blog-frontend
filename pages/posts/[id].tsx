import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Head from '@/components/Head';
import postService from '@/services/postService';
import { IPostItems } from '@/typings/posts';
import { getPostID } from '@/utils/pages/admin/posts';

import 'highlight.js/styles/androidstudio.css';
import * as S from '@/styles/pages/posts';

type Params = {
  [key: string]: any;
};

function Posts({ post }: { post: IPostItems }) {
  const router = useRouter();
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(post.content);
  }, []);

  return (
    <S.Wrapper>
      <Head
        title={post.title || ''}
        description={post.summary || ''}
        ogImage={post.article_thumbnail || ''}
        ogUrl={router.asPath || ''}
      />
      <Header title="Posts" showBackButton />
      <Body>
        <S.PostWrapper>
          <S.PostTitle>{post.title}</S.PostTitle>
          {post.tags && !!post.tags.length && (
            <S.Tags>
              <S.TagTitle>Tags:</S.TagTitle>
              <S.TagList>
                {post.tags.map((tag: string, index) => (
                  <Link key={index} href={`/tags/${tag}`} passHref>
                    <S.Tag>{tag}</S.Tag>
                  </Link>
                ))}
              </S.TagList>
            </S.Tags>
          )}
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

export const getServerSideProps = async ({ params }: { params: Params }) => {
  try {
    const id = getPostID(params.id);

    const { data } = await postService.getPosts({ url: `/posts/${id}` });

    if (params.id.split('-').length > 1) {
      return {
        props: {
          post: data.data,
        },
      };
    }

    return {
      redirect: {
        destination: `/posts/${`${data.data.slug}-${data.data._id}`}`,
        permanent: false,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

// NOTE: Generate static page at build time
// export const getStaticPaths = async () => {
//   try {
//     const { data } = await postService.getPosts({ url: '/posts' });
//     const posts = data.data;

//     const paths = posts.map((post: IPostItems) => ({
//       params: { id: post._id },
//     }));

//     return { paths, fallback: true };
//   } catch {
//     return {
//       notFound: true,
//     };
//   }
// };

export default Posts;
