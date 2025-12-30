### Hexo 常用指令

- `hexo new post` 文章名称 # 新建文章
- `hexo new page --path about/me "About me"` 新建带路径和目录的页面（单独页面）
- `hexo clean` # 清除缓存
- `hexo generate` # 生成静态页面至 public 目录
- `hexo server` # 开启预览访问端口（默认端口 4000，’ctrl + c’关闭 server）
- `hexo deploy` # 部署到 GitHub
- `hexo help` # 查看帮助
- `hexo version` # 查看 Hexo 的版本
- 生成的文章为 markdown 文件，`soure/_posts`目录下

[Hexo 全部指令](https://hexo.io/zh-cn/docs/commands)

#### 上传 GitHub

推荐不要使用`hexo clean && hexo deploy` ，直接 `hexo g -f -d`

```
# 首次上传
git config --global user.email "xxx" //设置邮箱 你的Github邮箱

git config --global user.name "xxx" //设置用户名 你的Github名称

hexo d
```
