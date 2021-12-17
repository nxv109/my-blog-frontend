import appAxios from './appAxios';

type UseQueryParams = {
  url: string;
  params?: Record<string, any>;
  data?: Record<string, any>;
  headers?: Record<string, any>;
};

const getUsers = ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, { params });
};

const getUser = ({ url, params }: UseQueryParams) => {
  return appAxios.request.get(url, { params });
};

const getMyCV = ({ url }: UseQueryParams) => {
  return appAxios.request.get(url);
};

const addUser = ({ url, params }: UseQueryParams) => {
  return appAxios.request.post(url, { params });
};

const login = ({ url, data }: UseQueryParams) => {
  return appAxios.request.post(url, data);
};

const logout = ({ url, headers, data = {} }: UseQueryParams) => {
  return appAxios.request.post(url, data, { headers });
};

export default {
  getUsers,
  getUser,
  addUser,
  login,
  logout,
  getMyCV,
};
