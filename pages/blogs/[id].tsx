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
  return (
    <S.Wrapper>
      <Head title={post.title} />
      <Header title="Posts" />
      <Body>
        <S.PostWrapper>
          <S.PostTitle>{post.title}</S.PostTitle>
          {post.article_thumbnail && (
            <S.PostAvatar>
              <img src={post.article_thumbnail} alt={post.title} />
            </S.PostAvatar>
          )}
          <S.PostContent
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></S.PostContent>
        </S.PostWrapper>
      </Body>
    </S.Wrapper>
  );
}

export const getServerSideProps = async ({ params }: { params: Params }) => {
  try {
    const { data } = await postService.getPosts({ url: `/posts/${params.id}` });

    return {
      props: {
        post: data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Posts;
