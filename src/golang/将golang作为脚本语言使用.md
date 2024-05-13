---
permalink: /golang/golang_shell.html
---

# 将 golang 作为脚本语言使用

为什么？

https://github.com/erning/gorun

## 使用方式

```bash

go install github.com/erning/gorun@latest


sudo mv ~/go/bin/gorun /usr/local/bin/

```

## 区别

```bash
go build ./main.go

./main

echo $?

```

执行的结果是 42

```bash

go run ./main.go

```

执行的结果是 1
