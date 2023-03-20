import { defineClientConfig } from '@vuepress/client';
import { defineAsyncComponent } from 'vue';

import {
  setupBlogBg,
  setupCommentButton,
  setupConsole,
  setupHeroHitokoto,
  setupNavbarHide,
  setupRibbon,
} from './composables/index.js';

const MyLinks = defineAsyncComponent(() => import('./components/MyLinks.vue'));
const MyIcon = defineAsyncComponent(() => import('./components/MyIcon.vue'));
const HeroBG = defineAsyncComponent(() => import('./components/HeroBG.vue'));
const NavMusic = defineAsyncComponent(() => import('./components/NavMusic.vue'));

export default defineClientConfig({
  enhance({ app }) {
    app.component('MyLinks', MyLinks);
    app.component('MyIcon', MyIcon);
  },
  setup() {
    setupBlogBg();
    setupCommentButton();
    setupConsole();
    setupHeroHitokoto();
    setupNavbarHide();
    setupRibbon();
  },
  rootComponents: [
    NavMusic,
    HeroBG,
    //...
  ],
});
