<script setup lang="ts">
import { document } from '../data/document.js';
import { friend } from '../data/friend.js';
import { tools } from '../data/tools.js';

const props = defineProps<{
  type: string;
  src: string;
}>();

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
}
</script>

<template>
  <div class="MyLinks project-panel" v-if="props.type">
    <template v-if="linkData.length > 0">
      <template v-for="(item, index) in linkData">
        <a
          class="linkWrapper project"
          target="_blank"
          :class="`project${index % 9}`"
          :href="item.href"
          :key="index"
          v-if="item.type.indexOf(props.type) > -1"
        >
          <img class="image" :src="item.cover" />
          <div class="name">
            {{ item.name }}
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
        </a>
      </template>
    </template>
  </div>
</template>

<style lang="scss" scoped>
a.linkWrapper {
  text-decoration: none;
}
</style>
