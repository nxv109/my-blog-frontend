import appAxios from './appAxios';

type UseQueryParams = {
  url: string;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  data?: Record<string, any>;
};

const getPosts = async ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, { params });
};

const getPostsAll = async ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, { params });
};

const addPosts = async ({ url, data, headers }: UseQueryParams) => {
  return appAxios.request.post(url, data, { headers });
};

const deletePosts = async ({ url, headers }: UseQueryParams) => {
  return appAxios.request.delete(url, { headers });
};

const getPostById = async ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, { params });
};

const updatePost = async ({ url, headers, data }: UseQueryParams) => {
  return appAxios.request.put(url, data, { headers });
};

const getPostsWithTag = async ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, { params });
};

export default {
  getPosts,
  addPosts,
  getPostsAll,
  deletePosts,
  getPostById,
  updatePost,
  getPostsWithTag,
};
