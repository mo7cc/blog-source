<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const BlogBg = () => {
  if (!document.querySelector('.BlogBg')) {
    const body = document.body;
    const bgDiv = document.createElement('div');
    bgDiv.className = 'BlogBg';
    body.appendChild(bgDiv);
  }
};

const RibbonFun = () => {
  if (!document.getElementById('bgCanvas')) {
    const RibbonClick = import('../script/ribbonClick');
    RibbonClick.then((res) => {
      res.default();
    });
  }
};

onMounted(() => {
  nextTick(() => {
    BlogBg();
    RibbonFun();
  });

  const router = useRouter();
  router.beforeEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        BlogBg();
        RibbonFun();
      }, 50);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">彩色背景</div>
  </ClientOnly>
</template>

<style lang="scss">
@keyframes move {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax, 90vmax 90vmax, 60vmax 60vmax;
    background-position: -60vmax -60vmax, 50vmax -40vmax, 0vmax 10vmax, -40vmax -20vmax, 40vmax 40vmax;
  }
  50% {
    background-size: 90vmax 90vmax, 100vmax 100vmax, 80vmax 80vmax, 90vmax 90vmax, 60vmax 60vmax;
    background-position: -70vmax -70vmax, 40vmax -40vmax, 0vmax 10vmax, -50vmax -30vmax, 30vmax 30vmax;
  }
  75% {
    background-size: 80vmax 80vmax, 70vmax 70vmax, 80vmax 80vmax, 70vmax 70vmax, 50vmax 50vmax;
    background-position: -60vmax -60vmax, 60vmax -30vmax, 10vmax 10vmax, -40vmax -40vmax, 50vmax 50vmax;
  }
}

.BlogBg {
  user-select: none;
  pointer-events: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e493d0;
  background-image: radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
    radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
    radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
    radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
    radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));

  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax, 110vmax 110vmax, 90vmax 90vmax;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax, -30vmax -10vmax, 50vmax 50vmax;
  background-repeat: no-repeat;
  animation: 6s move linear infinite;

  &::after {
    content: '';
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    user-select: none;
    pointer-events: none;
  }
}

#bgCanvas {
  user-select: none;
  pointer-events: none;
}

// 层级调整 ， 全部需要 > 5
#app {
  position: relative;
  z-index: 5;
}

[data-theme='light'] {
  .BlogBg {
    &::after {
      // background-color: rgba($color: #eee, $alpha: 0.7);
      background-color: rgba($color: #fff, $alpha: 0.1);
    }
  }

  .theme-container {
    .vp-page.vp-blog {
      backdrop-filter: none;
    }

    .vp-page {
      background-color: rgba($color: #f8f8f8, $alpha: 0.7);
      backdrop-filter: saturate(150%) blur(0.75rem);
    }

    .vp-sidebar {
      background: transparent;
      backdrop-filter: saturate(150%) blur(0.75rem);
    }
  }
}

[data-theme='dark'] {
  .BlogBg {
    &::after {
      background-color: rgba(29, 32, 37, 0.7);
    }
  }

  .theme-container {
    .vp-page.vp-blog {
      backdrop-filter: none;
    }

    .vp-page {
      background-color: rgba($color: #0d1117, $alpha: 0.7);
      backdrop-filter: saturate(150%) blur(0.75rem);
    }

    .vp-sidebar {
      background: transparent;
      backdrop-filter: saturate(150%) blur(0.75rem);
    }
  }
}
</style>
