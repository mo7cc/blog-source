#!/bin/bash

## 设置并加载变量
# shellcheck disable=SC1091
source "./.vscode/shell/init.sh"

GitConfigInit

## 判断参数
desc=$1
if [ -z "${desc}" ]; then
  echo -e "\033[31m Err:需要同步说明 \033[0m"
  exit 1
fi
echo "git commit: ${desc}"

git pull &&
  git add . &&
  git commit -m "${desc}" &&
  git push &&
  echo "同步完成"

exit 0
