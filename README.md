# 仓库说明

> [!warning]
> 该仓库必须处于绝对的保密之下。

## 仓库同步方法

先从 [Github](https://github.com/mo7-web/mo7_obsidian_data) 中拉取本仓库，然后 下载 [Obsidian](https://obsidian.md/) 打开该仓库。

## Obsidian 插件说明

**RemotelySave:** 同步插件，使用 OneDrive

忽略的文件:

```txt
node_modules/
dist/
pnpm-lock.yaml
package-lock.json
.DS_Store
.obsidian/
.vscode
```

允许同步的文件

```txt
assets/big_file/
```

其余的设置项:

- 所有试验性质的均不启用
- 需要同步 `_` 文件夹
- 删除文件需要保存到 `.trash` 目录中
- 选择如果修改超过百分比则终止同步 (去除此保护)

也就是说，只有 `assets/big_file/` 目录下的文件才会使用 OneDrive 进行同步，其余的文件均使用 `Github` 进行同步。然后关闭所有的自动同步。

---

**ExplorerHider:** 隐藏某些目录不在 Obsidian 资源管理器中显示。

只要打开 Excluded files 选项即可

---

**Excalidraw:** 牛逼的画图插件。

使用默认设置就好，无需任何额外配置。

---

## VuePress 个人博客

https://mo7.cc

用于 个人 日常 ，心得 ，笔记 记录

### 博客框架

https://v2.vuepress.vuejs.org/

### 主题文档

https://theme-hope.vuejs.press/

### 官方案例

https://theme-hope.vuejs.press/zh/demo/blog-home.html

### 音乐下载

https://tools.liumingye.cn/music

https://www.33z3.com/

https://bailemi.com/

https://zhuanlan.zhihu.com/p/577560145

### 评论服务

文档
https://waline.js.org

服务地址
https://talk.mo7.cc

管理后台(Github 登录)
https://talk.mo7.cc/ui

### 图标

https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.22&manage_type=myprojects&projectId=3855310

### 运行

编译环境: Debian 12

node 版本: v22.x

pnpm 版本: 9.x

```bash

# 启用 pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 更新依赖
pnpm run update-package

# 运行
pnpm run dev

# 编译打包
pnpm run build

# 更新同步
pnpm run sync

# 发布到 https://mo7.cc
pnpm run deploy

```
