---
category:
  - 教程
tag:
  - 代理
  - 科学上网
  - 技巧
  - 教程

order: 2
permalink: /tutorial/wsl_proxy.html
---

# WSL 配置系统代理

一般情况下，WSL2 的 IP 地址每次启动时都会改变，如果想要在 wsl2 中使用 Windows 系统的代理，可以使用如下代码。

进入 WSL 在 `~/.bashrc` 中添加如下指令

```bash
host_ip=$(cat /etc/resolv.conf | grep "nameserver" | cut -f 2 -d " ")
export ALL_PROXY="socks5://$host_ip:10808"
```

::: info
这里的原理就是:
`/etc/resolv.conf` 文件中始终会更新当前 `WSL2` 在 `Windows` 系统中的局域网 IP，所以就写一行指令动态获取该 IP。

也可以使用

```bash
export ALL_PROXY="http://$host_ip:10809"
```

:::

效果如下：

::: warning
本地代理客户端必须要勾选 `允许来自局域网的连接`，也就是说，如果关闭代理客户端，`WSL2` 就等于处在断网状态。
:::

![WSL代理设置](./image/wsl_proxy.png)

简单来说是以下几步

1. 打开本地的代理工具，设置好端口如 10809
2. 在 wsl 中设置好动态的 ip 脚本
3. 查看 Windows 的系统代理是否 OK
4. 在 WSL 中测试一下是否可以访问 google.com
5. 如果不行就试着重新安装 `WSL` 或者重启系统

---
