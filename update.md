# 更新记录

## 写新文章固定清单

1. 复制 `posts/_template.md` 为 `posts/短名.md`，填好 `title` / `date`，正文写 markdown（不写一级标题）。
2. 图片放 `assets/img/`，md 里用 `![说明](assets/img/xxx.png)`。
3. 在 `index.html` 「最近文章」列表最上方插入一行：
   `<li><a href="post.html?file=短名">标题</a><span class="post-date">日期</span></li>`
4. 在本文件末尾追加本次改动说明。
5. `git add -A` → 规范 commit → `git push`。
6. 验证：`https://mlbdzj.github.io/post.html?file=短名`

---

## 2026-09-06 完善博客主页（极简纯文字风格）

- 重写 `index.html`：加入导航栏、个人简介（文字头像+昵称+一句话）、最近文章列表、社交链接、页脚。
- 新增 `style.css`：全站极简样式（白底黑字、无装饰、单容器居中、基础响应式）。
- 新增 `posts/sample-post.html`：示例文章页，作为后续写文章的模板。
- 页脚年份用内联 JS 自动更新，免去逐年手动维护。

### 待办占位（自行替换）
- 首页昵称与一句话介绍：目前使用 `mlbdzj` 与示例文案。
- 邮箱链接：`yourname@example.com` 需替换为真实邮箱。

## 2026-09-06 文章改为 markdown + 客户端渲染

- 新增 `post.html`：文章渲染模板。访问 `post.html?file=文件名` 读取 `posts/文件名.md` 并渲染。
- 新增 `assets/marked.min.js`：本地化的 markdown 解析库（marked v12.0.2），无需 CDN。
- 新增 `posts/sample-post.md`：示例文章改为 markdown，删除原 `posts/sample-post.html`。
- `index.html` 文章链接改为 `post.html?file=sample-post`。
- `style.css`：增加 markdown 渲染正文的排版（标题/列表/引用/代码/表格等）。

### 文章 front-matter 约定
每篇 md 文件头部写：
```
---
title: 文章标题
date: 2026-09-06
---
```
正文无需再写一级标题。若没有 front-matter，会取正文第一个 `#` 作为标题。

### 预览说明
fetch 读取本地 md 需要 HTTP 服务，不能用 file:// 双击打开，需运行 `python -m http.server` 后访问 `http://localhost:8000/post.html?file=sample-post`。

## 2026-09-06 修复 GitHub Pages 托管兼容性

- 新增根目录空文件 `.nojekyll`：跳过 GitHub Pages 默认的 Jekyll 构建，确保 `posts/*.md` 以原始文件发布、前端 fetch 正常读取。

## 2026-09-06 新增写作模板与固定清单

- 新增 `posts/_template.md`：可复制的空文章模板（front-matter + 各类元素示例）。
- `update.md` 顶部新增「写新文章固定清单」，汇总 6 步发布流程。
