---
title: Go 语言学习：从 Hello 到 goroutine
date: 2026-09-03
---

Go 语法简洁，适合我这种从 Python 转过来的人。下面按"从小到大的例子"记录学习进度。

## 第一个程序

```go
package main

import "fmt"

func main() {
    fmt.Println("hello, go")
}
```

包名、`main` 函数入口这些概念和 C 相似，跑起来不难。

## 函数返回值

Go 支持多个返回值，错误处理也靠它：

```go
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("除数为零")
    }
    return a / b, nil
}
```

调用时用 `if err != nil` 判断，这是 Go 最常见的错误处理模式：

```go
result, err := divide(10, 2)
if err != nil {
    fmt.Println(err)
    return
}
fmt.Println(result)
```

## goroutine 并发

用 `go` 关键字就能起一个并发任务，配合 `channel` 通信：

```go
func main() {
    ch := make(chan string)
    go func() {
        ch <- "来自 goroutine 的消息"
    }()
    msg := <-ch
    fmt.Println(msg)
}
```

学习时要先理清几个概念之间的关系：

1. `go` 关键字 —— 启动并发
2. `channel` —— 协程间传数据
3. `select` —— 多路等待

## 学到的小贴士

- 未使用的变量或 import 会**直接编译报错**，这点比 Python 严格。
- 包内小写开头的函数/变量不导出，大写开头才对外可见。

> 下一步：练手写一个简单的 HTTP 服务，用到 `net/http` 标准库。
