# 仓库说明

## 仓库同步方法

先从 git 中拉取本仓库，然后 下载 **Obsidian** 打开该仓库。该仓库必须处于绝对的保密之下。

**Obsidian** 打开后，使用 `Remotely Save` 插件命令即可执行同步。

OneDrive 不会同步的文件

```txt
node_modules/
dist/
.git/
pnpm-lock.yaml
package-lock.json
pnpm-lock.yaml
.DS_Store
```

所以，git 的 commit 记录不会同步。
如果 PC 端没有 `git push`，移动端 OneDrive 同步之后 则一定可以执行 `git push`。
反之，移动端本地文件和 `远程git仓库` 是一样的，但因为 `.git` 提交记录会少一层，则一定会冲突。所以移动端操作之前，尽量先执行 `git pull` 操作。

## 目录功能

`_shell`: 存放辅助脚本，可以通过快速命令执行一些操作。因为使用了 **Obsidian** 的 `Remotely Save` 插件，该仓库可以放在任意地方。

`.obsidian`: 仓库标志性目录，包括 **Obsidian** 的设置，配置项，对于目录的管理等。

`.trash`: 回收站文件，用 Obsidian 删除的文件会出现在这里，需要定期处理。

`随笔`: 日常记录，包括一些随笔，文章，读书笔记等。

`assets`: 静态资源，在本仓库中设置全部`基于仓库的根目录的绝对路径`为基础，进行图片、音频、视频等文件的存放，所以该目录中可能会出现一些非常大的文件，应当排除在 git 之外，通过 `OneDrive` 执行同步。

`private`: 个人隐私文件，包含密码、隐私日志，信息等。

`DiaryKeep`: 日记本，用于取代之前的 `weekly` 功能。

`Worker`: 打工人目录，用于存放工作文件。

`.gitignore`: git 忽略文件。

`package.json`: 方便使用 npm 执行一些脚本。

`随手记.md`: 快速的记录一些东西，在空闲时需要进行整理。

# 墨七的个人博客

https://blog.mo7.cc

用于 个人 日常 ，心得 ，笔记 记录

## 博客框架

https://v2.vuepress.vuejs.org/

## 主题文档

https://theme-hope.vuejs.press/

## 官方案例

https://theme-hope.vuejs.press/zh/demo/blog-home.html

## 音乐下载

https://tools.liumingye.cn/music

https://www.33z3.com/

https://bailemi.com/

https://zhuanlan.zhihu.com/p/577560145

## 评论服务

文档\
https://waline.js.org

服务地址\
https://talk.mo7.cc

管理后台(Github 登录)
https://talk.mo7.cc/ui

## 图标

https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.22&manage_type=myprojects&projectId=3855310

## 运行

编译环境: Debian 12

node 版本: v20.x

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

# 发布到 https://blog.mo7.cc
pnpm run deploy

```
