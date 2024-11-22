import { defineClientConfig } from 'vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import 'vuepress-theme-hope/presets/bounce-icon.scss'; // 为页面图标添加鼠标悬停的跳动效果。

const TopNavBeautify = defineAsyncComponent(() => import('./components/TopNavBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
// const HeroHitokoto = defineAsyncComponent(() => import('./components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));
const PrintVersion = defineAsyncComponent(() => import('./components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./components/CommentHideBtn.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./components/BlogBeautify.vue'));
const PreviewImage = defineAsyncComponent(() => import('./components/PreviewImage.vue'));
const HeroContent = defineAsyncComponent(() => import('./components/HeroContent.vue'));

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('MyIcon', MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    HeroContent,
    TopNavBeautify,
    HeroBG,
    // HeroHitokoto,
    NavMusic,
    PrintVersion,
    CommentHideBtn,
    BlogBeautify,
    BlogBg,
    PreviewImage,
    // ...
  ],
});
