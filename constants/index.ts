const APP_KEYS = {
  ACCESS_TOKEN: '_auth_a_t_',
  REFRESH_TOKEN: '_auth_r_t_',
  AVATAR_URL: 'avatar_url',
  USER_ID: 'user_id',
} as const;

const ROUTES = {
  LOGIN: '/login',
  HOME: '/',
  404: '/404',
  ADMIN_POST_LIST: '/admin/posts',
} as const;

const ERROR_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
} as const;

const USER_ROLES = {
  ADMIN: 1,
  USER: 0,
} as const;

const DEFAULT_IMAGES = {
  NEWS: 'https://i.ibb.co/CQbCYsz/news-default.png',
  AVATAR: 'https://i.ibb.co/rH3v5bX/avatar-default.png',
  LOGO: 'https://i.ibb.co/hFHYRzp/logo-nxv-109.jpg',
} as const;

export { APP_KEYS, ROUTES, ERROR_CODES, USER_ROLES, DEFAULT_IMAGES };
