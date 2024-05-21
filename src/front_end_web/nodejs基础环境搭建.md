---
order: 1
permalink: /front_end_web/nodejs_ready.html
---

# nodejs 基础环境搭建

## nodejs 的安装

官网：

https://nodejs.org/en

安装文档：

https://nodejs.org/en/download/prebuilt-installer

> 可以选择各种各样不同的安装方式

---

## 推荐使用 fnm 来安装和管理 nodejs 的版本

日常情况下我个人喜欢使用 fnm 来进行 nodejs 的安装与管理。

fnm 类似于 nvm，是一个 nodejs 版本管理工具， 他比 nvm 更加迅速，应该是目前已知最好的 nodejs 版本管理工具。

fnm 的特点是:

- 跨平台，支持 macOS、Windows、Linux。
- 使用 Rust 编写，速度快。发布为单文件，便于安装。
- 支持按应用自动切换 Node.js 版本。

fnm 的 Github 仓库地址：
https://github.com/Schniz/fnm

## 安装 fnm

MacOS && Linux

第一步， 打开命令行执行如下操作

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

第二步， 添加如下环境变量

```bash title=" ~/.zshenv 或 ~/.bashrc 文件中"
#  ~/.zshenv 或 ~/.bashrc 文件中:
export FNM_NODE_DIST_MIRROR=https://npmmirror.com/mirrors/node/
eval "$(fnm env --use-on-cd)"
```

## fnm 的使用

罗列远程服务器上所有的 nodejs 版本

```bash
fnm ls-remote
```

---

安装某一个版本的 nodejs

```bash
fnm install <version>
```

例如：

```bash
fnm install 20
```

则会安装 `Node v20.13.1 (arm64)` 也就是 node v20 的最新版本

---

列出当前机器上已经安装的所有 nodejs 版本

```bash
fnm ls
```

---

卸载某一版本的 Node

```bash
fnm uninstall  <version>
```

---

切换 Node 版本

```bash
fnm use <version>
```

---

将某一版本设为默认

```bash
fnm default <version>
```

---

::: info 这一套操作相当于完成了 fnm 对本地 nodejs 一些基本操作

增: `fnm install`
删: `fnm uninstall`
改: `fnm use` `fnm default`
查: `fnm ls-remote` `fnm ls`

:::

::: info Windows 环境

因为我 Windows 开发环境一直使用的是 [WSL](../linux/WSL子系统.md) ，如果 Windows 本体需要使用 nodejs 我建议直接下载 `.msi` 文件直接双击安装运行。

https://nodejs.org/en/download/prebuilt-installer

> 作为开发人员，我建议系统和开发环境越单纯越好。Linux 是一个非常不错的选择。

:::

---

## npm 代理的设置

npm 是 nodejs 的包管理器，一般安装 nodejs 会自带 npm。
因为一些原因，npm 官方资源的下载速度非常慢。所以一般来说会设置代理环境，设置代理一般有如下两种办法：

### 1. 使用阿里云镜像

镜像官网：
https://www.npmmirror.com/

一般来说直接执行如下命令即可

```bash
npm config set registry https://registry.npmmirror.com
```

他会创建 `~/.npmrc` 文件，并填充如下内容

```conf
registry=https://registry.npmmirror.com
```

> 这个配置文件如果放在 `~/.npmrc` 用户目录下就是全局设置，如果放在项目目录下 `./.npmrc`，则作为项目的独立设置。

### 2. 使用命令行代理

本地的代理工具启动 10809 本地代理服务端口，然后全局设置代理即可。所有的命令行请求都会走该代理服务。

```bash title=" ~/.zshenv 或 ~/.bashrc 文件中"
export http_proxy=http://127.0.0.1:10809
export https_proxy=http://127.0.0.1:10809
export ALL_PROXY=http://127.0.0.1:10809
```

> 具体细节可参考 [本地代理服务的搭建](../linux//本地代理服务的搭建.md)

---

::: info 提示

上述两种代理方式，任选其一即可。

命令行代理则更为通用一些，本质上也会更安全一些。

:::

---

## pnpm

pnpm 现在呼声很高，因为其非常优异的机制和设计，速度很快。解决了部分 npm 的坑。
是一个非常棒的 npm 的替代品。

pnpm 官网:
https://pnpm.io/zh/8.x/installation

官网给了很多的 pnpm 的安装方式，但是我推荐的安装和更新方式只有一种

```bash
npm install -g pnpm
```

全局包的安装推荐使用 `npm` ， 项目依赖则推荐使用 `pnpm`，这样不会乱，而且会很清爽，问题也最少。

> pnpm 会优先使用项目本地的 `.npmrc` 文件，而不会使用全局的 `.npmrc` 文件

---

## 环境安装验证

打开命令行工具，依次验证如下命令

```bash
fnm list-remote
# 经过一段网络延迟后，会输出所有历代的 nodejs 版本

node -v
# v20.12.2

npm -v
# 10.5.2

pnpm -v
# 9.1.2


npm config get registry
pnpm config get registry
# 会输出 https://registry.npmmirror.com 的镜像地址

```

## nodejs 系统级别的安装

在 Linux 服务器环境下，如果使用 `fnm` 来安装 `nodejs` ，则 bash 脚本是无法直接识别 `node` 命令的。

这个时候就需要系统级别的安装了。

https://github.com/nodesource/distributions

---
