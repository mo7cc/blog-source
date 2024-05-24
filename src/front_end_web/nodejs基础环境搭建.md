---
order: 1

category:
  - 前端
tag:
  - 工具
  - 技巧
  - 环境搭建
  - 教程

permalink: /front_end_web/nodejs_ready.html
---

# nodejs 基础环境搭建

官网：

<https://nodejs.org/en>

## MacOS 和 Windows

安装文档:

<https://nodejs.org/en/download/prebuilt-installer>

### 第一步，查看机器硬件架构类型

打开终端做如下输入并回车

```bash
arch
# 会打印显示:  arm64
```

### 第二步，下载安装包

https://nodejs.org/en/download/prebuilt-installer

![下载NodeJS](./image/download_nodejs.png)

然后无脑下一步。

## Linux 下安装 NodeJs

Github 文档:

https://github.com/nodesource/distributions

总结下来就两行命令

```bash

curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs

```

Github 文档写的非常详细，这里就不再赘述了。

## 验证安装结果

重启终端做如下输入

```bash
node -v
# 会打印当前 nodejs 版本 v20.12.2

npm -v
# 会打印当前 npm 版本 10.5.2
```

> 至此 nodejs 安装成功

## npm 加速设置

npm 是 nodejs 的包管理器，一般安装 nodejs 会自带 npm。
因为官方镜像 <https://registry.npmjs.org> 在海外，所以直接使用 npm 速度会非常慢，很多时候会导致依赖安装失败。所以一般来说说需要做一些设置来进行网络加速。

### 1. 使用阿里云镜像

阿里云镜像应该是目前国内使用最普遍的 npm 镜像站了

镜像官网：
https://www.npmmirror.com/

直接执行如下命令即可完成镜像源的替换

```bash
npm config set registry https://registry.npmmirror.com
```

它会创建 `~/.npmrc` 文件，并填充如下内容

```conf
registry=https://registry.npmmirror.com
```

> 这个配置文件如果放在 `~/.npmrc` 用户目录下就是全局设置，如果放在项目目录下 `./.npmrc`，则作为项目的独立设置。

同理，想要换回官方镜像，手动删除 `~/.npmrc` 中对应的配置项，或者执行如下命令

```bash
npm config delete registry
```

### 2. 使用全局的命令行代理

> 具体细节可参考文章 [科学上网与本地代理](../developer/科学上网与本地代理.md)

如果你把代理关了，使用 npm 更新依赖时会有如下显示

![npm更新依赖报错](./image/npm_local_propxy.png)

---

::: info 提示

上述两种加速方式，任选其一即可。

命令行代理则更为通用一些，本质上也会更安全纯粹一些。

不过一般情况下 阿里云镜像已经可以满足 90% 的使用场景了。

:::

---

## pnpm

pnpm 现在呼声很高，因为其非常优异的机制和设计，速度很快。避免了部分 npm 的坑。
是一个非常棒的 npm 的替代品。

pnpm 官网:
https://pnpm.io/zh/

官网给了很多的 pnpm 的安装方式，但是我推荐的安装方式只有一种

```bash
npm install -g pnpm
```

> 其余的安装方式多多少少都会存在一些问题

全局依赖的安装依然推荐使用 `npm -g` ，项目目录依赖则推荐使用 `pnpm`，这样不会乱，而且会很清爽，问题也最少。

> pnpm 和 npm 一样，会优先使用项目目录的 `./.npmrc` 配置文件，如果项目目录不存在才会使用 用户目录下的 `~/.npmrc`

## 环境安装结果的验证

打开命令行工具，依次验证如下命令

```bash
node -v
# v20.12.2

npm -v
# 10.5.2

pnpm -v
# 9.1.2

npm config get registry
pnpm config get registry
# 如果设置了镜像源 则会输出 https://registry.npmmirror.com 的镜像地址

```

---
