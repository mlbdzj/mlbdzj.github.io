---
title: 文章标题
date: 2026-01-01
---

开头段：一两句话概括本文要讲什么。

## 第一节

正文内容……引用图片用 `assets/img/` 下的路径：

![说明](assets/img/示例.png)

```js
// 代码块直接写
console.log('hello');
```

## 第二节

- 列表项
- 列表项

> 引用块。

写完后：复制本文件为 `posts/短名.md`，改好 front-matter 的 `title` / `date`，
然后在 `index.html` 的文章列表加一行 `post.html?file=短名`（详见 update.md 顶部清单）。
