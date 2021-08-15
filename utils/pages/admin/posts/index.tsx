import Link from 'next/link';
import { IPostItems } from '@/typings/posts';

import * as S from '@/styles/pages/admin';

interface renderPostsIProps {
  handleDelete: (id: string) => void;
}

function renderPosts({ handleDelete }: renderPostsIProps) {
  return [
    {
      render: (post: IPostItems) => {
        return <>{post.title}</>;
      },
    },
    {
      render: (post: IPostItems) => {
        return (
          <S.ActionBtn $type="edit">
            <Link href={`/admin/posts/edit/${post._id}`}>
              <a>
                <i className="fi-rr-edit"></i>
              </a>
            </Link>
          </S.ActionBtn>
        );
      },
    },
    {
      render: (post: IPostItems) => {
        return (
          <S.ActionBtn $type="delete" onClick={() => handleDelete(post._id)}>
            <i className="fi-rr-trash"></i>
          </S.ActionBtn>
        );
      },
    },
  ];
}

const headerList = [
  {
    width: '600',
    render: () => {
      return <p>Title</p>;
    },
  },
  {
    width: '10',
    render: () => {
      return <p>Edit</p>;
    },
  },
  {
    width: '10',
    render: () => {
      return <p>Delete</p>;
    },
  },
];

export { renderPosts, headerList };
