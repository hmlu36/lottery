set -e # 打包
git add -A
git commit -m 'deploy' # 部署到 https://github.com/hmlu36/vue-bible.git 分支為 gh-pages
git push -f https://github.com/hmlu36/lottery master:gh-pages #將dist資料夾中的內容推送至遠端vue-bible的gh-pages分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
cd -