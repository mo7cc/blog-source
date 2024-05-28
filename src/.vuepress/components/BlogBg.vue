<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const BlogBg = () => {
  if (!document.getElementById('mo7_BlogBg')) {
    const bgDiv = document.createElement('div');
    bgDiv.id = 'mo7_BlogBg';
    document.body.appendChild(bgDiv);
  }
};

// const RibbonFun = () => {
//   if (!document.getElementById('mo7_bgCanvas')) {
//     const canvasElm = document.createElement('canvas');
//     canvasElm.id = 'mo7_bgCanvas';
//     document.body.appendChild(canvasElm);
//     const RibbonClick = import('../script/canvas-nest');

//     RibbonClick.then((res) => {
//       res.default({
//         ElemID: 'mo7_bgCanvas',
//       });
//     });
//   }
// };
/* 
https://www.jq22.com/code3511
https://www.jq22.com/code2347
https://www.jq22.com/code3541
https://www.jq22.com/code2555
https://www.jq22.com/code3274
https://www.jq22.com/code1365
*/

onMounted(() => {
  nextTick(() => {
    BlogBg();
    // RibbonFun();
  });

  const router = useRouter();
  router.beforeEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        BlogBg();
        // RibbonFun();
      }, 50);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">背景美化</div>
  </ClientOnly>
</template>

<style lang="scss">
@mixin noEvent {
  user-select: none; // 禁止选中
  pointer-events: none; // 禁止点击
}

@mixin bgCode_daytime {
  background-image: url('/img/asfalt-dark.png');
  // background-image: url('/img/bedge-grunge.png');
  background-color: rgba(224, 200, 170, 0.6);
}

@mixin bgCode_night {
  background-image: url('/img/bedge-grunge.png');
  background-color: rgba(0, 0, 0, 1);
}

html[data-theme='light'] {
  --border-color: rgba(44, 62, 80, 0.2);
}

html[data-theme='dark'] {
  --border-color: rgba(158, 158, 158, 0.2);
}

#mo7_BlogBg {
  // 布局代码
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  @include noEvent;

  // 设置蒙层
  &::after {
    content: '';
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    @include noEvent;
    background-color: transparent;
  }
}

#mo7_bgCanvas {
  @include noEvent;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
}

// 层级调整 ， 全部需要 > 5
#app {
  position: relative;
  z-index: 5;
}

.theme-container {
  .vp-page.vp-blog,
  .vp-page.vp-blog-home {
    background: transparent; // 博客背景
  }
}

[data-theme='light'] {
  #mo7_BlogBg {
    @include bgCode_daytime;
  }

  .theme-container {
    .vp-sidebar {
      background: transparent; // 侧边栏透明度
      backdrop-filter: blur(2px); // 毛玻璃效果
    }
  }
}

[data-theme='dark'] {
  #mo7_BlogBg {
    @include bgCode_night;
  }

  .theme-container {
    .vp-sidebar {
      background: transparent; // 侧边栏透明度
      backdrop-filter: blur(2px); // 毛玻璃效果
    }
  }
}

@media screen and (max-width: 719px) {
  .theme-container {
    .vp-blog-type-switcher {
      padding-top: 20px;
    }
  }

  [data-theme='light'] {
    .theme-container {
      .vp-sidebar {
        background: rgba(#fff, 0.8);
      }
      .vp-nav-screen {
        background: rgba(#fff, 0.9);
      }
    }
  }

  [data-theme='dark'] {
    .theme-container {
      .vp-sidebar {
        backdrop-filter: blur(18px); // 毛玻璃效果
      }
      .vp-nav-screen {
        background: rgba(#000, 0.9);
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  // 插入彩带

  [data-theme='light'] {
    .theme-container {
      .vp-sidebar {
        backdrop-filter: none; // 删除毛玻璃效果
      }
      .vp-sidebar > .vp-sidebar-links {
        padding-right: 8px;
      }

      .theme-hope-content {
        background-color: #fff;
        padding-top: 1.4rem !important;
        border-radius: 0.4rem;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      }

      .vp-sidebar > .vp-sidebar-links {
        & > li > .vp-sidebar-group {
          border-radius: 0.4rem;
          backdrop-filter: blur(2px); // 毛玻璃效果
          box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
          padding: 8px 0;
        }
      }
    }
  }

  [data-theme='dark'] {
    .theme-container {
      .vp-sidebar {
        backdrop-filter: none; // 删除毛玻璃效果
      }
      .vp-sidebar > .vp-sidebar-links {
        padding-right: 8px;
      }

      .theme-hope-content {
        background-color: #000;
        padding-top: 1.4rem !important;
        border-radius: 0.4rem;
        box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 8px 0px;
      }

      .vp-sidebar > .vp-sidebar-links {
        & > li > .vp-sidebar-group {
          border-radius: 0.4rem;
          backdrop-filter: blur(2px); // 毛玻璃效果
          box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 8px 0px;
          padding: 8px 0;
        }
      }
    }
  }
}
</style>
