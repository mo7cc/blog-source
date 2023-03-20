import axios from 'axios';
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

export const setupHeroHitokoto = () => {
  const router = useRouter();

  let timer: any;

  const getTemplate = (text): string => `
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${text}」</div>
`;

  const insertText = (data) => {
    clearInterval(timer);

    const descriptionElement = document.getElementsByClassName('description');

    if (descriptionElement.length > 0) {
      const textElm = descriptionElement[0];
      textElm.id = 'hotWord';
    }

    const textElement = document.getElementById('hotWord');

    if (!textElement) {
      return;
    }

    textElement.innerHTML = getTemplate(data.from);

    // 打字机效果
    const authorElement = document.getElementById('hitokoto_author');
    const hitokotoElement = document.getElementById('hitokoto_text');

    if (!hitokotoElement || !authorElement) {
      return;
    }

    authorElement.style.opacity = '0';

    const txt = data.hitokoto.split('');

    let index = 0;
    let pauseNum = 0;
    let pauseMax = 20;
    let huan = false;
    let insertTxt = '';

    timer = setInterval(() => {
      const el = txt[index];

      if (insertTxt.length < 4) {
        authorElement.style.opacity = '0';
      } else {
        authorElement.style.opacity = '1';
      }

      if (pauseNum == 0) {
      } else {
        pauseNum--;

        if (insertTxt.length == 0 && pauseNum == 0) {
          clearInterval(timer);
          getWord();
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

      hitokotoElement.innerHTML = insertTxt;
    }, 200);
  };

  const getWord = (path?: string) => {
    let toPath = window.location.pathname;

    if (path) {
      toPath = path;
    }

    if (toPath == '/') {
      axios({
        method: 'get',
        url: 'https://v1.hitokoto.cn',
        params: {},
      }).then(({ data }) => {
        insertText(data);
      });
    }
  };

  onMounted(() => {
    nextTick(() => {
      getWord();
    });

    router.afterEach((to) => {
      getWord(to.fullPath);
    });
  });
};
