const CracoEslintWebpackPlugin = require('craco-eslint-webpack-plugin');

module.exports = {
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      [
        '@babel/plugin-transform-runtime',
        {
          helpers: false,
          regenerator: true,
        },
      ],
      '@babel/plugin-proposal-object-rest-spread',
    ],
  },
  plugins: [
    {
      plugin: CracoEslintWebpackPlugin,
      options: {
        eslintOptions: {
          files: 'src/**/*.{js,jsx,ts,tsx}',
          lintDirtyModulesOnly: true,
        },
      },
    },
  ],
};
