#!/bin/bash
##WebHook:~ 发布 Mo7Blog ~

## 设置并加载变量
source "./_shell/init.sh"

## 执行项目升级
rm -rf node_modules
pnpm add vue@latest vuepress@next @vuepress/client@next vuepress-theme-hope@latest vuepress-plugin-search-pro@latest
pnpm install
pnpm update
