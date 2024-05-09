import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  head: [
    [
      'link',
      { rel: 'stylesheet', type: 'text/css', href: '//storage.googleapis.com/app.klipse.tech/css/codemirror.css' },
    ],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '//storage.googleapis.com/app.klipse.tech/css/prolog.css' }],
  ],

  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  base: '/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '墨七',
      description: '墨七 - 简单快乐，理应如此。',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Mo7',
      description: 'Mo7 - Simple and happy, as it should be.',
    },
  },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
