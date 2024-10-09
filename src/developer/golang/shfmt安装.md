---
category:
  - Golang
tag:
  - 工具
  - 环境配置

permalink: /developer/golang/shell-format.html
---

# shell-format 插件配置

https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format

非常好用的一款 shell 脚本格式化插件，但是安装插件后可能无法直接使用，需要如下操作。

```bash

# 下载 shfmt
go install mvdan.cc/sh/v3/cmd/shfmt@latest

# 一般来说安装位置会在 `~/go/bin/shfmt` 下
# MacOS 和 Linux 执行如下命令 创建软链接即可
sudo ln -s ~/go/bin/shfmt /usr/local/bin/shfmt

```

Windows 下则需要如下命令

```PowerShell

# windows PowerShell 则需要进行如下操作 (当shfmt更新后，需要重新执行一下)
Copy-Item -Path "~/go/bin/shfmt" -Destination "/usr/local/bin/shfmt" -Force
Copy-Item -Path "~/go/bin/shfmt.exe" -Destination "/usr/local/bin/shfmt.exe" -Force

# 如果目录不存在则执行
mkdir /usr/local/bin

```

然后在 vscode 配置文件中：

```json
{
  "shellformat.path": "/usr/local/bin/shfmt"
}
```

## 后记

> 实测，VSCode 的配置文件中无法支持 `~/go/bin/shfmt` 或者 `$HOME/go/bin/shfmt` 这样的路径。\
> 但是 `/usr/local/bin/shfmt` 在 Windows 下会被翻译成 `C:\usr\local\bin\shfmt`
