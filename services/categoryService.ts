import appAxios from './appAxios';

type UseQueryParams = {
  url: string;
  params?: Record<string, any>;
};

const getCategories = async ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, params);
};

export default {
  getCategories,
};
