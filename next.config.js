module.exports = {
  target: 'serverless',
  images: {
    domains: ['i.ibb.co'],
  },
  future: {
    webpack5: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            babel: true,
            titleProp: true,
          },
        },
        {
          loader: require.resolve('url-loader'),
          options: {
            name: '[name].[hash:8].[ext]',
            limit: 10240,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(jpe?g|png|gif)$/,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            name: '[name].[hash:8].[ext]',
            limit: 10240,
          },
        },
      ],
    });

    return config;
  },
};
