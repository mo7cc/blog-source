#!/bin/bash

## 设置并加载变量
# shellcheck disable=SC1091
source "./_shell/init.sh"

NowPath=${NowPath:?}
OutPutPath=${OutPutPath:?}
GitRemotePath=${GitRemotePackagePath:?}
ShellEndInfo=${ShellEndInfo:?}

# ## 判断参数
desc=$1
if [ -z "${desc}" ]; then
  echo -e "\033[31m Err:需要发布说明 \033[0m"
  exit 1
fi
echo "git commit: ${desc}"

## 清理目录 dist 和 git 仓库
rm -rf "${OutPutPath}"

## 开始编译
pnpm run build &&
  cp "${NowPath}/package.json" "${OutPutPath}" &&
  cp "${NowPath}/README.md" "${OutPutPath}" &&
  echo "编译结束${OutPutPath}"

###################################################

# 开始进行发布步骤 OutPutPath -> 远程 DeployPath
cd "${OutPutPath}" || exit
git init &&
  git add . &&
  git commit -m "${desc}" &&
  git remote add origin "${GitRemotePath}" &&
  git push -f --set-upstream origin main:main &&
  echo "同步完成,开始清理工作目录"
rm -rf "${OutPutPath}"

###################################################

# 服务器直传
# ssh root@blog.mo7.cc "rm -rf /root/ProdProject/blog.mo7.cc"
# scp -r "${OutPutPath}" root@blog.mo7.cc:/root/ProdProject/blog.mo7.cc

###################################################

echo "发布完成： ${ShellEndInfo}"
