---
order: 1

category:
  - Golang
tag:
  - 工具
  - 环境搭建
  - 教程

permalink: /developer/golang/golang_install.html
---

# go 基础开发环境搭建

官网地址：
https://golang.google.cn/

国内 Wiki
https://learnku.com/go/wikis

## Windows && MacOS

第一步，在命令行输入 `arch` 查看机器硬件架构类型

```bash
arch
# 会打印显示:  arm64
```

第二步，下载对应的安装包

官网安装包下载地址：
https://golang.google.cn/dl/

国内镜像站：
https://studygolang.com/dl

> 这利推荐使用官网的下载地址，实测国内镜像存在版本落后问题。

![下载go安装包](./image/download-go.png)

Windows 下载 `.mis` 文件，无脑下一步
MacOS 下载 `.pkg` 文件，无脑下一步

## Linux

相关操作脚本如下:

注意区分 amd 和 arm 架构，
每次版本更新时 只需要将版本号 `go1.22.4` 换成最新版本号即可。

```bash
# 查看机器硬件架构类型
arch

# 下载 x86 版本
curl -o "goPackage" https://dl.google.com/go/go1.22.4.linux-amd64.tar.gz

# 或者 下载 ARM 版本
curl -o "goPackage" https://dl.google.com/go/go1.22.4.linux-arm64.tar.gz

# 删除老版本(亲测，不删除老版本会出现各种莫名其妙的问题)
rm -rf /usr/lib/go

# 解压 goPackage
sudo tar -zxvf goPackage -C /usr/lib

# 删除 goPackage
rm -rf goPackage

# 设置添加环境变量，这个操作只需要进行一次
sudo vim /etc/profile

# 追加如下内容
export GOROOT=/usr/lib/go
export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

# 重新加载配置
source /etc/profile

# 检查安装结果
go version

```

## 设置代理 Linux 、 Windows 、 MacOS 均一样

https://goproxy.cn/

```bash

# 设置代理
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct


# 查看当前go环境配置，是否修改成功
go env

```

## 开始

```bash
## 初始化仓库
go mod init <projectName>
```

```go title="./main.go"
package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("Hello", os.Args[1])
	os.Exit(42)
}
```

```bash
## 运行
go run main.go

## 编译
go build
# 会输出一个二进制运行文件

```

## 多版本管理

https://www.cnblogs.com/pebblecome/p/14815365.html

> go 并不需要版本管理，我的建议是直接使用最新版本
