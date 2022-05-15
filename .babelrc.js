module.exports = {
  presets: ['@babel/preset-react', 'next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './',
        },
      },
    ],
  ],
};
