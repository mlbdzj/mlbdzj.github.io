---
title: JavaScript 学习：var / let / const 到底怎么选
date: 2026-09-04
---

学 JS 时最困惑的就是三种声明方式。查了不少资料后，总结成一句话：**默认用 `const`，需要重新赋值才用 `let`，`var` 基本不用。**

## 三者对比

| 特性 | `var` | `let` | `const` |
| --- | --- | --- | --- |
| 作用域 | 函数级 | 块级 | 块级 |
| 变量提升 | 有（值为 undefined） | 有（存在暂时性死区） | 有 |
| 可重新赋值 | 可以 | 可以 | 不可以 |
| 声明后可修改引用 | 可以 | 可以 | 不行 |

## 典型写法

```js
// 推荐：能 const 就 const
const base = 10;
const list = [1, 2, 3];

// 需要变化时才用 let
let total = 0;
for (let i = 0; i < list.length; i++) {
  total += list[i];
}
```

注意 `const` 只是禁止**重新绑定**，对象内部属性仍然可改：

```js
const obj = { count: 1 };
obj.count = 2;   // 允许
// obj = { count: 3 };  // 报错：Assignment to constant variable
```

## 记忆要点

- 老代码/教程里常见的 `var` 推荐写法是：`var` 时代是 `~~~~`——这段划掉，现在不必纠结历史原因。
- 判断用哪种，按顺序问自己：
  1. 这个变量会被重新赋值吗？
  2. 不会 → `const`
  3. 会 → `let`

> 结论：别用 `var`。面试和实际项目里，这一条基本够用。
