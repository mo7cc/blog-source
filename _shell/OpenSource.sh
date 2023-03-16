#!/bin/bash

## 设置并加载变量
source "./_shell/init.sh"
NowPath=${NowPath}
OutPutPath=${OutPutPath}

## 开源 站点源码 到 git@github.com:mo7cc/BlogSource.git
SourcePath="git@github.com:mo7cc/BlogSource.git"

rm -rf "${OutPutPath}"
mkdir "${OutPutPath}"

cp -rf "${NowPath}/src" "${OutPutPath}/src"
cp -rf "${NowPath}/.gitignore" "${OutPutPath}/"
cp -rf "${NowPath}/tsconfig.json" "${OutPutPath}/"
cp -rf "${NowPath}/package.json" "${OutPutPath}/"
cp -rf "${NowPath}/README.md" "${OutPutPath}/"
cp -rf "${NowPath}/_shell" "${OutPutPath}/_shell"
cp -rf "${NowPath}/pnpm-lock.yaml" "${OutPutPath}/"

cd "${OutPutPath}" || exit
nowTime=$(date +%Y-%m-%d\T%H:%M:%S)
git init
git add .
git commit -m "${nowTime}"
git remote add origin "${SourcePath}"
git push -f --set-upstream origin master:main
echo "同步完成"
rm -rf "${OutPutPath}/.git"

echo "开源版本发布完成"
echo "https://github.com/mo7cc/BlogSource"

exit 0
