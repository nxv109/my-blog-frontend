import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Button from '@/components/Button';
import AuthLayout from '@/components/Layout/AuthLayout';
import Table from '@/components/Table';
import Loader from '@/components/Loader';
import Popup from '@/components/Popup';

import postService from '@/services/postService';
import { IPostItems } from '@/typings/posts';

import { useQuery } from '@/hooks/useQuery';

import { renderPosts, headerList } from '@/utils/pages/admin/posts';
import webStorage from '@/utils/webStorage';

import { APP_KEYS } from '@/constants';

import * as S from '@/styles/pages/admin';

function Posts() {
  const [posts, setPosts] = useState<IPostItems[]>([]);
  const [loadingPage, setLoadingPage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [postId, setPostId] = useState('');
  const router = useRouter();

  const { data, isLoading } = useQuery<{ data: IPostItems[] }>({
    url: '/posts/all',
  });

  useEffect(() => {
    if (data) {
      setPosts(data.data.data);
    }
  }, [data?.data.data]);

  const handleDelete = async (id: string) => {
    const token = webStorage.get(APP_KEYS.ACCESS_TOKEN);

    try {
      setLoadingPage(true);
      const postsData = await postService.deletePosts({
        url: `/posts/${id}`,
        headers: {
          Authorization: token,
        },
      });

      setPosts(postsData.data.data);
    } catch (error) {
      console.log(error);
      setShowPopup(false);
    } finally {
      setLoadingPage(false);
      setShowPopup(false);
    }
  };

  const handleShowPopupDeleteConfirm = (id: string) => {
    setShowPopup(true);
    setPostId(id);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleAccept = () => {
    handleDelete(postId);
    setShowPopup(false);
  };

  if (isLoading || loadingPage || !posts) return <Loader />;

  return (
    <AuthLayout>
      <S.Wrapper>
        <S.Post>
          <Header title="Post list" />
          <Body>
            <S.TableWrapper>
              <Table
                header={headerList}
                body={posts}
                renderBody={() =>
                  renderPosts({ handleDelete: handleShowPopupDeleteConfirm })
                }
              />
            </S.TableWrapper>
          </Body>
          <Button
            className="primary add-new"
            onClick={() => router.push('/admin/posts/add')}
          >
            Add
          </Button>
        </S.Post>
      </S.Wrapper>
      {showPopup && (
        <Popup
          type="serious"
          title="Delete"
          content="Do you want delete it?"
          handleCancel={handleCancel}
          handleAccept={handleAccept}
        />
      )}
    </AuthLayout>
  );
}

export default Posts;
