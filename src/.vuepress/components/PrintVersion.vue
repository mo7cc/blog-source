<script setup lang="ts">
import AppPackage from '../../../package.json';

const textConsole = `mo7.cc   `;

const PrintlnInfo = () => {
  const PackageData: any = AppPackage;
  const Text = `${textConsole}${PackageData.version}`;
  console.log(`%c${Text}   `, `color:#01a9a3;font-size:1rem;font-style: italic;`);
  return Text;
};
</script>

<template>
  <ClientOnly>
    <div class="none">版本打印{{ PrintlnInfo() }}</div>
  </ClientOnly>
</template>

<style lang="scss"></style>
