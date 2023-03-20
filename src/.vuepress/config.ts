import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';

import theme from './theme.js';
import pkg from '../../package.json';

export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,

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

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string,
          formatter: {
            '/': '分类：$content',
            '/en/': 'Category: $content',
          },
        },
        {
          getter: (page) => page.frontmatter.tag as string,
          formatter: {
            '/': '标签：$content',
            '/en/': 'Tag: $content',
          },
        },
      ],
    }),
  ],

  theme,

  shouldPrefetch: false,

  define: () => ({
    // @ts-ignore
    BLOG_VERSION: `v${pkg.version}`,
  }),
});
