# github 加速心得

::: warning

该文档有待补充和完善

:::

## 添加 socks5 代理

```bash

git config --global http.proxy 'socks5://127.0.0.1:10808'
git config --global https.proxy 'socks5://127.0.0.1:10808'

```

## 设置代理

```bash

## 全局
git config --global http.proxy 'socks5://127.0.0.1:10808'
git config --global https.proxy 'socks5://127.0.0.1:10808'

## 只代理 github
git config --global 'http.https://github.com.proxy' 'http://127.0.0.1:10809'
git config --global 'https.https://github.com.proxy' 'http://127.0.0.1:10809'


##取消代理

git config --global --unset http.proxy
git config --global --unset https.proxy

## 仓库


## mac && linux
export http_proxy=http://127.0.0.1:10809;
export https_proxy=http://127.0.0.1:10809;
export ALL_PROXY=socks5://127.0.0.1:10808


# windows 环境变量

set http_proxy=socks5://127.0.0.1:10808
set https_proxy=socks5://127.0.0.1:10808



## wsl 代理设置


```
