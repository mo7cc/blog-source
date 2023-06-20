<script setup lang="ts">
import { document } from '../data/document';
import { friend } from '../data/friend';
import { tools } from '../data/tools';
const props = defineProps({
  type: String,
  src: String,
});

let linkData = document;

switch (props.src) {
  case 'document':
    linkData = document;
    break;
  case 'tools':
    linkData = tools;
    break;
  case 'friend':
    linkData = friend;
    break;
  default:
    linkData = document;
    break;
}

const GetColorClassName = (index) => {
  const Idx = index % 9;
  return `project${Idx}`;
};
</script>

<template>
  <div class="MyLinks vp-project-panel" v-if="props.type">
    <template v-if="linkData.length > 0" v-for="(item, index) in linkData">
      <a
        class="linkWrapper vp-project-card"
        target="_blank"
        :class="GetColorClassName(index)"
        :href="item.href"
        v-if="item.type.indexOf(props.type) > -1"
      >
        <img class="vp-project-image" :src="item.cover" />
        <div class="vp-project-name">
          {{ item.name }}
        </div>
        <div class="vp-project-desc">
          {{ item.desc }}
        </div>
      </a>
    </template>
  </div>
</template>

<style lang="scss" scoped>
a.linkWrapper {
  text-decoration: none;
}
</style>
