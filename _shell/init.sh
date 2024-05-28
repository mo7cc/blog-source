#!/bin/bash

## git 设置初始化
function GitConfigInit() {
  echo " 已覆盖 Git 设置 "
  # 设置大小写敏感
  git config core.ignorecase false
  # 忽略文件权限的变更
  git config core.filemode false
  # 禁用 pull.rebase
  git config pull.rebase false
  # 提交时转换为 LF，检出时不转换
  git config --global core.autocrlf input
  # 提交包含混合换行符的文件时，发出警告
  git config --global core.safecrlf warn
  # init 默认分支设置为 main
  git config --global init.defaultBranch main
  # 修改文件权限为开放
  chmod -R 777 ./
}

# 当前项目根目录
NowPath=$(pwd)

# 最终的输出目录
OutPutPath="${NowPath}/dist"

# 远程仓库目录地址
GitRemotePackagePath="git@github.com:mo7-web/mo7-web.github.io.git"

# Deploy 完成之后的输出
DeployEndText="
https://github.com/mo7-web/mo7-web.github.io
https://blog.mo7.cc
"

echo "
===== 初始化变量 =====

当前目录: ${NowPath}
输出目录: ${OutPutPath}
远程仓库目录: ${GitRemotePackagePath}
完成之后的输出: ${DeployEndText}

"
