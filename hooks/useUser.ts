import webStorage from '@/utils/webStorage';
import { IUsers } from '@/typings/users';
import { APP_KEYS } from '@/constants';
import isClient from '@/utils/isClient';
import { useQuery } from '@/hooks/useQuery';

function useUser() {
  if (isClient) {
    const token = webStorage.get(APP_KEYS.ACCESS_TOKEN);
    if (!token) return null;

    const { data, isLoading } = useQuery<{ data: IUsers; isLoading: boolean }>({
      url: '/users/profiles',
      headers: {
        Authorization: token,
      },
    });

    return {
      data: data?.data?.data,
      isLoading,
    };
  }

  return null;
}

export default useUser;
