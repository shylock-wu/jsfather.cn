---
title: auto-fit-fill(自动调整与自动填充)
createTime: 2024/11/05 14:53:12
permalink: /defensive-css/mu5eju3e/
---

当我们在使用`CSS Grid`网格布局时，会经常使用到`minmax()`函数。 在使用`minmax()`函数时，决策使用`auto-fit`还是`auto-fill`关键词非常重要，如果使用不当，可能会导致意想不到的后果。

- `auto-fit`: 将展开网格项以填充可用空间。
- `auto-fill`: 将保留可用空间，而不改变网格项的宽度。

![auto fit fill](/images/defensive-css/auto-fit-fill.png){style="border:var(--vp-c-divider) 1px solid;border-radius:5px;box-shadow:var(--vp-shadow-2)"}

尽管如此，使用 `auto-fit` 可能会导致网格项太宽，尤其是当它们小于预期时。请看以下示例。

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}
```

如果只有一个网格项并且使用 `auto-fit` ，则该项目将展开以填充容器宽度。

:::demo-wrapper
四个子项：

<div class="grid-fit-wrapper">
  <div class="grid-item" style="--auto-fit-c-bg:#8fafe7"></div>
  <div class="grid-item" style="--auto-fit-c-bg:#f6e5be"></div>
  <div class="grid-item" style="--auto-fit-c-bg:#fdbdd4"></div>
  <div class="grid-item" style="--auto-fit-c-bg:#aaf0d0"></div>
</div>

一个子项：

<div class="grid-fit-wrapper">
  <div class="grid-item" style="--auto-fit-c-bg:#8fafe7"></div>
</div>

<style>
.grid-fit-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 1rem;
  padding: 10px 20px;
  border: solid 1px var(--vp-c-divider, #f0f0f0);
  border-radius: 5px;
  box-shadow: var(--vp-shadow-2);
  background: var(--vp-c-bg);
}
.grid-fit-wrapper .grid-item {
  height: 100px;
  border-radius: 5px;
  background-color: var(--auto-fit-c-bg);
}
</style>

:::

在大多数情况下，不需要 这样的行为。所以在我看来，使用 auto-fill 会更好。

:::demo-wrapper
四个子项：

<div class="grid-fill-wrapper-191">
  <div class="grid-item" style="--auto-fit-c-bg:#8fafe7"></div>
  <div class="grid-item" style="--auto-fit-c-bg:#f6e5be"></div>
  <div class="grid-item" style="--auto-fit-c-bg:#fdbdd4"></div>
  <div class="grid-item" style="--auto-fit-c-bg:#aaf0d0"></div>
</div>

一个子项：

<div class="grid-fill-wrapper-191">
  <div class="grid-item" style="--auto-fit-c-bg:#8fafe7"></div>
</div>

<style>
.grid-fill-wrapper-191 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(59px, 1fr));
  grid-gap: 1rem;
  padding: 10px 20px;
  border: solid 1px var(--vp-c-divider, #f0f0f0);
  border-radius: 5px;
  box-shadow: var(--vp-shadow-2);
  background: var(--vp-c-bg);
}
.grid-fill-wrapper-191 .grid-item {
  height: 100px;
  border-radius: 5px;
  background-color: var(--auto-fit-c-bg);
}
@media (min-width: 768px) {
  .grid-fill-wrapper-191 {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}
</style>

:::

## Example

有关 `minmax()`函数的更多信息，请参阅[🔗](https://ishadeed.com/article/css-grid-minmax/)

```css
.wrapper {
  --sizing: auto-fit;
  display: grid;
  grid-template-columns: repeat(var(--sizing), minmax(100px, 1fr));
  grid-gap: 1rem;
}
```

:::normal-demo auto-fit-fill

```html
<p>调整容器大小查看效果：</p>
<div class="demo-wrapper">
  <div class="wrapper" id="gridWrapper">
    <div class="card">
      <div class="card__thumb"></div>
      <p>css grid 布局</p>
    </div>
    <div class="card">
      <div class="card__thumb"></div>
      <p>css grid 布局</p>
    </div>
    <div class="card-outline"></div>
    <div class="card-outline"></div>
  </div>
</div>
<div class="actions">
  <input type="checkbox" id="toggle" />
  <label for="toggle">启用 auto-fill</label>
</div>
```

```css
.demo-wrapper {
  position: relative;
  width: 300px;
  max-width: 100%;
  resize: horizontal;
  overflow: hidden;
  border-right: solid 2px var(--vp-c-border, #c2c2c4);
  padding-right: 3rem;
  padding-left: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: var(--vp-c-bg-alt, #f0f0f0);
}
.demo-wrapper::after {
  content: "拖动我";
  position: absolute;
  right: 0;
  bottom: 1%;
  writing-mode: tb-rl;
  transform: translateY(-50%);
  font-size: 13px;
  line-height: 1.2;
}
.wrapper {
  --sizing: auto-fit;
  display: grid;
  grid-template-columns: repeat(var(--sizing), minmax(100px, 1fr));
  grid-gap: 1rem;
  width: 100%;
}
.wrapper .card {
  border-radius: 5px;
  overflow: hidden;
}
.wrapper .card__thumb {
  height: 90px;
  background: var(--vp-c-brand-1, #f0f0f0);
}
.wrapper .card p {
  margin: 0;
  padding: 5px 10px;
  background: var(--vp-c-brand-3, #f0f0f0);
}
.wrapper .card-outline {
  display: none;
  border: 1px dashed;
  border-radius: 5px;
  min-height: 20px;
}

.wrapper.checked {
  --sizing: auto-fill;
}

.wrapper.checked .card-outline {
  display: block;
}
```

```js
const wrapper = document.querySelector("#gridWrapper");
document.querySelector("#toggle").addEventListener("change", (e) => {
  wrapper.classList.toggle("checked", e.target.checked);
});
```

:::
