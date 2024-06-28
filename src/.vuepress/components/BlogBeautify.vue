<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div class="none">主题美化</div>
  </ClientOnly>
</template>

<style lang="scss">
// 首页边栏信息按钮的选中颜色
.vp-blog-type-button .icon-wrapper.active {
  color: rgba($color: #fff, $alpha: 0.8);
}

.vp-back-to-top-button {
  opacity: 0.7;
}

.vp-project-card {
  box-shadow: 0 1px 3px 1px var(--card-shadow);
}

.vp-sidebar a {
  color: inherit;
}

@mixin articleLightBg {
  $my-alpha: 0.6;
  background: rgba($color: #fff, $alpha: $my-alpha);
  background-color: rgba($color: #fff, $alpha: $my-alpha);
}

// 主题 白天
[data-theme='light'] {
  .theme-container {
    .vp-page {
      .vp-blogger-info {
        @include articleLightBg;
      }
      .vp-blog-infos {
        @include articleLightBg;
      }
      .vp-article-item {
        @include articleLightBg;
      }
    }

    .vp-pagination-nav input {
      @include articleLightBg;
    }
    .vp-pagination-button {
      @include articleLightBg;
    }
    .vp-pagination-number div {
      @include articleLightBg;
      &.active {
        background-color: var(--theme-color);
      }
    }
  }
}

@mixin articleDarkBg {
  $my-alpha: 0.7;
  background: rgba($color: #000, $alpha: $my-alpha);
  background-color: rgba($color: #000, $alpha: $my-alpha);
}

// 主题 黑夜
[data-theme='dark'] {
  .theme-container {
    .vp-page {
      .vp-blogger-info {
        @include articleDarkBg;
      }
      .vp-blog-infos {
        @include articleDarkBg;
      }
      .vp-article-item {
        @include articleDarkBg;
      }
      .vp-pagination-nav input {
        @include articleDarkBg;
      }
      .vp-pagination-button {
        @include articleDarkBg;
      }
      .vp-pagination-number div {
        @include articleDarkBg;
        &.active {
          background-color: var(--theme-color);
        }
      }
    }
  }
}

//  hover 后出现 的小标签
[aria-label][data-balloon-pos]:after {
  border-radius: 0.8rem;
}
[aria-label][data-balloon-pos]:hover:before,
[aria-label][data-balloon-pos]:hover:after,
[aria-label][data-balloon-pos][data-balloon-visible]:before,
[aria-label][data-balloon-pos][data-balloon-visible]:after,
[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,
[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
  opacity: 0.7;
}

// 文章分割线变成小汽车
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
