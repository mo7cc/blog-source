import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  陕ICP备2022011574号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>`;

export default hopeTheme({
  hostname: 'https://blog.mo7.cc',
  author: {
    name: '墨七',
    url: 'https://mo7.cc',
    email: 'mo7@mo7.cc',
  },
  iconAssets: '//at.alicdn.com/t/c/font_3855310_p3z6ugbxr7a.css',
  logo: '/pwa/144.png',
  docsDir: 'src',
  editLink: false,
  fullscreen: true,
  navbarAutoHide: 'always',
  footer: footerICP_HTML,
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],

  blog: {
    avatar: '//file.mo7.cc/static/lxh_gif/lxh_71.gif',
    roundAvatar: true,
    medias: {
      Email: 'mailto:mo7@mo7.cc',
      GitHub: 'https://github.com/mo7cc',
      Lark: 'https://www.feishu.cn/invitation/page/add_contact/?token=417h7852-934c-4f08-9112-00d257d0cdae&amp;unique_id=FnKsnwD3MN8t7zjWer4tqQ==',
      Zhihu: 'https://www.zhihu.com/people/meichangliang',
    },
  },

  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: '墨七',
        description: '简单快乐，理应如此。',
        intro: '/about/me.html',
        timeline: '美好的事情即将发生',
      },
    },
    '/en/': {
      navbar: enNavbar,
      sidebar: enSidebar,
      blog: {
        name: 'Mo7',
        description: 'Simple and happy, as it should be.',
        intro: '/en/intro.html',
        timeline: 'Something wonderful is about to  happen.',
      },
    },
  },

  encrypt: {
    config: {
      '/en/demo/encrypt.html': ['1234'],
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.png',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/pwa/144.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/pwa/144.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        shortcuts: [
          {
            name: '墨七',
            short_name: '墨七',
            url: '/',
            icons: [
              {
                src: '/pwa/192.png',
                sizes: '192x192',
                purpose: 'maskable',
                type: 'image/png',
              },
            ],
          },
        ],
      },
    },
  },
});
