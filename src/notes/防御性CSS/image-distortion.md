---
title: image-distortion(图像失真)
createTime: 2024/11/05 11:14:44
permalink: /defensive-css/cnt9rcit/
---

当我们无法控制网页上图像的长宽比时，最好提前考虑并在用户上传与长宽比不相符的图像时提供解决方案。

在下面的示例中，我们有一个带有照片的卡片组件。看起来不错。

:::demo-wrapper

<style>
  .img-container {
    width: 200px;
    margin: 20px auto;
    padding-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: var(--vp-shadow-2);
  }
  .img-box {
    width: 200px;
    height: 133px;
    overflow: hidden;
  }
</style>
<div class="img-container">
  <div class="img-box">
    <img src="https://bing.img.run/uhd.php" alt="xiyang">
  </div>
  <h4 style="margin:5px 10px 0;">夕阳</h4>
  <p style="margin:0 10px;font-size:14px;">美丽的夕阳</p>
</div>
:::

但是，如果使用的图片的尺寸横纵比不一致，图片会被拉伸：

:::demo-wrapper

<div class="img-container">
  <div class="img-box">
    <img style="height:195px;position:relative;top:-33px;" src="https://bing.img.run/uhd.php" alt="">
  </div>
  <h4 style="margin:5px 10px 0;">美食</h4>
  <p style="margin:0 10px;font-size:14px;">一份美味的食物</p>
</div>
:::

最简单的解决方法是，给 img 元素使用`object-fit`来控制图片的缩放行为。

1. **cover**:
   - `object-fit: cover;`会使图像填满整个容器。图像会被等比例缩放以覆盖容器的整个区域。
   - 使用`cover`时，图像可能会部分裁剪，因为它会放大或缩小以确保不留空白。
   - 适用于希望在确保容器被完全填满的情况下显示图像，即使这意味着裁剪图像的一部分。
2. **contain**:
   - `object-fit: contain;`会使图像等比例缩放，以便图像的整个内容完全显示出来，并适合容器的最大宽度和高度。
   - 使用`contain`时，图像不会裁剪，会保持完整显示，但可能会在容器中留白（即图像周围可能有空白区域），以维持图像的原始宽高比。
   - 适用于希望确保图像的全部内容都能被看到，即使这意味着不能填满整个容器。
     这两个属性值在样式方面提供了很大的灵活性，允许开发者选择在牺牲完整性或填充性之间找到平衡。

## Example

:::normal-demo object-fit: cover/contain

```html
<p>调整容器大小查看效果：</p>
<div class="wrapper">
  <img id="image" src="https://bing.img.run/uhd.php" />
</div>
<form class="actions" style="margin-top: 10px;">
  <label>
    <input type="radio" name="toggle" value="initial" checked />
    默认
  </label>
  <label>
    <input type="radio" name="toggle" value="cover" />
    启用 object-fit: cover
  </label>
  <label>
    <input type="radio" name="toggle" value="contain" />
    启用 object-fit: contain
  </label>
</form>
```

```css
.wrapper {
  position: relative;
  width: 300px;
  max-width: 100%;
  display: flex;
  align-items: center;
  resize: horizontal;
  overflow: hidden;
  flex: 1;
  border-right: solid 2px var(--vp-c-border, #c2c2c4);
  padding-right: 3rem;
  padding-left: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: var(--vp-c-bg-alt, #f0f0f0);
}
.wrapper::after {
  content: "拖动我";
  position: absolute;
  right: 0;
  bottom: 1%;
  writing-mode: tb-rl;
  transform: translateY(-50%);
  font-size: 13px;
  line-height: 1.2;
}

#image {
  width: 100%;
  height: 140px;
}
```

```js
const image = document.querySelector("#image");
const radios = document.querySelectorAll('input[name="toggle"]');
radios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (this.checked) {
      image.style.objectFit = this.value;
    }
  });
});
```

:::
