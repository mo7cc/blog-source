import { defineClientConfig } from '@vuepress/client';
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';

const NavBarBeautify = defineAsyncComponent(() => import('./Components/NavBarBeautify.vue'));
const HeroBG = defineAsyncComponent(() => import('./Components/HeroBG.vue'));
const HeroHitokoto = defineAsyncComponent(() => import('./Components/HeroHitokoto.vue'));
const NavMusic = defineAsyncComponent(() => import('./Components/NavMusic.vue'));
const PrintVersion = defineAsyncComponent(() => import('./Components/PrintVersion.vue'));
const CommentHideBtn = defineAsyncComponent(() => import('./Components/CommentHideBtn.vue'));
const MyLinks = defineAsyncComponent(() => import('./Components/MyLinks.vue'));
const MyIcon = defineAsyncComponent(() => import('./Components/MyIcon.vue'));
const BlogBg = defineAsyncComponent(() => import('./Components/BlogBg.vue'));
const BlogBeautify = defineAsyncComponent(() => import('./Components/BlogBeautify.vue'));

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
    // ...
  ],
});
