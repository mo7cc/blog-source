import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

const NavBarBeautify = defineAsyncComponent(() => import('./components/NavBarBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const PrintVersion = defineAsyncComponent(() => import('./components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./components/CommentHideBtn.vue'));
const MyLinks = defineAsyncComponent(() => import('./components/MyLinks.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const FooterEdit = defineAsyncComponent(() => import('./components/FooterEdit.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyLinks', MyLinks);
    app.component('MyIcon', MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    NavBarBeautify,
    HeroBG,
    HeroHitokoto,
    NavMusic,
    PrintVersion,
    CommentHideBtn,
    BlogBg,
    BlogBeautify,
    FooterEdit,
    // ...
  ],
});
