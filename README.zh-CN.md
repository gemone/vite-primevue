# Vite PrimeVue Template

[`PrimeVue`](https://primefaces.org/primevue/showcase)
作为 `UI` 框架的 `Vite` `Javascript` 模板。

## 组件使用

已经使用
[`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)
自动导入，作为模板此处将 `components.d.ts` 加入 `.gitignore` 列表。正式使用时建议去除该项，使其添加到 `commit` 记录当中。

由于部分编辑器在使用大写引入组件时，会自动检查是否引入，会报错，因而依照其他组件的习惯，引入名称使用 `p-` 作为前缀，即：

```vue
<!-- PrimeVue 原来使用 -->
<Password />

<!-- 本模板内使用方法 -->
<p-password />
```

如果 `PrimeVue` 组件发生变化，你可以修改 `primevue.components.json` 的内容，即可使用，无需考虑本模板的后续是否更新。

## 主题修改

在 `primevue.config.js` 同时定义了，同时也罗列了可选择的主题，如果你需要其他主题，请查看[官方文档](https://primefaces.org/primevue/showcase/#/theming)。

## 目录别名

借助 `Vite` 在 `vite.config.js` 中配置了 `src` 中的目录别名，在项目中你可以使用别名引入。你也可以修改成自己需要的别名，但注意同时需要修改代码中已经使用别名的内容。

默认配置如下：

```js
alias: {
  src: resolve(__dirname, "src"),
  assets: resolve(__dirname, "src/assets"),
  components: resolve(__dirname, "src/components"),
  layouts: resolve(__dirname, "src/layouts"),
  pages: resolve(__dirname, "src/pages"),
  plugins: resolve(__dirname, "src/plugins"),
  routers: resolve(__dirname, "src/routers"),
},
```
