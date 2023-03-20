<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';

const BlogBg = () => {
  if (!document.querySelector('.BlogBg')) {
    var body = document.body;
    var bgDiv = document.createElement('div');
    bgDiv.className = 'BlogBg';
    body.appendChild(bgDiv);
  }
};

onMounted(() => {
  nextTick(() => {
    BlogBg();
  });

  const router = useRouter();
  router.beforeEach(() => {
    nextTick(() => {
      setTimeout(() => {
        BlogBg();
      }, 50);
    });
  });
});
</script>
