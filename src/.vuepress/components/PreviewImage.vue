<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';

import MyIcon from './MyIcon.vue';

let ImageArr = ref([]);
let ShowPreviewBox = ref(false);
let CurrentImgIdx = ref(0);

function ClosePreviewBox() {
  ShowPreviewBox.value = false;
}

function zoomFunc() {
  console.log('放大');
}

function shrinkFunc() {
  console.log('缩小');
}

function fullscreenFunc() {
  console.log('全屏');
}

function downloadFunc() {
  console.log('下载');
}

function leftFunc() {
  console.log('向左');
}

function rightFunc() {
  console.log('向右');
}

function ImageClick(e) {
  const elm = e.target;
  console.log('elm', elm);
  ShowPreviewBox.value = true;
}

function InitPreviewImage() {
  console.log('init');

  let contentElms = document.getElementsByClassName('theme-hope-content');
  let contentElm = null;
  if (contentElms.length > 0) {
    contentElm = contentElms[0];
  }

  if (!contentElm) {
    return;
  }

  const images = contentElm.getElementsByTagName('img');
  console.log('images', images);

  const imaArr = [];
  for (let i = 0; i < images.length; i++) {
    const elm = images[i];
    imaArr.push({
      alt: elm.getAttribute('alt'),
      src: elm.getAttribute('src'),
    });

    console.log('elm', elm);

    elm.removeEventListener('click', ImageClick);
    elm.addEventListener('click', ImageClick);
  }
  ImageArr.value = imaArr;
}

onMounted(() => {
  nextTick(() => {
    InitPreviewImage();
  });

  const router = useRouter();
  router.afterEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        InitPreviewImage();
      }, 1000);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div v-if="ShowPreviewBox" class="Mo7PreviewBox">
      <div class="Mo7PreviewBox-topBar">
        <div class="btn" @click="leftFunc">
          <MyIcon class="icon" name="xiangzuo"></MyIcon>
        </div>
        <div class="btn" @click="rightFunc">
          <MyIcon class="icon" name="xiangyou"></MyIcon>
        </div>
        <div class="btn" @click.stop="zoomFunc">
          <MyIcon class="icon" name="fangda"></MyIcon>
        </div>
        <div class="btn" @click.stop="shrinkFunc">
          <MyIcon class="icon" name="suoxiao"></MyIcon>
        </div>
        <div class="btn" @click.stop="fullscreenFunc">
          <MyIcon class="icon" name="quanping"></MyIcon>
        </div>
        <div class="btn" @click.stop="downloadFunc">
          <MyIcon class="icon" name="xiazai"></MyIcon>
        </div>
        <div class="btn" @click.stop="ClosePreviewBox">
          <MyIcon class="icon" name="guanbi"></MyIcon>
        </div>
      </div>

      <img id="Mo7PreviewBox-img" :src="ImageArr[CurrentImgIdx].src" :alt="ImageArr[CurrentImgIdx].alt" srcset="" />
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.theme-hope-content {
  img {
    cursor: pointer;
  }
}

.Mo7PreviewBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow: hidden;

  .icon {
    color: #fff;
    font-size: 30px;
    cursor: pointer;
    padding: 10px;
    display: block;
  }

  .Mo7PreviewBox-topBar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .btn {
      margin-left: 20px;
    }
  }
}

#Mo7PreviewBox-img {
  max-width: 100%;
  max-height: 100%;
}
</style>
