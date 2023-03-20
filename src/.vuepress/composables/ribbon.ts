import { onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";

export const setupRibbon = () => {
  const router = useRouter();

  const runRibbon = () => {
    nextTick(() => {
      if (!document.getElementById("bgCanvas")) {
        import("../script/ribbonClick.js").then(({ default: ribbonClick }) => {
          ribbonClick();
        });
      }
    });
  };

  onMounted(() => {
    runRibbon();

    router.afterEach(() => {
      runRibbon();
    });
  });
};
