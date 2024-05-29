---
category:
  - developer
tag:
  - 工具
  - 技巧
  - 教程

order: 2
permalink: /tools/git/git_ready.html
---

# Git 的介绍与安装

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

Git 与常用的版本控制工具 CVS, Subversion, SVN 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

::: info
这个是 [菜鸟网络](https://www.runoob.com/git/git-tutorial.html) 里面关于 Git 的介绍和描述，我们画一下重点，`Linus`大神为了管理 `Linux` 内核专门开发了一款工具，这个就是 `Git`。

包括被 微软以[75 亿美元](https://cloud.tencent.com/developer/article/2206714)收购的[Github](https://github.com) 。看名字也知道其内核也是 Git 。

Git 是目前市场上最普遍的代码版本管理工具了。
:::

## 安装

**Windows**

https://git-scm.com/download/win

> 直接点击选择 `64-bit Git for Windows Setup` 下载 `.exe` 文件，然后双击无脑下一步即可。

**macOS**

https://git-scm.com/download/mac

> 一般来说，macOS 本地自带 git，无需折腾。

**Linux**

只需要一行命令即可

```bash
sudo apt-get install git
```

## 基本的设置

```bash
git version
# 查看当前安装的 git 版本

# 设置用户名
git config --global user.name <name>
# 如：git config --global user.name 墨七

# 设置邮箱
git config --global user.email <email>
# 如：git config --global user.email mo7@mo7.cc

# 查看设置好的用户名
git config user.name

# 查看设置好的邮箱
git config user.email

# 设置大小写敏感
git config core.ignorecase false

# 禁用中文转码
git config --global core.quotepath false

# 提交时转换为 LF，检出时不转换
git config --global core.autocrlf input

# 提交包含混合换行符的文件发出警告
git config --global core.safecrlf warn

# 忽略文件权限变更
git config --global core.filemode false

# 设置 init 时 默认分支为 main
git config --global init.defaultBranch main

```

以上都属于最基本的配置，一般来说都是在开始工作之前必要的配置项。
