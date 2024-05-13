---
permalink: /golang/vscode_golang.html
---

# golang vscode 开发环境搭建

按住 F1 按键

输入: `go:install`

然后选择安装

## 额外的一些配置工具（好像也不是很有必要）

https://www.jianshu.com/p/0f150ea1fd48

```bash
## 更严格的代码格式化工具
go install mvdan.cc/gofumpt@latest

```

## 风格

https://blog.csdn.net/zhetmdoubeizhanyong/article/details/102534172

## gofumpt

settings.json

```json
{
  "go.useLanguageServer": true,
  "gopls": {
    "formatting.gofumpt": true
  }
}
```
