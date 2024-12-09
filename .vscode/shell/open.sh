#!/bin/bash

## 设置并加载变量
# shellcheck disable=SC1091
source "./.vscode/shell/init.sh"

NowPath=${NowPath:?}
OutPutPath=${OutPutPath:?}
CachePath="${NowPath}/.cache"
GitRemotePath="git@github.com:mo7cc/blog-source.git"
DeployLocalPath="${CachePath}/blog-source"

## 判断参数
desc=$1
if [ -z "${desc}" ]; then
  echo -e "\033[31m Err:需要开源说明 \033[0m"
  exit 1
fi
echo "git commit: ${desc}"

## 清理本地 dist 目录  和 .cache 工作区目录
rm -rf "${OutPutPath}"
rm -rf "${CachePath}"

## 构建源码目录
mkdir "${OutPutPath}"
cp -rf "${NowPath}/private/VuePress_README.md" "${OutPutPath}/README.md"
cp -rf "${NowPath}/.vscode" "${OutPutPath}/.vscode"
cp -rf "${NowPath}/src" "${OutPutPath}/src"
cp -rf "${NowPath}/package.json" "${OutPutPath}/"
cp -rf "${NowPath}/pnpm-lock.yaml" "${OutPutPath}/"
cp -rf "${NowPath}/.gitignore" "${OutPutPath}/"
cp -rf "${NowPath}/tsconfig.json" "${OutPutPath}/"
cp -rf "${NowPath}/.prettierignore" "${OutPutPath}/"
cp -rf "${NowPath}/.prettierrc.cjs" "${OutPutPath}/"
cp -rf "${NowPath}/go.mod" "${OutPutPath}/"

# 开始进行发布步骤 OutPutPath -> 远程 DeployPath
## 拉取远程仓库
mkdir "${CachePath}"
cd "${CachePath}" || exit
git clone "${GitRemotePath}"

## git 本地仓库中 .git 移动到 dist 目录中
cp -af "${DeployLocalPath}/.git" "${OutPutPath}/.git"

## 删除本地 git 仓库
rm -rf "${DeployLocalPath}"

## dist 更名为 本地 git 仓库名
cp -af "${OutPutPath}" "${DeployLocalPath}" &&
  rm -rf "${OutPutPath}"

# 将仓库推送到远端
cd "${DeployLocalPath}" || exit

git add . &&
  git commit -m "${desc}" &&
  git push &&
  ## 清理 dist
  rm -rf ".git" &&
  echo "${DeployLocalPath}"
echo "${OutPutPath}"
# 将名字改回来
echo "已推送至${GitRemotePath}"

exit 0
