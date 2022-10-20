#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

echo "tao.world" >> CNAME

git init
git add -A
git commit -m 'deploy'

git config user.name "taogesw"
git config user.email "wst17.165@163.com" 

# 如果发布到 https://<USERNAME>.github.io
git remote add origin https://github.com/taogesw/taogesw.github.io.git
git branch -M main
git push -u origin main

# cd -