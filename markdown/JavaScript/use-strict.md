---
title: 'use-strict'
tags: ['JavaScript']
type: 'text/markdown'
created: 'Mon Jun 26 2023 03:11:21 GMT+0000 (GMT)'
creator: 'oeyoews'
modifier: 'oeyoews'
---

# use-strict

“use strict” 是 JavaScript 中的一个指令，用于指定在严格模式下执行代码。严格模式是一种更加限制性的代码执行环境，它会强制执行更严格的规则和最佳实践，以帮助开发人员避免一些常见的错误和不安全的行为。

当使用 “use strict” 时，JavaScript 引擎会对代码进行更严格的解析和错误检查，一些原本被视为合法的代码行为将会受到限制或禁止。

“use strict” 可以在全局作用域中使用，也可以放在函数体的开头，以指定在函数内部启用严格模式。

严格模式下的一些特点和限制包括：

1. 变量必须声明后再使用：在严格模式下，对未声明的变量进行赋值操作将会引发错误。

1. 禁止删除变量、函数和函数参数：在严格模式下，使用 `delete` 操作符删除变量、函数和函数参数将会引发错误。

1. 禁止对只读属性赋值：在严格模式下，对只读属性进行赋值操作将会引发错误。

1. 禁止使用未声明的变量：在严格模式下，对未声明的变量进行访问将会引发错误。

1. 禁止使用八进制字面量：在严格模式下，以零开头的数字将被解析为八进制数值将会引发错误。

1. 禁止使用 `this` 指向全局对象：在严格模式下，当函数没有明确的调用对象时，`this` 的值将会是 `undefined`，而不是指向全局对象。

严格模式有助于提高代码的可靠性和安全性，推荐在 JavaScript 开发中使用它。