---
category:
  - 前端
tag:
  - 工具
  - Tips
  - 环境搭建

order: -1

permalink: /developer/front_end_web/es6_modules.html
---

# CommonJS 和 ES6 Modules

::: warning

该文档有待补充和完善

:::

https://zhuanlan.zhihu.com/p/27644026

要学好 webpack,必须熟悉 JS 模块规范 \

CommonJS 规范:

```js
function isNumber(n) {
  return typeof n === 'number';
}

module.exports = {
  sum: function (a, b) {
    if (isNumber(a) && isNumber(b)) {
      return a + b;
    } else {
      return NaN;
    }
  },
};
```

```js
var mod = require('./index');

console.log(mod.sum(2, '2')); // NaN
console.log(mod.sum(2, 2)); // 4
```

寻找 node_modules 如果找不到就逐层向上找,直到根目录找不到就返回错误

# ES6 Modules 规范:

```js
import { a, b } from './moduleName';
//or
let a = require('moduleName');
```

```js
export const PI = 3.14
export let radius = 5
export let getArea = (r) => PI _ r _ r
```
