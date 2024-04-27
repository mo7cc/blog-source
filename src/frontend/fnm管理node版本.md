# 用 fnm 来管理 node 版本

https://github.com/Schniz/fnm

```bash

curl -fsSL https://fnm.vercel.app/install | bash


# ~/.zshenv    ~/.bashrc
export FNM_NODE_DIST_MIRROR=https://npmmirror.com/mirrors/node/
eval "$(fnm env --use-on-cd)"

```
