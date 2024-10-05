---
category:
  - Golang
tag:
  - 工具
  - 环境配置

permalink: /developer/golang/shell-format.html
---

# shell-format 插件

::: warning

该文档有待补充和完善

:::

vscode 的 shfmt 插件配置

```bash
go install mvdan.cc/sh/v3/cmd/shfmt@latest

# 一般来说安装位置会在
# ~/go/bin/shfmt

ln -s ~/go/bin/shfmt /usr/local/bin/shfmt

```

然在 vscode 配置文件中

```json
{
  "shellformat.path": "/usr/local/bin/shfmt"
}
```
