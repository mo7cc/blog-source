<script setup lang="ts">
defineProps<{ name: string; spin?: boolean }>();
</script>

<template>
  <span class="iconfont icon" :class="[`icon-${name}`]" v-bind="spin ? { 'data-spin': '' } : {}" />
</template>

<style lang="scss">
.icon {
  font-size: 1em;
}
</style>
