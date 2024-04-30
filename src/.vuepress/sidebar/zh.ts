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
    link: '/frontend/',
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
    back_developer,
    {
      text: 'LeetCode',
      icon: 'leetcode',
      prefix: '',
      link: '/leetcode/',
      children: 'structure',
    },
  ],
  '/frontend/': [
    back_developer,
    {
      text: 'Web前端',
      icon: 'HTML',
      prefix: '',
      link: '/frontend/',
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
  '/devBlogProcess/': [
    back_posts,
    {
      text: '博客美化教程',
      icon: 'lujing',
      prefix: '',
      link: '/devBlogProcess/',
      children: 'structure',
    },
  ],
  '/developer/': [
    back_posts,
    {
      text: '感悟',
      icon: 'ganwu',
      prefix: '',
      link: '/developer/',
      children: 'structure',
    },
    ...coder_arr,
  ],
  '/skills/': [
    back_posts,
    {
      text: '技巧',
      icon: 'zhiliangjishu',
      prefix: '',
      link: '/skills/',
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
        {
          text: '感悟',
          icon: 'ganwu',
          link: '/developer/',
        },
        ...coder_arr,
      ],
    },

    {
      text: '其它',
      icon: 'other',
      children: [
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
        '/devBlogProcess/',
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
