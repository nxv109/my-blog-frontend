import appAxios from './appAxios';

type UseQueryParams = {
  url: string;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  data?: Record<string, any>;
};

const getTags = async ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, params);
};

const addTag = async ({ url, data, headers }: UseQueryParams) => {
  return appAxios.request.post(url, data, { headers });
};

export default {
  getTags,
  addTag,
};
