<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { mStorage } from '../utils/tools.js';

const ShowComments = () => {
  const CommentElm = document.querySelector('.waline-wrapper') as HTMLElement;
  if (!CommentElm) {
    return;
  }
  CommentElm.classList.add('show');
  CommentElm.classList.remove('hide');
  mStorage.set('CommentIsDisplay', true);
};
const HideComments = () => {
  const CommentElm = document.querySelector('.waline-wrapper') as HTMLElement;
  if (!CommentElm) {
    return;
  }
  CommentElm.classList.add('hide');
  CommentElm.classList.remove('show');
  mStorage.set('CommentIsDisplay', false);
};

const ReadeCommentIsDisplay = () => {
  const CommentElm = document.querySelector('.waline-wrapper') as HTMLElement;
  if (!CommentElm) {
    return;
  }

  const CommentIsDisplay = mStorage.get('CommentIsDisplay');
  if (CommentIsDisplay) {
    ShowComments();
  } else {
    HideComments();
  }

  CommentElm.style.opacity = '1';
};

const CreateCommentBtn = () => {
  const CommentElm = document.querySelector('.waline-wrapper');
  if (!CommentElm) {
    return;
  }

  if (!document.getElementById('ShowComment')) {
    const showBtn = document.createElement('button');
    showBtn.id = 'ShowComment';
    showBtn.innerHTML = '显示评论区';
    CommentElm.appendChild(showBtn);
  }
  if (!document.getElementById('HideComment')) {
    const showBtn = document.createElement('button');
    showBtn.id = 'HideComment';
    showBtn.innerHTML = '隐藏评论区';
    CommentElm.appendChild(showBtn);
  }

  const showBtn = document.getElementById('ShowComment');
  const hideBtn = document.getElementById('HideComment');
  if (showBtn && hideBtn) {
    showBtn.onclick = ShowComments;
    hideBtn.onclick = HideComments;
  }
};

onMounted(() => {
  nextTick(() => {
    CreateCommentBtn();
    ReadeCommentIsDisplay();
  });

  const router = useRouter();
  router.beforeEach((to) => {
    nextTick(() => {
      setTimeout(() => {
        CreateCommentBtn();
        ReadeCommentIsDisplay();
      }, 500);
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none">评论区隐藏按钮</div>
  </ClientOnly>
</template>

<style lang="scss">
// 评论插件的样式修改
.wl-card .wl-meta > span {
  background: transparent;
}
#wl-edit {
  resize: none;
  min-height: 5em;
}
.waline-wrapper {
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: 0.3s;
  [provider='Waline'] {
    opacity: 0;
    margin-bottom: 5rem;
  }
  &.hide {
    max-height: 0;
    [provider='Waline'] {
      opacity: 0;
      transition: 0.3s;
    }
    #ShowComment {
      display: block;
    }
    #HideComment {
      display: none;
    }
  }
  &.show {
    max-height: 9999px;
    [provider='Waline'] {
      opacity: 1;
      transition: 0.3s;
    }
    #ShowComment {
      display: none;
    }
    #HideComment {
      display: block;
    }
  }
}

#ShowComment {
  top: 0;
}
#HideComment {
  bottom: 0;
}
#ShowComment,
#HideComment {
  display: none;
  position: absolute;
  left: 50%;
  margin-left: -4em;
  width: 8em;
  z-index: 5;
  user-select: none;
  cursor: pointer;
  background: var(--theme-color);
  color: rgba($color: #fff, $alpha: 0.9);
  border: 0;
  border-radius: 0.3em;
  padding: 0.3em 0.9em;
  transition: 0.3s;
  font-size: 0.9rem;
}
</style>
