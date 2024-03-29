export const NAVBAR_ITEMS_CLIENT = [
  {
    name: 'Posts',
    pathname: '/posts',
  },
  {
    name: 'Tags',
    pathname: '/tags',
  },
  {
    name: 'My profile',
    pathname: '/profile',
  },
  {
    name: 'My CV',
    pathname: '/my-cv',
  },
] as const;

export const AUTH_ROUTES = [
  {
    pathname: '/profile',
    isAuth: true,
  },
  {
    pathname: '/about-me',
    isAuth: false,
  },
] as const;

export const NAVBAR_ITEMS_ADMIN = [
  {
    name: 'Dashboard',
    pathname: '/admin',
  },
  {
    name: 'Categories',
    pathname: '/admin/categories',
  },
  {
    name: 'Posts',
    pathname: '/admin/posts',
  },
  {
    name: 'My CV',
    pathname: '/my-cv',
  },
] as const;
