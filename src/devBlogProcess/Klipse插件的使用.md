# Klipse 插件的使用

::: info

Klipse 是一个 JavaScript 插件，用于在技术博客中嵌入交互式代码片段，从技术层面上讲，Klipse 是一小段 JavaScript 代码，用于评估浏览器中的代码片段，并且可以在任何网页上插入。

Github 仓库地址: https://github.com/viebel/klipse

:::

该插件在 vuepress 中使用的方式如下:

## 第一步

在 `src/.vuepress/config.ts` 配置文件中新增如下配置,添加全局的 css

::: tip src/.vuepress/config.ts

```js
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  // ...
  head: [
    [
      'link',
      { rel: 'stylesheet', type: 'text/css', href: '//storage.googleapis.com/app.klipse.tech/css/codemirror.css' },
    ],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '//storage.googleapis.com/app.klipse.tech/css/prolog.css' }],
  ],
  // ...
});
```

:::

> 参考文档 https://theme-hope.vuejs.press/zh/guide/customize/external.html

在 `src/.vuepress/styles/index.scss` 中添加如下 css 用来覆盖 vuepress 主题的默认样式

::: tip src/.vuepress/styles/index.scss

```css
.klipse-demo pre {
  margin: 0;
  padding: 0;
}
```

:::

## 第二步

将如下代码直接放入 markdown 页面中:

```html
<div class="klipse-demo">
  <pre>
    <code class="language-klipse-cpp">
      #include &lt;iostream&gt;
      using namespace std;
      int main() {
        cout &lt;&lt; "Hello World!" &lt;&lt; endl;
        return 0;
      }  
    </code>
  </pre>
</div>

<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    window.klipse_settings = {
      codemirror_options_in: {
        lineWrapping: true,
        autoCloseBrackets: true,
      },
      codemirror_options_out: {
        lineWrapping: true,
      },
      beautify_strings: true,
      selector_eval_cpp: '.language-klipse-cpp',
    };

    init_klipse_lib();
  });

  // 配置文件设置完毕之后,动态引入 Klipse 插件使其生效
  function init_klipse_lib() {
    var jsElm = document.createElement('script');
    jsElm.src = '//storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js?the_version=7.11.2';
    window.document.body.appendChild(jsElm);
  }
</script>
```

## 最终效果如下

<div class="klipse-demo">
  <pre>
    <code class="language-klipse-cpp">
      #include &lt;iostream&gt;
      using namespace std;
      int main() {
        cout &lt;&lt; "Hello World!" &lt;&lt; endl;
        return 0;
      }  
    </code>
  </pre>
</div>

<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    window.klipse_settings = {
      codemirror_options_in: {
        lineWrapping: true,
        autoCloseBrackets: true,
      },
      codemirror_options_out: {
        lineWrapping: true,
      },
      beautify_strings: true,
      selector_eval_cpp: '.language-klipse-cpp',
    };

    init_klipse_lib();
  });

  // 配置文件设置完毕之后,动态引入 Klipse 插件使其生效
  function init_klipse_lib() {
    var jsElm = document.createElement('script');
    jsElm.src = '//storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js?the_version=7.11.2';
    window.document.body.appendChild(jsElm);
  }
</script>
