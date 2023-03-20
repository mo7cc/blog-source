import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

export const setupBlogBg = () => {
  const router = useRouter();

  const addBlogBg = () => {
    nextTick(() => {
      if (!document.querySelector('.BlogBg')) {
        var body = document.body;
        var bgDiv = document.createElement('div');
        bgDiv.className = 'BlogBg';
        body.appendChild(bgDiv);
      }
    });
  };

  onMounted(() => {
    addBlogBg();

    router.afterEach(() => {
      addBlogBg();
    });
  });
};
