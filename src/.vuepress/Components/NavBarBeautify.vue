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
    <div class="none">修改顶栏</div>
  </ClientOnly>
</template>

<style lang="scss">
// 搜索按钮
.search-pro-button {
  .placeholder,
  .key-hints {
    display: none;
  }
  border-radius: 100%;
  background-color: transparent;
  border-color: transparent;
}

// 导航栏动画
.navbar {
  .dropdown-wrapper .dropdown-title .arrow {
    display: none;
  }
}

.theme-container .sidebar {
  transition: 0.3s;
  top: var(--navbar-height);
}
.toggle-sidebar-wrapper {
  transition: 0.3s;
  top: var(--navbar-height);
}

.hide-navbar {
  .sidebar {
    top: 0;
  }
  .toggle-sidebar-wrapper {
    top: 0;
  }
}

// 到达顶部时的导航栏
.theme-container.scroll-top {
  .navbar {
    background-color: transparent !important;
    backdrop-filter: none;
    box-shadow: none;
    .site-name {
      color: #eee;
      text-shadow: 0.05rem 0.05rem 0.1rem rgb(0 0 0 / 50%);
      opacity: 0.85;
    }
  }
}

.theme-container .page.blog {
  padding-top: 0;
}

#main-content.blog-main {
  margin-top: calc(var(--navbar-height) + 0.75rem);
}

[data-theme='light'] {
  .theme-container.scroll-top {
    .search-pro-button {
      color: #eee;
      &:hover {
        color: #2c3e50;
      }
    }

    .navbar {
      .site-name {
        color: #eee;
      }
      .nav-item {
        & > a.nav-link {
          color: #eee;
        }
        .dropdown-title > .title {
          color: #eee;
        }
        .dropdown-wrapper > .dropdown-title {
          color: #eee;
        }
        .outlook-button {
          color: #eee;
        }
      }

      .toggle-sidebar-button::before,
      .toggle-sidebar-button::after,
      .toggle-sidebar-button .icon {
        background: #eee;
      }
      .toggle-navbar-button .button-top,
      .toggle-navbar-button .button-middle,
      .toggle-navbar-button .button-bottom {
        background: #eee;
      }
    }
  }
}

[data-theme='dark'] {
  .theme-container.scroll-top {
    .navbar {
      .site-name {
        color: rgba($color: #fff, $alpha: 0.7);
      }
      .nav-item {
        & > a.nav-link {
          color: rgba($color: #fff, $alpha: 0.7);
        }
        .dropdown-title > .title {
          color: rgba($color: #fff, $alpha: 0.7);
        }
        .dropdown-wrapper > .dropdown-title {
          color: rgba($color: #fff, $alpha: 0.7);
        }
        .outlook-button {
          color: rgba($color: #fff, $alpha: 0.7);
        }
      }

      .toggle-sidebar-button::before,
      .toggle-sidebar-button::after,
      .toggle-sidebar-button .icon {
        background: rgba($color: #fff, $alpha: 0.7);
      }
      .toggle-navbar-button .button-top,
      .toggle-navbar-button .button-middle,
      .toggle-navbar-button .button-bottom {
        background: rgba($color: #fff, $alpha: 0.7);
      }
    }
  }
}
</style>
