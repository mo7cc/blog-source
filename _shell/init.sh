#!/bin/bash

## 环境变量
function GitSet {
  echo " ====== git设置大小写敏感,文件权限变更 ====== "
  git config core.ignorecase false

  git config --global core.fileMode false
  git config core.filemode false

  chmod -R 777 ./
}

# 项目根目录
NowPath=$(pwd)

# 最终的输出目录
OutPutPath="${NowPath}/dist"

# 远程仓库目录地址
DeployPath="git@github.com:mo7Web/Mo7BlogPackage.git"

# Deploy 完成之后的输出
DeployEndText="
https://github.com/mo7Web/Mo7BlogPackage
https://blog.mo7.cc
"

echo "
===== 初始化变量 =====

当前目录: ${NowPath}
输出目录: ${OutPutPath}
远程仓库目录: ${DeployPath}
完成之后的输出: ${DeployEndText}

"
