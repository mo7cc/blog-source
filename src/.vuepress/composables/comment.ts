import { onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { mStorage } from "../utils/tools.js";

export const setupCommentButton = () => {
  const router = useRouter();

  const showComment = () => {
    const commentElement =
      document.querySelector<HTMLElement>(".waline-wrapper");

    if (commentElement) {
      commentElement.classList.add("show");
      commentElement.classList.remove("hide");
      mStorage.set("CommentIsDisplay", true);
    }
  };
  const hideComment = () => {
    const commentElement =
      document.querySelector<HTMLElement>(".waline-wrapper");

    if (commentElement) {
      commentElement.classList.add("hide");
      commentElement.classList.remove("show");
      mStorage.set("CommentIsDisplay", false);
    }
  };

  const ReadeCommentIsDisplay = () => {
    const commentElement =
      document.querySelector<HTMLElement>(".waline-wrapper");

    if (commentElement) {
      const CommentIsDisplay = mStorage.get("CommentIsDisplay");
      if (CommentIsDisplay) {
        showComment();
      } else {
        hideComment();
      }

      commentElement.style.opacity = "1";
    }
  };

  const createCommentButton = () => {
    const CommentElm = document.querySelector(".waline-wrapper");
    if (!CommentElm) {
      return;
    }

    if (!document.getElementById("ShowComment")) {
      const showBtn = document.createElement("button");
      showBtn.id = "ShowComment";
      showBtn.innerHTML = "显示评论区";
      CommentElm.appendChild(showBtn);
    }
    if (!document.getElementById("HideComment")) {
      const showBtn = document.createElement("button");
      showBtn.id = "HideComment";
      showBtn.innerHTML = "隐藏评论区";
      CommentElm.appendChild(showBtn);
    }

    const showBtn = document.getElementById("ShowComment");
    const hideBtn = document.getElementById("HideComment");
    if (showBtn && hideBtn) {
      showBtn.onclick = showComment;
      hideBtn.onclick = hideComment;
    }
  };

  onMounted(() => {
    nextTick(() => {
      createCommentButton();
      ReadeCommentIsDisplay();
    });

    router.beforeEach(() => {
      nextTick(() => {
        setTimeout(() => {
          createCommentButton();
          ReadeCommentIsDisplay();
        }, 500);
      });
    });
  });
};
