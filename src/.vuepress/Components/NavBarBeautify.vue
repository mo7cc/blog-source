<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const CheckScrollTopClass = (path?) => {
  let toPath = window.location.pathname;
  const scrollTop = document.documentElement.scrollTop;
  if (path) {
    toPath = path;
  }
  const themeElms = document.getElementsByClassName('theme-container');
  if (themeElms.length < 1) {
    return null;
  }
  const themeElm = themeElms[0];
  if (scrollTop < 60 && (toPath == '/' || toPath == '/en/')) {
    themeElm.classList.add('scroll-top');
  } else {
    themeElm.classList.remove('scroll-top');
  }
};

onMounted(() => {
  nextTick(() => {
    window.removeEventListener('scroll', () => {});
    CheckScrollTopClass(); // 切换时顶栏修改
    window.addEventListener('scroll', () => {
      CheckScrollTopClass();
    });
  });

  const router = useRouter();
  router.beforeEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        CheckScrollTopClass(to.fullPath); // 切换时顶栏修改
      }, 50);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">修改顶栏组件</div>
  </ClientOnly>
</template>

<style lang="scss">
// sidebar 跟随顶栏一起上下移动
.theme-container {
  .vp-sidebar {
    transition: top 0.3s;
  }
  .toggle-sidebar-wrapper {
    transition: top 0.3s;
  }

  &.hide-navbar {
    .vp-sidebar {
      top: 0;
    }
    .toggle-sidebar-wrapper {
      top: 0;
    }
    .vp-toc-placeholder {
      top: 0.5rem;
    }
  }
}

// 顶部导到达顶部时
.theme-container.scroll-top {
  .vp-navbar {
    // 顶部透明背景
    background-color: transparent !important;
    backdrop-filter: none;
    box-shadow: none;
    .vp-site-name {
      // 左边的名字颜色调整
      color: #eee;
      text-shadow: 0.05rem 0.05rem 0.1rem rgb(0 0 0 / 50%);
      opacity: 0.85;
    }
  }
}

// hero 背景置顶
.theme-container .vp-page.vp-blog {
  padding-top: 0;
}

// 索引页面顶部调整
.blog-page-wrapper {
  .vp-blog-main {
    margin-top: calc(var(--navbar-height) + 0.75rem);
    min-height: 685px;
  }
}
.vp-blog-hero + .blog-page-wrapper {
  .vp-blog-main {
    margin-top: 0.4em;
  }
}

// 简化搜索按钮
.search-pro-button {
  .search-pro-placeholder,
  .search-pro-key-hints {
    display: none;
  }
  border-radius: 100%;
  background-color: transparent;
  border-color: transparent;
}

// 去除下拉图标
.vp-navbar {
  .vp-dropdown-title .arrow {
    display: none;
  }
}

// 白天
[data-theme='light'] {
  .theme-container.scroll-top {
    // 搜索按钮
    .search-pro-button {
      color: #eee;
      &:hover {
        color: #2c3e50;
      }
    }

    .vp-dropdown-title {
      color: #eee;
    }
    .vp-navbar {
      .vp-nav-item > .vp-link {
        color: #eee;
      }
      .vp-outlook-button {
        color: #eee;
      }
    }

    // 移动端
    .vp-toggle-sidebar-button::before,
    .vp-toggle-sidebar-button::after,
    .vp-toggle-sidebar-button .icon {
      background: #eee;
    }

    .vp-toggle-navbar-button .vp-top,
    .vp-toggle-navbar-button .vp-middle,
    .vp-toggle-navbar-button .vp-bottom {
      background: #eee;
    }
  }
}

// 黑夜细节
[data-theme='dark'] {
  .theme-container.scroll-top {
    // 顶栏颜色修改
    .search-pro-button {
      color: #fff;
      &:hover {
        color: #fff;
      }
    }

    .vp-dropdown-title {
      color: rgba($color: #fff, $alpha: 0.7);
    }
    .vp-navbar {
      .vp-nav-item > .vp-link {
        color: rgba($color: #fff, $alpha: 0.7);
      }
      .vp-outlook-button {
        color: rgba($color: #fff, $alpha: 0.7);
      }
    }

    // 移动端
    .vp-toggle-sidebar-button::before,
    .vp-toggle-sidebar-button::after,
    .vp-toggle-sidebar-button .icon {
      background: rgba($color: #fff, $alpha: 0.7);
    }

    .vp-toggle-navbar-button .vp-top,
    .vp-toggle-navbar-button .vp-middle,
    .vp-toggle-navbar-button .vp-bottom {
      background: rgba($color: #fff, $alpha: 0.7);
    }
  }
}
</style>
