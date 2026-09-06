# 更新记录

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
