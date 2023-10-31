import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  {
    text: '目录',
    icon: 'sort',
    link: '/posts',
    children: ['/coder', '/linux', '/skills', '/tools', '/leetcode', '/posts'],
  },
  {
    text: '索引',
    icon: 'jiansuo',
    children: [
      { text: '全部', icon: 'list', link: '/article' },
      { text: '分类', icon: 'category', link: '/category' },
      { text: '标签', icon: 'tag', link: '/tag' },
      { text: '时间轴', icon: 'time', link: '/timeline' },
    ],
  },

  {
    text: '收藏',
    icon: 'start',
    link: '/favorite',
    children: ['/favorite/links', '/favorite/movies', '/favorite/music', '/favorite/photos'],
  },
  '/about',
]);
