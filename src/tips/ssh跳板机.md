---
category:
  - 技巧
tag:
  - 科学上网
  - 代理
  - github
  - ssh

permalink: /tips/ssh_jump.html
---

# ssh 跳板机

> 通过设置 ProxyCommand 来进行 ssh 跳板机

代理 github ssh 协议 和 ssh 登录加速。

文件:`~/.ssh/config`

```conf

Host itpo.mo7.cc
  HostName itpo.mo7.cc
  User root

Host test-www.OtterTrade.com
  HostName test-www.OtterTrade.com
  User root

Host www.OtterTrade.com
  HostName www.OtterTrade.com
  User root

Host github.com
  HostName github.com
  User git
  ProxyCommand ssh -W %h:%p test-www.OtterTrade.com

```
