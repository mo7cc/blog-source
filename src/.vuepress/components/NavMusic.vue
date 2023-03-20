<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';

import MyIcon from './MyIcon.vue';
import { globalMusicList } from '../data/music.js';

import 'aplayer/dist/APlayer.min.css';

let player;

const display = ref(false);

const toggle = () => {
  display.value = !display.value;
};

const close = () => {
  display.value = false;
};

const InsertMenu = () => {
  const navCenterElm = document.querySelector('.navbar-end');

  if (!navCenterElm) {
    return;
  }

  if (!document.querySelector('#MyMusic_Menu')) {
    const div = document.createElement('div');

    div.id = 'MyMusic_Menu';
    div.classList.add('nav-item');
    div.innerHTML = `<div id="MyMusic_icon" class="btnImg"></div>`; // spin="true"
    navCenterElm.appendChild(div);
  }

  const Menu = document.querySelector<HTMLElement>('#MyMusic_Menu')!;
  const MyMusicWrapper = document.querySelector<HTMLElement>('.MyMusic')!;

  Menu.onclick = (event) => {
    toggle();
    event.stopPropagation();
  };

  MyMusicWrapper.onclick = (event) => {
    event.stopPropagation();
  };
};

const NewPlayer = (APlayer) => {
  if (!APlayer) {
    return;
  }

  // 如果不存在盒子 则 终止
  const playElm = document.getElementById('GlobalAPlayer');
  if (!playElm) {
    return;
  }
  // 判断是否被 APlayer 接管
  const playExist = playElm.classList.contains('aplayer');

  if (playExist) {
    return;
  }

  player = new APlayer({
    container: document.getElementById('GlobalAPlayer'),
    audio: globalMusicList,
    lrcType: 3,
    listFolded: false,
    listMaxHeight: '324px',
    mini: false,
    fixed: false,
    volume: 1,
    storageName: 'GlobalAPlayer',
  });

  player.on('play', () => {
    document.getElementById('MyMusic_icon')?.setAttribute('data-spin', '');
  });
  player.on('pause', () => {
    document.getElementById('MyMusic_icon')?.removeAttribute('data-spin');
  });
};

const stopMusic = () => {
  let toPath = window.location.pathname;

  if (toPath.includes('/music/') && player) player.pause();
};

onMounted(() => {
  const router = useRouter();

  import('aplayer').then(({ default: APlayer }) => {
    nextTick(() => {
      InsertMenu();
      NewPlayer(APlayer);
      stopMusic();

      // 在这里插入全局事件监听
      window.document.body.onclick = () => {
        close();
      };
    });

    router.beforeEach(() => {
      nextTick(() => {
        setTimeout(() => {
          InsertMenu();
          NewPlayer(APlayer);
        }, 50);
        setTimeout(() => {
          stopMusic();
        }, 2000);
      });
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="MyMusic">
      <div class="MyMusic_Play" :class="{ hide: !display }">
        <div class="close" @click="close">
          <MyIcon name="guanbi" />
        </div>
        <div id="GlobalAPlayer"></div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.MyMusic {
  position: fixed;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 12;
  cursor: pointer;
  user-select: none;
}

.MyMusic_Play {
  background-color: #fff;
  user-select: none;
  position: fixed;
  width: 280px;
  height: 392px;
  top: 50%;
  right: 50%;
  margin-right: -140px;
  margin-top: -217px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  transition: 0.3s;
  transform: scale(1);
  opacity: 1;
  &.hide {
    top: 6%;
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
  }

  .aplayer {
    margin: 0;
  }

  .close {
    position: absolute;
    right: 8px;
    top: 8px;
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    z-index: 11;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
}

#MyMusic_Menu {
  top: 1px;
  user-select: none;
  cursor: pointer;
  opacity: 0.7;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--theme-color);
  height: 1.6rem;
  width: 1.6rem;

  .icon {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .btnImg {
    background-image: url('/img/playBtn.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
