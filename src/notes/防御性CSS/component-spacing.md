---
title: component-spacing(组件间距)
createTime: 2024/11/05 14:49:26
permalink: /defensive-css/c5egjcpc/
---

我们开发人员应该考虑不同的内容长度对布局的影响。这意味着，我们需要将 **间距** 添加到元素中，即使它看起来不需要。

:::demo-wrapper

<div class="card-wrapper">
  <h3>标题</h3>
  <Icon name="uiw:setting" />
</div>

<style>
.card-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 320px;
  margin: 40px auto;
  padding: 10px 20px;
  border-radius: 5px;
  border: solid 1px var(--vp-c-divider, #f0f0f0);
  box-shadow: var(--vp-shadow-2);
  background: var(--vp-c-bg);
}
.card-wrapper h3 {
  margin: 0;
  flex: 1;
  text-wrap: nowrap;
  min-width: 0;
}
.card-wrapper h3.card-title {
  margin-right: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-wrapper .mark {
  position: absolute;
  top: 10px;
  right: 45px;
  bottom: 10px;
  width: 1rem;
  background-color: var(--vp-c-warning-soft, #f9ca24);
}
</style>

:::
在下面的例子中，有一个标题和一个操作按钮。目前，它看起来还不错。但是，让我们看看当标题更长时会发生什么？
:::demo-wrapper

<div class="card-wrapper">
  <h3>这是一个有长长文本内容的标题</h3>
  <Icon name="uiw:setting" />
</div>
:::

可以看到，文本距离操作按钮太近了。也许我们可以考虑换行，但在我们将在其它章节讨论。

现在我们只关注 **间距**。

如果有 **间距** 和 **文本截断** ，我们不会看到这样的问题。

```css
.section__title {
  margin-right: 1rem;
}
```

:::demo-wrapper

<div class="card-wrapper">
  <h3 class="card-title">这是一个有长文本内容的标题</h3>
  <Icon name="uiw:setting" />
  <div class="mark"></div>
</div>
:::
