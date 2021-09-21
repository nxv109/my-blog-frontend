// @ts-nocheck
import axios from 'axios';

import webStorage from '@/utils/webStorage';
import { APP_KEYS, ROUTES, ERROR_CODES } from 'constants/index';

const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000 * 60,
};

const request = axios.create(config);

const createToken = token => `${token}`;

// const accessToken = webStorage.get(APP_KEYS.ACCESS_TOKEN);
let isRefreshing = false;
let failedQueue = [];

function addFailedQueue(cb) {
  failedQueue.push(cb);
}

function processFailedQueue(token) {
  failedQueue.map(cb => cb(token));
  failedQueue = [];
}

function reloadApp() {
  // webStorage.remove(APP_KEYS.ACCESS_TOKEN);
  // webStorage.remove(APP_KEYS.REFRESH_TOKEN);

  // remove all
  webStorage.removeAll();

  window.location.replace(ROUTES.LOGIN);
}

request.interceptors.request.use(
  function (config) {
    if (config.headers.Authorization) {
      config.headers.Authorization = createToken(
        webStorage.get(APP_KEYS.ACCESS_TOKEN),
      );

      return config;
    }

    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => response,
  async error => {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    if (ERROR_CODES.UNAUTHORIZED === status) {
      const refreshToken = webStorage.get(APP_KEYS.REFRESH_TOKEN);

      if (!refreshToken) {
        reloadApp();
        return Promise.reject(error);
      }

      if (isRefreshing === false) {
        isRefreshing = true;

        axios({
          ...config,
          method: 'post',
          url: '/refresh-token',
          headers: {
            Authorization: createToken(refreshToken),
          },
        })
          .then(({ data }) => {
            const newAccessToken = data.accessToken;
            const newRefreshToken = data.refreshToken;

            webStorage.set(APP_KEYS.ACCESS_TOKEN, newAccessToken);
            webStorage.set(APP_KEYS.REFRESH_TOKEN, newRefreshToken);

            isRefreshing = false;

            processFailedQueue(newAccessToken?.token);
          })
          .catch(() => {
            reloadApp();
            return Promise.reject(error);
          });
      }

      return new Promise(resolve => {
        addFailedQueue(newToken => {
          originalRequest.headers.Authorization = createToken(newToken);

          resolve(request(originalRequest));
        });
      });
    }

    if (ERROR_CODES.FORBIDDEN === status) {
      window.location.replace(ROUTES.LOGIN);
      // reloadApp();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default { request };
