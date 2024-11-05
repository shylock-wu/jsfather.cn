---
title: background-repeat(背景重复)
createTime: 2024/11/05 14:54:53
permalink: /defensive-css/jgrbn45g/
---

通常，当使用大图像作为背景时，我们往往会**忘记**考虑在大屏幕上查看时的情况。 默认情况下，该背景将重复。

这在笔记本电脑屏幕上大多不可见，但在较大的屏幕上可以清楚地看到。

::::demo-wrapper
:::center
小屏幕

<div style="width:200px;height:134px" class="bg-repeat">
</div>

大屏幕

<div style="width:300px;height:134px;" class="bg-repeat">
</div>

<style>
.bg-repeat {
  background:url(https://bing.img.run/uhd.php);
  background-size:auto 100%;
  margin:0 auto;
  box-shadow:var(--vp-shadow-2);
  border-radius:5px;
  border:1px solid var(--vp-c-divider);
}
</style>

:::
::::

为了提前避免该行为，请确保重置`background-repeat`。

```css
.img-container {
  background-image: url("xxx");
  background-repeat: no-repeat;
}
```

## Example

:::normal-demo background-repeat: no-repeat

```html
<div style="width:300px;height:134px;" class="bg-repeat-demo"></div>
<label>
  <input type="checkbox" />
  启用 no-repeat
</label>
```

```css
.bg-repeat-demo {
  background: url(https://bing.img.run/uhd.php);
  background-size: auto 100%;
  background-position: center;
  margin: 0 auto;
  box-shadow: var(--vp-shadow-2);
  border-radius: 5px;
  border: 1px solid var(--vp-c-divider);
}
```

```js
const imgDemo = document.querySelector(".bg-repeat-demo");
document
  .querySelector("input[type='checkbox']")
  .addEventListener("change", (e) => {
    imgDemo.style.backgroundRepeat = e.target.checked ? "no-repeat" : "initial";
  });
```

:::
