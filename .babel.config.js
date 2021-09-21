module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      { ssr: true, displayName: 'development', fileName: false },
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        pure: true,
        namespace: 'my-blog',
      },
    ],
  ].filter(Boolean),
};
