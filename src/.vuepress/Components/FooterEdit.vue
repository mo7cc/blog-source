<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  陕ICP备2022011574号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>`;

const FooterEdit = () => {
  const VpFooter = document.getElementsByClassName('vp-footer');
  if (VpFooter && VpFooter.length > 0) {
    VpFooter[0].innerHTML = footerICP_HTML;
  }
};

onMounted(() => {
  nextTick(() => {
    FooterEdit();
  });

  const router = useRouter();
  router.beforeEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        FooterEdit();
      }, 500);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">修改页脚</div>
  </ClientOnly>
</template>

<style lang="scss">
// 底部信息的样式
.vp-footer-wrapper {
  .vp-footer {
    display: flex;
  }

  .footer-icp {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    & > img {
      width: 14px;
      margin-right: 4px;
    }
  }
  .footer-about {
    padding: 2px 3px;
    border-radius: 3px;
    position: relative;
    color: #fff;
    &:hover {
      background-color: rgba($color: #0c7bf4, $alpha: 0.8);
    }
  }
}
</style>
