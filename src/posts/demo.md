# Markdown 语法 Demo

Markdown 官方标准地址:  
https://markdown.com.cn

> 前面用数个 `#` 来标示标题，一个 `#` 标示一级标题，两个 `#` 标示二级标题，以此类推。

## 二级标题{#page-title}

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 段落语法

> 用空一行进行隔开
> 不要用空格或者制表符缩进段落

这里是第一段文字。

这里是第二段文字。
这里是第三段文字。
这里是第四段文字。
这里是第五段文字。

## 换行语法

> 末尾加两个空格即可换行。
> 在 VSCode 中一个空格不会被换行。VuePress 中一个空格会被换行。

This is the first line.  
And this is the second line.

## 强调语法

> 两个星号 `**加粗内容**` 或者下划线 `__加粗粗内容__` 标示加粗。  
> 一个下划线或者下划线标示斜体 `_倾斜文本_`

这是一段话中被 **加粗** 的部分。  
这是一段话中被 _倾斜_ 的的部分。  
这是一段话中 **_加粗倾斜_** 的部分。

## 引用语法

> 前面加一个大于号 `>` 表示引用

> 这里是引用的换行 1  
> 这里是引用的换行 2

> 这里是引用的一段文字
>
> 这里是引用的更换段落，VSCode 中可以明显表示出来，但是 VuePress 中无法体现

> 这里是引用的一段文字
>
> > 两个大于号标示嵌套引用

> 这里是引用的一段文字
>
> > 引用当中是可以夹带列表的
> >
> > - asd
> > - asd
> > - asd
> >
> > # 一级标题
> >
> > ## 二级标题
> >
> > ### 三级标题

## 列表语法

### 有序列表

> 数字带点 `1.` 标示有序列表

1. 第一行
2. 第二行
3. 第三行
4. 第四行

### 无序列表

> 前面使用 `-` 、`*` 标示无序列表

- 第一行
- 第二行
- 第三行
- 第四行

### 列表的嵌套

> 前面加一个 Tab 键标示嵌套

1. 第一行有序列表
   1. 嵌套一个有序列表
   - 嵌套一个无序列表
     - 嵌套一个无序列表
     1. 嵌套一个有序列表
     2. 嵌套一个有序列表
        1. 嵌套一个有序列表
2. 第二行有序列表

- 第三行无序列表

4. 第四行有序列表

## 代码语法

> 使用反引号 (``) 包裹的部分就是代码语法

JavaScript 的打印日志的方法是`console.log('hello world')`。

如果想要创建代码块缩进四个空格

    <html>
      <head>
          <title>hello world</title>
      </head>
      <body>
          <h1>hello world</h1>
      </body>
    </html>

也可以使用 围栏代码块

```html
<html>
  <head>
    <title>hello world</title>
  </head>
  <body>
    <h1>hello world</h1>
  </body>
</html>
```

## 分割线语法

> 使用多个星号 `***`、破折号 `---` 或者下划线 `___` 来表示分割线

---

---

---

## 链接语法

> 使用 `[超链接显示名](超链接地址 "超链接title")` 来表示链接语法

[这里是超链接显示名](https://www.bing.com '搜索引擎请使用bing一下')

## 图片语法

> 使用 `![图片显示名](图片地址)` 来表示图片语法

[![这里是图片显示名](img/投资学.png)](https://www.bing.com)

图片语法和链接语法是可以嵌套的

```md
[![这里是图片显示名](img/投资学.png)](https://www.bing.com)
```

## 转义字符语法

> 如果想要显示一些特殊符号则可以使用 `\` 进行转义来展示

我想展示双星号

\*\*这里是双星号\*\*

## 内嵌 HTML 标签

This **word** is bold. This <em>word</em> is italic.

比如写入一个表格

<table>
  <caption>
    Front-end web developer course 2021
  </caption>
  <thead>
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Most interest in</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chris</th>
      <td>HTML tables</td>
      <td>22</td>
    </tr>
    <tr>
      <th scope="row">Dennis</th>
      <td>Web accessibility</td>
      <td>45</td>
    </tr>
    <tr>
      <th scope="row">Sarah</th>
      <td>JavaScript frameworks</td>
      <td>29</td>
    </tr>
    <tr>
      <th scope="row">Karen</th>
      <td>Web performance</td>
      <td>36</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Average age</th>
      <td>33</td>
    </tr>
  </tfoot>
</table>

## 表格

| Person | Most interest in      | Age |
| ------ | --------------------- | --- |
| Chris  | HTML tables           | 22  |
| Dennis | Web accessibility     | 45  |
| Sarah  | JavaScript frameworks | 29  |
| Karen  | Web performance       | 36  |

## 脚注

这里是一筐土豆[^1]，那里是一袋马铃薯[^2]。

[^1]: 土豆是一种很好吃的食物
[^2]: 马铃薯其实就是土豆

    甚至这里可以使用代码块

> VSCode 貌似无法很好的展示脚注，但是 VuePress 可以很好的编译展示。

## 设置标题编号

```md
## 二级标题{#page-title}

[点击跳转到二级标题](#page-title)
```

[点击跳转到二级标题](#page-title)

## 定义列表

First Term  
: This is the definition of the first term.

Second Term  
: This is one definition of the second term.
: This is another definition of the second term.

> 貌似 VSCode 和 VuePress 都无法很好的展示这个语法

## 删除线

> 使用 `~~被删除的内容~~` 包裹起来的文本

~~这里是被删除的内容~~

## 任务列表语法

- [x] 这是一个任务列表
- [x] 这是另一个任务列表
- [ ] 这是另一个任务列表

## 使用 Emoji 表情

去露营了！ :tent: 很快回来。

真好笑！ :joy:

😂

> 这里建议直接使用输入法输入 Emoji ，VSCode 无法正确展示，但是 VuePress 可以正常编译。

---

**以下是 VuePress 的 Markdown 增强语法，并不属于 Markdown 标准**

---

## 上下角标

- 19^th^
- H~2~O

## 导入文件

```js title=".vuepress/sidebar/en.ts"
<!-- @include: @src/.vuepress/sidebar/en.ts -->
```

## 选项卡

::: tabs

@tab 标题 1

内容 1

@tab 标题 2

内容 2

@tab:active 标题 3

内容三，默认激活

:::

## GFM 警告

> [!important]
> 重要文字

> [!info]
> 信息文字

> [!tip]
> 提示文字

> [!warning]
> 注意文字

> [!caution]
> 警告文字

> [!note]
> 注释文字

## 剧透文字

> 使用 `!!  !!` 包裹的文字

VuePress Theme Hope !!非常强大!!!

## 属性支持

> 使用 `{.className}` 来给块添加 class 或者其它属性

包含 `行内代码`{.inline-code} 和 ![favicon](/favicon.ico){.image} 的文字，也支持 _强调_{.inline-emphasis} 和 **加粗**{.inline-bold}。

## 提示容器

::: important
重要容器。
:::

::: info
信息容器。
:::

::: note
注释容器。
:::

::: tip
提示容器
:::

::: warning
警告容器
:::

::: caution
危险容器
:::

::: details
详情容器
:::

## 标记

> 使用 `==  ==` 包裹的文字被高亮显示

VuePress Theme Hope ==非常== 强大!

## 自定义对齐

::: left
左对齐的内容
:::

::: center
居中的内容
:::

::: right
右对齐的内容
:::

::: justify
两端对齐的内容
:::

## ECharts 图表

语法：

        ::: echarts 标题

        ```json
        {
          // 此处为 ECharts 图表配置
        }
        ```

        :::

::: echarts A nightingale chart

```json
{
  "legend": {
    "top": "bottom"
  },
  "toolbox": {
    "show": true,
    "feature": {
      "mark": {
        "show": true
      },
      "dataView": {
        "show": true,
        "readOnly": false
      },
      "restore": {
        "show": true
      },
      "saveAsImage": {
        "show": true
      }
    }
  },
  "series": [
    {
      "name": "Nightingale Chart",
      "type": "pie",
      "radius": [20, 100],
      "center": ["50%", "50%"],
      "roseType": "area",
      "itemStyle": {
        "borderRadius": 8
      },
      "data": [
        {
          "value": 40,
          "name": "rose 1"
        },
        {
          "value": 38,
          "name": "rose 2"
        },
        {
          "value": 32,
          "name": "rose 3"
        },
        {
          "value": 30,
          "name": "rose 4"
        },
        {
          "value": 28,
          "name": "rose 5"
        },
        {
          "value": 26,
          "name": "rose 6"
        },
        {
          "value": 22,
          "name": "rose 7"
        },
        {
          "value": 18,
          "name": "rose 8"
        }
      ]
    }
  ]
}
```

:::
