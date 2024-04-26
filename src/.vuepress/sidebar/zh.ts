import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  // 子路径
  '/about/': [
    {
      text: '返回总目录',
      icon: 'sort',
      link: '/posts/',
    },
    {
      text: '关于',
      icon: 'info',
      prefix: '',
      link: '/about/',
      children: 'structure',
    },
  ],
  '/tools/': [
    {
      text: '返回总目录',
      icon: 'sort',
      link: '/posts/',
    },
    {
      text: '工具',
      icon: 'gongju',
      prefix: '',
      link: '/tools/',
      children: 'structure',
    },
  ],
  '/linux/': [
    {
      text: '返回总目录',
      icon: 'sort',
      link: '/posts/',
    },
    {
      text: 'Linux',
      icon: 'linux',
      prefix: '',
      link: '/linux/',
      children: [],
    },
    {
      text: 'Debian',
      icon: 'debianos',
      prefix: 'Debian/',
      children: 'structure',
      link: '/linux/Debian/',
    },
    {
      text: 'Settings',
      icon: 'shezhi',
      prefix: 'Settings/',
      children: 'structure',
      link: '/linux/Settings/',
    },
  ],
  '/leetcode/': [
    {
      text: '返回总目录',
      icon: 'sort',
      link: '/posts/',
    },
    {
      text: 'LeetCode',
      icon: 'leetcode',
      prefix: '',
      link: '/leetcode/',
      children: 'structure',
    },
  ],
  '/coder/': [
    {
      text: '返回总目录',
      icon: 'sort',
      link: '/posts/',
    },
    {
      text: 'Coder',
      icon: 'coding',
      prefix: '',
      link: '/coder/',
      children: [],
    },
    {
      text: 'Web前端',
      icon: 'HTML',
      prefix: 'frontend/',
      children: 'structure',
      link: '/coder/frontend/',
    },
    {
      text: 'golang',
      icon: 'goicon',
      prefix: 'golang/',
      children: 'structure',
      link: '/coder/golang/',
    },
  ],
  '/skills/': [
    {
      text: '返回总目录',
      icon: 'sort',
      link: '/posts/',
    },
    {
      text: '技巧',
      icon: 'zhiliangjishu',
      prefix: '',
      link: '/skills/',
      children: 'structure',
    },
  ],
  '/favorite/': [
    {
      text: '返回总目录',
      icon: 'sort',
      link: '/posts/',
    },
    {
      text: '影视',
      icon: 'movie',
      prefix: 'movies/',
      link: '/favorite/movies/',
      children: 'structure',
    },
    {
      text: '音乐',
      icon: 'music',
      prefix: 'music/',
      children: 'structure',
      link: '/favorite/music/',
    },
    {
      text: '相册',
      icon: 'xiangce',
      prefix: 'photos/',
      children: 'structure',
      link: '/favorite/photos/',
    },
    {
      text: '链接',
      icon: 'link',
      prefix: 'links/',
      children: 'structure',
      link: '/favorite/links/',
    },
  ],
  // 整体路由划分
  '/': [
    '',
    '/leetcode/',
    {
      text: '博文',
      icon: 'note',
      prefix: 'posts/',
      link: '/posts/',
      children: 'structure',
    },
    {
      text: '收藏',
      icon: 'favoritea',
      link: '/favorite/',
      children: [
        {
          text: '影视',
          icon: 'movie',
          link: '/favorite/movies/',
        },
        {
          text: '音乐',
          icon: 'music',
          link: '/favorite/music/',
        },
        {
          text: '相册',
          icon: 'xiangce',
          link: '/favorite/photos/',
        },
        {
          text: '链接',
          icon: 'link',
          link: '/favorite/links/',
        },
      ],
    },
    {
      text: '技巧',
      icon: 'zhiliangjishu',
      prefix: 'skills/',
      link: '/skills/',
      children: 'structure',
    },
    {
      text: '工具',
      icon: 'gongju',
      prefix: 'tools/',
      link: '/tools/',
      children: 'structure',
    },
    {
      text: 'Linux',
      icon: 'linux',
      prefix: 'linux/',
      link: '/linux/',
      children: [
        {
          text: 'Debian',
          icon: 'debianos',
          link: '/linux/Debian/',
        },
        {
          text: 'Settings',
          icon: 'shezhi',
          link: '/linux/Settings/',
        },
      ],
    },
    {
      text: 'Coder',
      icon: 'coding',
      prefix: 'coder/',
      link: '/coder/',
      children: [
        {
          text: 'Web前端',
          icon: 'HTML',
          link: '/coder/frontend/',
        },
        {
          text: 'Golang',
          icon: 'goicon',
          link: '/coder/golang/',
        },
      ],
    },
    {
      text: '关于',
      icon: 'info',
      prefix: 'about/',
      link: '/about/website.html',
      children: 'structure',
    },
  ],
});
