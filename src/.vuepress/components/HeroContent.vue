<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const RemoveVpElms = () => {
  const vpBlogImage = document.querySelector('.vp-blog-hero > .vp-blog-hero-image');
  if (vpBlogImage) {
    vpBlogImage.remove();
  }
  const vpBlogTitle = document.querySelector('.vp-blog-hero > .vp-blog-hero-title');
  if (vpBlogTitle) {
    vpBlogTitle.remove();
  }
  const vpBlogDescription = document.querySelector('.vp-blog-hero > .vp-blog-hero-description');
  if (vpBlogDescription) {
    vpBlogDescription.remove();
  }
};

const InnerMo7Content = () => {
  const mo7HeroContentElm = document.getElementById('mo7-blog-hero-content');
  if (!mo7HeroContentElm) {
    return;
  }
  const vpSlideDownButton = document.querySelector('.vp-blog-hero > .slide-down-button');
  if (!vpSlideDownButton) {
    return;
  }

  const blogHeroElms = document.getElementsByClassName('vp-blog-hero');
  if (blogHeroElms.length < 1) {
    return null;
  }
  const blogHeroElm = blogHeroElms[0];

  blogHeroElm.insertBefore(mo7HeroContentElm, vpSlideDownButton);
};

const EditHeroContent = () => {
  RemoveVpElms();
  InnerMo7Content();
};

onMounted(() => {
  nextTick(() => {
    EditHeroContent();
  });

  const router = useRouter();
  router.afterEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        EditHeroContent();
      }, 50);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">Bing壁纸</div>
  </ClientOnly>
</template>

<style lang="scss">
// 隐藏元素
.vp-blog-hero > .vp-blog-hero-image,
.vp-blog-hero > .vp-blog-hero-title,
.vp-blog-hero > .vp-blog-hero-description {
  display: none;
}

#mo7-blog-hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .vp-blog-hero-image {
    transition: all 0.5s;
    width: 124px;
    display: block;
    padding: 0;
    border: none;
    margin: 0 auto;
  }

  .link {
    transition: all 0.5s;
    display: block;
    color: #eee;
    cursor: pointer;
    padding: 10px 26px;
    border-radius: 8px;
    text-shadow: 5px 3px 3px rgba(0, 0, 0, 0.7);
    text-align: center;
    &.image-link {
      padding: 10px;
    }
    h2 {
      padding: 0;
      margin: 0;
      font-size: 1.8rem;
      border: none;
    }
    span {
      font-size: 1rem;
    }
    h1 {
      padding: 0;
      margin: 0;
      border: none;
      font-size: 3.8em;
      .vp-blog-hero-subtitle {
        font-size: 2.4rem;
      }
    }
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      text-decoration: underline;
    }
  }
  .link-1 {
    animation: 1s showAnimation;
  }
  .link-2 {
    animation: 1.4s showAnimation;
  }
  .link-3 {
    animation: 1.8s showAnimation;
  }
  .link-4 {
    animation: 2.2s showAnimation;
  }
  .link-5 {
    animation: 2.6s showAnimation;
  }
  .link-6 {
    animation: 3s showAnimation;
  }
}

@keyframes showAnimation {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
