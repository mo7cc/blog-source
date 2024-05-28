<script setup lang="ts">
import AppPackage from '../../../package.json';

const textConsole = `   
███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗╚════██║
██╔████╔██║██║   ██║    ██╔╝
██║╚██╔╝██║██║   ██║   ██╔╝ 
██║ ╚═╝ ██║╚██████╔╝   ██║  
╚═╝     ╚═╝ ╚═════╝    ╚═╝`;

const PrintlnInfo = () => {
  const PackageData: any = AppPackage;
  const Text = `${textConsole}${PackageData.version}`;
  console.log(`%c${Text}`, 'color: #eddfcd');
  return Text;
};
</script>

<template>
  <ClientOnly>
    <div class="none">版本打印{{ PrintlnInfo() }}</div>
  </ClientOnly>
</template>

<style lang="scss"></style>
