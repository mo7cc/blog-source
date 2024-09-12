import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';
import { getDirname, path } from 'vuepress/utils';
import { BlogPassword } from '../../__private/password.js';
const __dirname = getDirname(import.meta.url);

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  陕ICP备2022011574号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>
`;

export default hopeTheme({
  hostname: 'https://blog.mo7.cc',
  author: {
    name: '墨七',
    url: 'https://mo7.cc',
    email: 'mo7@mo7.cc',
  },
  darkmode: 'toggle',
  editLink: false,
  fullscreen: true,
  navbarAutoHide: 'always',
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
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  iconAssets: '//at.alicdn.com/t/c/font_3855310_3p4qtirn5xz.css',
  logo: '/pwa/144.png',
  docsDir: 'src',
  blog: {
    name: '墨七',
    avatar: '//file.mo7.cc/static/lxh_gif/lxh_71.gif',
    description: '专心致志做事，大气温和待人。',
    intro: 'https://blog.mo7.cc/about/me.html',
    medias: {
      Email: 'mailto:mo7@mo7.cc',
      GitHub: 'https://github.com/mo7cc',
      Discord: 'https://discord.gg/8yXKxbSDDg',
      Lark: 'https://www.larksuite.com/invitation/page/add_contact/?token=c8co337a-9dd7-4976-998f-5d2898o763r5&amp;unique_id=cgjGUk53Y2dh_FCZPuqY_A==',
      WechatPay: 'https://file.mo7.cc/static/img/wx_proceeds.jpg',
      QQ: 'https://file.mo7.cc/static/img/myqq.jpeg',
      Wechat: 'https://file.mo7.cc/static/img/mywchart.jpeg',
      Zhihu: 'https://www.zhihu.com/people/meichangliang',
      BiliBili: 'https://space.bilibili.com/24452567',
      Rss: 'https://blog.mo7.cc/atom.xml',
    },
  },

  footer: footerICP_HTML,
  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: '墨七',
        description: '专心致志做事，大气温和待人。',
        intro: '/about/me.html',
        timeline: '简单快乐，理应如此。',
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
      '/en/demo/encrypt.html': [BlogPassword],
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: true,
    photoSwipe: false, // 这个插件难用的 一 B

    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },

    components: {
      components: ['Badge', 'VPCard', 'BiliBili', 'PDF'],
    },

    copyright: false,

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/pwa/72.png',
      icon: '/pwa/512.png',
    },

    searchPro: {
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter(page: any) {
            return page.frontmatter.category;
          },
          formatter: {
            '/': '分类：$content',
            '/en/': 'Category: $content',
          },
        },
        {
          getter(page: any) {
            return page.frontmatter.tag;
          },
          formatter: {
            '/': '标签：$content',
            '/en/': 'Tag: $content',
          },
        },
      ],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: {
        resolvePath: (file) => {
          if (file.startsWith('@src')) {
            return file.replace('@src', path.resolve(__dirname, '..'));
          }
          return file;
        },
      },
      mark: true,
      imgMark: true,
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
      tasklist: true,
      vPre: true,
      breaks: true,
      linkify: true,
      alert: true,
      footnote: true,
      obsidianImgSize: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cacheImage: true,
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
