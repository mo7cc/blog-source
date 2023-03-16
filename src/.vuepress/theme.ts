import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  陕ICP备2022011574号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>`;

export default hopeTheme({
  // 热更新
  hotReload: false,
  hostname: 'https://blog.mo7.cc',

  author: {
    name: '墨七',
    url: 'https://mo7.cc',
    email: 'mo7@mo7.cc',
  },

  iconAssets: '//at.alicdn.com/t/c/font_3855310_p3z6ugbxr7a.css',

  logo: '/pwa/144.png',
  editLink: false,
  fullscreen: true,
  themeColor: {
    // blue: '#2196f3',
    red: '#e493d0',
    green: '#3eaf7c',
    orange: '#fb9b5f',
  },
  pageInfo: ['Author', 'Category', 'Date', 'Original', 'Tag', 'ReadingTime', 'Word', 'PageView'],

  blog: {
    avatar: '//file.mo7.cc/static/lxh_gif/lxh_71.gif',
    roundAvatar: true,
    medias: {
      // Baidu: 'https://example.com',
      // BiliBili: 'https://example.com',
      // Bitbucket: 'https://example.com',
      // Dingding: 'https://example.com',
      // Discord: 'https://example.com',
      // Dribbble: 'https://example.com',
      Email: 'mailto:mo7@mo7.cc',
      // Evernote: 'https://example.com',
      // Facebook: 'https://example.com',
      // Flipboard: 'https://example.com',
      // Gitee: 'https://example.com',
      GitHub: 'https://github.com/mo7cc',
      // Gitlab: 'https://example.com',
      // Gmail: 'https://example.com',
      // Instagram: 'https://example.com',
      Lark: 'https://www.feishu.cn/invitation/page/add_contact/?token=bd8gde7a-515c-44bb-8471-7223eec3634d&amp;unique_id=u7kWF-SYY70MOcFU2LvbXA==',
      // Lines: 'https://example.com',
      // Linkedin: 'https://example.com',
      // Pinterest: 'https://example.com',
      // Pocket: 'https://example.com',
      // QQ: 'https://example.com',
      // Qzone: 'https://example.com',
      // Reddit: 'https://example.com',
      // Rss: 'https://example.com',
      // Steam: 'https://example.com',
      // Twitter: 'https://example.com',
      // Wechat: 'https://example.com',
      // Weibo: 'https://example.com',
      // Whatsapp: 'https://example.com',
      // Youtube: 'https://example.com',
      Zhihu: 'https://www.zhihu.com/people/meichangliang',
    },
  },
  repo: 'https://github.com/mo7cc/BlogSource.git',
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Repo', 'Outlook'], // '', 'Outlook',
  },

  navbarAutoHide: 'always',

  footer: footerICP_HTML,
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
    components: {
      // 你想使用的组件
      components: ['BiliBili'],
    },
    blog: true,
    copyCode: {
      showInMobile: true,
    },
    feed: {
      atom: true,
      json: true,
      rss: true,
    },
    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: false,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: false,
      mark: true,
      mermaid: false,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
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
      },
    },
  },
});
