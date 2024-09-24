import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  {
    text: '总览',
    icon: 'sort',
    children: ['/posts/catalog.html', '/developer/', '/tutorial/', '/leetcode/', '/tips/', '/tools/'],
  },
  {
    text: '分类',
    icon: 'jiansuo',
    children: [
      { text: '全部', icon: 'list', link: '/article/' },
      { text: '分类', icon: 'category', link: '/category/' },
      { text: '标签', icon: 'tag', link: '/tag/' },
      { text: '时间轴', icon: 'time', link: '/timeline/' },
    ],
  },
  {
    text: '收藏',
    icon: 'start',
    link: '/favorite',
    children: ['favorite/essays/', '/favorite/links/', '/favorite/movies/', '/favorite/music/', '/favorite/photos/'],
  },
  '/about/',
]);
