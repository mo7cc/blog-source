<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const InsertText = (data) => {
  const Win: any = window;

  clearInterval(Win.Timer);

  const classElm = document.getElementsByClassName('vp-blog-hero-description');
  if (classElm.length > 0) {
    const textElm = classElm[0];
    textElm.id = 'hotWord';
  }

  const textElm = document.getElementById('hotWord');
  if (!textElm) {
    return;
  }

  textElm.innerHTML = `
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${data.from}」</div>
  `;

  // 打字机效果
  const authorElm = document.getElementById('hitokoto_author');

  const hitokotoElm = document.getElementById('hitokoto_text');
  if (!hitokotoElm || !authorElm) {
    return;
  }
  authorElm.style.opacity = '0';

  const txt = data.hitokoto.split('');

  let index = 0;
  let pauseNum = 0;
  let pauseMax = 40;
  let huan = false;
  let insertTxt = '';
  Win.Timer = setInterval(() => {
    const el = txt[index];

    if (insertTxt.length < 4) {
      authorElm.style.opacity = '0';
    } else {
      authorElm.style.opacity = '1';
    }

    if (pauseNum == 0) {
    } else {
      pauseNum--;

      if (insertTxt.length == 0 && pauseNum == 0) {
        clearInterval(Win.Timer);
        GetWord();
      }
      return;
    }

    if (huan) {
      insertTxt = insertTxt.slice(0, index);
    } else {
      insertTxt += el;
    }

    if (huan) {
      index--;
    } else {
      index++;
    }
    if (index >= txt.length) {
      huan = true;
      index = txt.length;
      pauseNum = pauseMax;
    }
    if (index < 0) {
      huan = false;
      index = 0;
      pauseNum = pauseMax;
    }

    hitokotoElm.innerHTML = insertTxt;
  }, 200);
};

const GetWord = (path?) => {
  let toPath = window.location.pathname;

  if (path) {
    toPath = path;
  }

  // if (toPath == '/' || toPath == '/en/') {
  if (toPath == '/') {
    axios({
      method: 'get',
      url: 'https://v1.hitokoto.cn',
      params: {},
    }).then((response) => {
      InsertText(response.data);
    });
  }
};

onMounted(() => {
  nextTick(() => {
    GetWord();
  });

  const router = useRouter();
  router.beforeEach((to) => {
    nextTick(() => {
      GetWord(to.fullPath);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">一言插件</div>
  </ClientOnly>
</template>

<style lang="scss">
// 一言
#hotWord {
  margin: 1.2rem auto 0;
  font-weight: 600;
  color: rgba($color: #fff, $alpha: 0.95);

  .word {
    position: relative;
    padding: 1rem 2.5rem;
    text-align: center;
    .left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .right {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .author {
    font-weight: 400;
    margin-top: 1rem;
    float: right;
  }
}

.word {
  font-family: '华文行楷';
}

#hitokoto_text {
  max-width: 80vw;
  position: relative;
  display: inline-block;
  font-size: 1.8rem;
  &::after {
    content: '|';
    font-size: 1.3rem;
    animation: san 0.8s infinite;
  }
}
#hitokoto_author {
  transition: 0.7s;
  font-family: 'STXingkai';
  font-style: italic;
  font-size: 1.2rem;
}

@keyframes san {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
