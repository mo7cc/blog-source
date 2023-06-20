# 个人博客

https://blog.mo7.cc

博客源码，基于 `VuePress Theme Hope` 搭建

## 博客框架

https://v2.vuepress.vuejs.org/zh/

## 主题文档

https://theme-hope.vuejs.press/zh/

## 官方案例

https://mrhope.site/

## 评论服务

文档\
https://waline.js.org

服务地址\
https://talk.mo7.cc

管理后台(Github 登录)
https://talk.mo7.cc/ui

## 图标

https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.22&manage_type=myprojects&projectId=3855310

## 运行

编译环境: Debian 11 bullseye

node 版本: v18 LTS

```bash

# 启用 pnpm
npm install -g pnpm

# 安装依赖
pnpm install

# 更新依赖
pnpm run update

# 运行
pnpm run dev

# 编译打包
pnpm run build

# 更新同步
pnpm run sync

# 发布到 https://blog.mo7.cc
pnpm run deploy

```

## 要解决报错

## 新的算法和参数已部署 版本说明:

1.  升级了算法和参数,详情访问主页查看【卫星服务详情页】
2.  新的算法和参数 ETH-USDT 1x 杠杆下平均年化已达到 600%
3.  ETH 平均每天 2 次交易, BTC 平均 3 天交易一次
4.  修复了邮件系统,现在市场方向改变会同步邮件给绑定了的用户
5.  最大杠杆倍数调低,系统会默认限制账户的最高杠杆倍率,
6.  去除了代码中的 panic 错误, 以节省系统资源
7.  提升了系统稳定性,降低故障率,增加运行时容错
8.  因为杠杆倍率调低了, 所以 200usdt 以下的账户可能会开仓失败【失败邮件会同步给当前用户】
9.  重置了卫星服务更新的时候已经帮助所有用户下单
10. `所有用户请检查自己的邮箱与 okx 账户,如果有异常请私信`

## 下一版本计划

1. 当前策略封版 `ETH-CoinAI` 将会更名为 `ETH-CAP`,BTC 同理 \
   【届时需要用户手动重新选择策略】
2. 抽离公共模块,制定代码和通信规范.
3. 开始构建社区生态, 吸收更多有想法的开发者共同参与
4. 除核心策略部分,系统其余部分将小范围内开源,让大牛共同参与开发
5. 横向拓展策略范围,系统将支持更多策略的并行计算,吸收更优秀的策略加入
6. 策略命名规范将定为 `币种名称-xxxx` 如 `DOGE-PDSD`, `PDSD`将不会变更
7. 构建自动化回测系统,评分达标的策略,则将由有权限的大牛出手整合进系统里面
