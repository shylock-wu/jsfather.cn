---
title: variable-fallback(变量回退)
createTime: 2024/11/15 14:39:03
permalink: /defensive-css/c9kiy799/
---

CSS 变量在 Web 设计中的使用越来越多。我们可以应用一种方法，以一种不会破坏体验的方式使用它们，以防 CSS 变量值由于某种原因为空。

这在通过 Javascript 提供 CSS 变量的值时特别有用。下面是一个示例：

```css
.message__bubble {
  max-width: calc(100% - var(--actions-width));
}
```

变量`--actions-width`在`calc()`函数中使用，其值来自 Javascript。假设 Javascript 由于某种原因失败了，会发生什么？`max-width`将计算为零。

我们可以提前避免这种情况，并为`var()`添加一个**fallback**值。

```css
.message__bubble {
  max-width: calc(100% - var(--actions-width, 70px));
}
```

这样，如果未定义变量，则将使用回退`70px`。如果变量有可能失败（例如：来自 Javascript），则可以使用此方法。

:::

## Example

### 无效的 CSS 变量

```css
.element {
  background-color: var(--brand-color, lightblue);
}
```

:::normal-demo

```html
<div class="demo-wrapper"></div>
<div class="actions">
  <input type="checkbox" id="toggle" />
  <label for="toggle">启用 auto-fill</label>
</div>
```

```css
.demo-wrapper {
  --brand-color: initial;
  position: relative;
  width: 500px;
  height: 100px;
  background: var(--brand-color, green);
}
```

```js
const wrapper = document.querySelector(".demo-wrapper");
document.querySelector("#toggle").addEventListener("change", (e) => {
  wrapper.style.setProperty(
    "--brand-color",
    e.target.checked ? "pink" : "initial",
  );
});
```

:::
