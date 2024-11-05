---
title: grid-fixed-values(网格固定值)
createTime: 2024/11/05 16:35:55
permalink: /defensive-css/hsvt6s6o/
---

假设我们有一个网格布局，包含一个**aside**和一个**main**。CSS如下所示:

```css
.warper {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
}
```

:::demo-wrapper

<div class="wrapper-container">
  <aside>aside</aside>
  <main>main</main>
</div>

<style>
.wrapper-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
}

.wrapper-container aside,
.wrapper-container main {
  text-align: center;
  line-height: 100px;
  height: 100px;
}

.wrapper-container aside {
  background-color: var(--vp-c-gray-3);
}

.wrapper-container main {
  background-color: var(--vp-c-brand-3);
}
</style>

:::

由于空间不足，这将在较小的视口尺寸上导致溢出。 为避免此类问题，请在使用上述 CSS 网格时始终使用媒体查询。

在视口尺寸较小时，换行显示，在视口尺寸较大时，使用 网格布局。

```css
@media (min-width: 600px) {
  .wrapper-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
  }
}
```

::::normal-demo 媒体查询

```html
<div style="text-align: center;margin-bottom:.5rem;">
  请调整浏览器窗口大小来获得变化
</div>
<div class="wrapper-container">
  <aside>aside</aside>
  <main>main</main>
</div>
```

```css
.wrapper-container aside,
.wrapper-container main {
  text-align: center;
  line-height: 100px;
  height: 100px;
}

.wrapper-container aside {
  background-color: var(--vp-c-gray-3);
}

.wrapper-container main {
  background-color: var(--vp-c-brand-3);
}

@media (min-width: 600px) {
  .wrapper-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
  }
}
```

::::
