import { sidebar } from 'vuepress-theme-hope';

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
};

const back_developer = {
  text: '返回Developer',
  icon: 'back',
  link: '/developer/',
};

const coder_arr = [
  {
    text: 'Linux',
    icon: 'linux',
    link: '/linux/',
  },
  {
    text: 'Web前端',
    icon: 'HTML',
    link: '/front_end_web/',
  },
  {
    text: 'Golang',
    icon: 'goicon',
    link: '/golang/',
  },
  {
    text: 'LeetCode',
    icon: 'leetcode',
    link: '/leetcode/',
  },
];

export const zhSidebar = sidebar({
  // 子路径
  '/about/': [
    back_posts,
    {
      text: '关于',
      icon: 'info',
      prefix: '',
      link: '/about/',
      children: 'structure',
    },
  ],
  '/tools/': [
    back_posts,
    {
      text: '工具',
      icon: 'gongju',
      prefix: '',
      link: '/tools/',
      children: 'structure',
    },
  ],
  '/linux/': [
    back_developer,
    {
      text: 'Linux',
      icon: 'linux',
      prefix: '',
      link: '/linux/',
      // children: 'structure',
      // children: [],
    },
    {
      text: 'Debian',
      icon: 'debianos',
      prefix: 'debian/',
      children: 'structure',
      link: '/linux/debian/',
    },
    {
      text: 'Settings',
      icon: 'shezhi',
      prefix: 'settings/',
      children: 'structure',
      link: '/linux/settings/',
    },
  ],
  '/leetcode/': [
    back_developer,
    {
      text: 'LeetCode',
      icon: 'leetcode',
      prefix: '',
      link: '/leetcode/',
      children: 'structure',
    },
  ],
  '/front_end_web/': [
    back_developer,
    {
      text: 'Web前端',
      icon: 'HTML',
      prefix: '',
      link: '/front_end_web/',
      children: 'structure',
    },
  ],
  '/golang/': [
    back_developer,
    {
      text: 'golang',
      icon: 'goicon',
      prefix: '',
      link: '/golang/',
      children: 'structure',
    },
  ],
  '/devBlogGuide/': [
    back_posts,
    {
      text: '本博客搭建指南',
      icon: 'boke',
      prefix: '',
      link: '/devBlogGuide/',
      children: 'structure',
    },
  ],
  '/developer/': [
    back_posts,
    ...coder_arr,
    {
      text: 'Developer',
      icon: 'developer',
      prefix: '',
      link: '/developer/',
      children: 'structure',
    },
  ],
  '/tips/': [
    back_posts,
    {
      text: '技巧',
      icon: 'tips',
      prefix: '',
      link: '/tips/',
      children: 'structure',
    },
  ],
  '/favorite/': [
    back_posts,
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
      text: 'Developer',
      icon: 'developer',
      link: '/developer/',
      children: [
        ...coder_arr,
        {
          text: 'Developer',
          icon: 'developer',
          link: '/developer/',
        },
      ],
    },

    {
      text: '其它',
      icon: 'other',
      children: [
        {
          text: '技巧分享',
          icon: 'tips',
          prefix: 'tips/',
          link: '/tips/',
          children: 'structure',
        },
        {
          text: '工具',
          icon: 'gongju',
          prefix: 'tools/',
          link: '/tools/',
          children: 'structure',
        },
        '/devBlogGuide/',
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
