# mlbdzj.github.io

个人博客，基于 GitHub Pages 部署。左侧是个人简介和文章目录，右侧是文章内容。

访问地址：https://mlbdzj.github.io/

## 技术栈

- React 19 + TypeScript
- Vite
- Tailwind CSS
- marked（Markdown 渲染）

## 本地开发

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 构建到 dist/
npm run preview  # 预览构建结果
npm run lint     # 代码检查
```

> Windows PowerShell 若提示禁止运行脚本，请改用 `npm.cmd`，例如 `npm.cmd run dev`。

## 写文章

在 `src/posts/` 目录下新建 `.md` 文件，顶部写 frontmatter，正文用 Markdown：

```md
---
title: 文章标题
date: 2026-09-21
---

正文内容……
```

构建时会自动收集并按日期倒序排列，无需手动登记。`title` 和 `date` 都可省略（省略时用文件名作标题）。

## 目录结构

```
.
├─ .github/workflows/deploy.yml   # GitHub Actions 构建部署
├─ public/                        # 静态资源（头像、图标等）
├─ src/
│  ├─ components/                 # ProfileCard / PostList / PostContent
│  ├─ data/posts.ts               # 读取并解析 Markdown 文章
│  ├─ posts/                      # 文章（Markdown）
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
├─ index.html
└─ vite.config.ts
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动执行 `npm ci && npm run build` 并将 `dist/` 发布到 GitHub Pages。
