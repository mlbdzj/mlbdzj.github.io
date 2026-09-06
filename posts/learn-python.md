---
title: Python 入门笔记：基础语法与常见坑
date: 2026-09-05
---

最近开始系统学 Python，把基础语法和踩过的坑记在这里。目标是**能写脚本**，暂时不涉及框架。

## 变量与类型

Python 是动态类型，不需要声明变量类型：

```python
name = "mlbdzj"      # 字符串
count = 42           # 整数
pi = 3.14            # 浮点数
is_ok = True         # 布尔值
```

注意区分 `==`（比较）和 `=`（赋值），新手很容易写反。`~~我不小心把 if 里写成单等号报语法错~~`（这类粗心错误很常见）。

## 列表与字典

两种最常用的容器：

```python
fruits = ["apple", "banana", "cherry"]
info = {"name": "mlbdzj", "lang": "python"}
```

遍历时可以配合 `enumerate` 拿到下标：

```python
for i, fruit in enumerate(fruits):
    print(i, fruit)
```

## 我的学习清单

- 基础语法（已掌握）
  - 变量与类型
  - 条件与循环
  - 函数定义
- 常用库（进行中）
  - `os` / `pathlib` 文件操作
  - `requests` 网络请求
- [x] 会写命令行小脚本
- [ ] 会用正则表达式

## 踩坑记录

> 引用的代码块如果缩进不统一，Python 会直接报 `IndentationError`，这点比多数语言严格，习惯就好。

另外，字典取值优先用 `dict.get(key, 默认值)` 而不是 `dict[key]`，否则 key 不存在时会直接抛异常。平时可以在 `#` 后面写注释，行尾用 `;` 也没必要。

---

下一篇打算整理函数与模块的用法。
