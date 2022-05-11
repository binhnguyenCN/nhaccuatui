const path = require('path');

module.exports = {
  stories: [
    '../views/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // '@storybook/preset-scss',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    // 'storybook-addon-next',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    },
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
  //     use: ['file-loader'],
  //     include: path.resolve(__dirname, '../public'),
  //   });
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     '~': path.join(__dirname, '../src'),
  //     'next/config': path.join(__dirname, '../next-config.js'),
  //   };
  //   return config;
  // },
};
