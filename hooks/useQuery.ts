import { useQuery as useQueryBase, UseQueryOptions } from 'react-query';
import { AxiosResponse } from 'axios';
import appAxios from '@/services/appAxios';

type UseQueryParams = {
  url: string;
  params?: Record<string, any>;
  headers?: Record<string, any>;
};

export const useQuery = <TQueryFnData = unknown, TError = unknown>(
  { url, params, headers }: UseQueryParams,
  options?: UseQueryOptions<AxiosResponse<TQueryFnData>, TError>,
) => {
  const queryKey: (string | Record<string, any>)[] = [url];
  if (params) queryKey.push(params);

  return useQueryBase<AxiosResponse<TQueryFnData>, TError>(
    queryKey,
    () =>
      appAxios.request.request<TQueryFnData>({
        method: 'GET',
        url,
        params,
        headers,
      }),
    options,
  );
};
