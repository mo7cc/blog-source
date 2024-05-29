# git 常用命令和设置安装

```bash




```

::: warning

该文档有待补充和完善

:::

## git 设置

> 提交时转换为 LF，检出时不转换

    git config --global core.autocrlf input

> 提交包含混合换行符的文件发出警告

    git config --global core.safecrlf warn

> 设置用户名

    git config --global user.name <你的名字>

> 设置邮箱

    git config --global user.email <xxx@xxx.com>

> 查看用户名

    git config user.name

> 查看邮箱

    git config user.email

> 设置 git 记住密码

    git config --global credential.helper store

> 查看 git 设置

    git config --list

> 忽略文件权限

    git config --global core.fileMode false
    git config core.filemode false

> 设置大小写敏感

    git config core.ignorecase false

> git 提炼 commit

    git cherry-pick 哈希值

> 中文乱码

    git config --global core.quotepath false

```bash shell
#将目录变成仓库
git init

#添加文件到 git 仓库
git add <filename>

#查看未提交
git status

#暂存所有更改
git add .

#提交当前所有暂存
git commit –m <注释说明>

#克隆仓库
git clone <仓库地址>

#克隆某一个分支
git clone --single-branch -b <分支名称> <地址>

#切换分支
git checkout <分支名>

#合并分支
git merge <分支名>

#查看分支所有分支包括远程分支
git branch -a

#放弃所有更改和远端保持一致
git fetch --all
git reset --hard origin/master

#回退版本
git reset HEAD^  回退到上个版本
git reset --hard HEAD~3  回退到前3次提交之前，以此类推，回退到n次提交之前
git reset --hard commit_id

#新建分支
git checkout -b <name>

#将新建的分支推送到远端
git push --set-upstream origin <name>

#删除远端分支
git push origin :h5-Mark-test

#删除本地分支
git branch -d h5-Mark-test

#添加子模块 到 themes 目录下
git submodule add <git仓库地址> themes/ananke

# git cherry-pick
git cherry-pick b801301


```

## 多仓库推送配置方式 .git/config 文件打开:

```txt

[remote "all"]
url = ssh://git@116.62.132.166:9022/psg/hizhu_mis.git
url = https://gitee.com/hizhu_work/hizhu_mis.git

```

## git 学习发展线路

> git flow
> 持续集成，持续交付，持续部署
