import Link from 'next/link';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Head from '@/components/Head';

import tagService from '@/services/tagService';

import { ITags } from '@/typings/tags';

import * as S from '@/styles/pages/tags';

function Tags({ tags }: { tags: ITags[] }) {
  return (
    <S.Wrapper>
      <Head title="Tags" />
      <Header title="Tags" />
      <Body>
        <S.Tags>
          <S.TagTitle>Tags:</S.TagTitle>
          <S.TagList>
            {tags.map((tag: ITags) => (
              <Link key={tag._id} href={`/tags/${tag.name}`} passHref>
                <S.Tag>{tag.name}</S.Tag>
              </Link>
            ))}
          </S.TagList>
        </S.Tags>
      </Body>
    </S.Wrapper>
  );
}

export const getStaticProps = async () => {
  try {
    const { data } = await tagService.getTags({
      url: '/tags',
    });

    return {
      props: {
        tags: data.data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Tags;
