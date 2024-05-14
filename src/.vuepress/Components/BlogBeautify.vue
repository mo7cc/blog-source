<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div class="none">主题美化</div>
  </ClientOnly>
</template>

<style lang="scss">
// 首页边栏信息按钮的颜色
.vp-blog-type-button .icon-wrapper.active {
  color: rgba($color: #fff, $alpha: 0.8);
}

.vp-back-to-top-button {
  opacity: 0.6;
}

.vp-project-card {
  box-shadow: 0 1px 3px 1px var(--card-shadow);
}

.vp-sidebar a {
  color: inherit;
}

// 主题 白天
[data-theme='light'] {
  hr {
    &::before {
      border-color: #000;
    }
    &::after {
      color: #000;
    }
  }

  .theme-container {
    .vp-page {
      .vp-blogger-info {
        background: rgba($color: #fff, $alpha: 0.6);
      }
      .vp-blog-infos {
        background: rgba($color: #fff, $alpha: 0.6);
      }
      .vp-article-item {
        background: rgba($color: #fff, $alpha: 0.6);
      }
    }

    .vp-pagination-nav input {
      background-color: rgba($color: #fff, $alpha: 0.6);
    }
    .vp-pagination-button {
      background-color: rgba($color: #fff, $alpha: 0.6);
    }
    .vp-pagination-number div {
      background-color: rgba($color: #fff, $alpha: 0.6);
      &.active {
        background-color: var(--theme-color);
      }
    }
  }
}

// 主题 黑夜
[data-theme='dark'] {
  hr {
    &::before {
      border-color: #fff;
    }
    &::after {
      color: #fff;
    }
  }

  .theme-container {
    .vp-page {
      .vp-blogger-info {
        background: rgba($color: #000, $alpha: 0.4);
      }
      .vp-blog-infos {
        background: rgba($color: #000, $alpha: 0.4);
      }
      .vp-article-item {
        background: rgba($color: #000, $alpha: 0.4);
      }
      .vp-pagination-nav input {
        background-color: rgba($color: #000, $alpha: 0.4);
      }
      .vp-pagination-button {
        background-color: rgba($color: #000, $alpha: 0.4);
      }
      .vp-pagination-number div {
        background-color: rgba($color: #000, $alpha: 0.4);
        &.active {
          background-color: var(--theme-color);
        }
      }
    }
  }
}

// 文章末尾加分割线
hr {
  position: relative;
  margin: 0.8rem auto;
  box-sizing: content-box;
  overflow: visible;
  height: 1rem;
  border: none;
  cursor: pointer;
  background: transparent;
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: calc(100% - 0.25rem);
    height: 0;
    border-width: 0.125rem;
    border-style: dashed;
    opacity: 0.2;
  }
  &::after {
    position: absolute;
    line-height: 1.6rem;
    top: -0.4rem;
    left: 1%;
    font-family: 'iconfont';
    content: '\e66c';
    z-index: 2;
    font-size: 1.6rem;
    transition: 1s;
    opacity: 0.2;
  }
  &:hover {
    &::after {
      opacity: 0.8;
      left: calc(99% - 1.6rem);
    }
  }
}
</style>
