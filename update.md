# 更新记录

## 写新文章固定清单

1. 复制 `posts/_template.md` 为 `posts/短名.md`，填好 `title` / `date`，正文写 markdown（不写一级标题）。
2. 图片放 `assets/img/`，md 里用 `![说明](assets/img/xxx.png)`。
3. 在本文件末尾追加本次改动说明。
4. `git add -A` → 规范 commit → `git push`。
5. 验证：`https://mlbdzj.github.io/post.html?file=短名`

首页文章列表由脚本自动生成，**无需再手动编辑 `index.html`**（新文章 push 后首页即出现）。

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

## 2026-09-06 新增示例学习文档

新增 3 篇编程语言学习示例文章，用于展示各类 markdown 语法的渲染效果：

- `posts/learn-python.md`：Python 基础语法（嵌套列表、任务清单、代码块、引用、删除线）。
- `posts/learn-javascript.md`：var/let/const（表格、代码块、行内代码、引用）。
- `posts/learn-go.md`：Go 入门与 goroutine（代码块、有序列表、引用）。
- `index.html` 文章列表已加入以上 3 篇入口。

## 2026-09-06 首页文章列表自动生成

- `index.html` 文章列表改为由 JS 自动生成：通过 GitHub contents API 列出 `posts/` 下的 `.md`（跳过 `_` 开头的模板文件），再从本站读取每篇 front-matter 的 `title` / `date`，按日期倒序渲染。
- 列表结果缓存于 `localStorage`（10 分钟），减少 API 调用；加载失败时显示提示，不会白屏。
- 以后新增文章只需 push md 文件，**首页自动出现，不再编辑 `index.html`**。
- 移除手动列出的示例条目与「即将发布」占位行，清理对应的 `.draft` 样式。
- 注意：首页文章列表依赖网络（GitHub API），需在联网状态下访问。
