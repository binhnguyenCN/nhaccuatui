module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    // '../views/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    'storybook-addon-sass-postcss',
  ],
  framework: '@storybook/react',
};
