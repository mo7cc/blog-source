import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

export const setupNavbarHide = () => {
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
};
