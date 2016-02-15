---
layout: default
---

## Premise

CSS grid systems are typically built in one of two ways today—`float`s or some `display: inline-block;` hackery. Both are fine and well established, but `table`s are way fucking cooler thanks to `table-layout` and dead simple alignment.

Let's take a look.

<iframe src="http://ghbtns.com/github-btn.html?user=mdo&amp;repo=table-grid&amp;type=watch&amp;count=true&amp;size=large" allowtransparency="true" frameborder="0" scrolling="0" width="130px" height="30px"></iframe>

---

## Typical approach

The typical approach is to create twelve fixed-width columns in all the usual combinations. Cool, super easy to do, and [@mdo/table-grid](https://github.com/mdo/table-grid) supports that. There's also a base class for ease of use that makes our columns use `display: table-cell;` and more.

<div class="grid grid-example">
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
  <div class="col col-1">1</div>
</div>
<div class="grid grid-example">
  <div class="col col-2">2</div>
  <div class="col col-2">2</div>
  <div class="col col-2">2</div>
  <div class="col col-2">2</div>
  <div class="col col-2">2</div>
  <div class="col col-2">2</div>
</div>
<div class="grid grid-example">
  <div class="col col-3">3</div>
  <div class="col col-3">3</div>
  <div class="col col-3">3</div>
  <div class="col col-3">3</div>
</div>
<div class="grid grid-example">
  <div class="col col-4">4</div>
  <div class="col col-4">4</div>
  <div class="col col-4">4</div>
</div>
<div class="grid grid-example">
  <div class="col col-5">5</div>
  <div class="col col-7">7</div>
</div>
<div class="grid grid-example">
  <div class="col col-6">6</div>
  <div class="col col-6">6</div>
</div>
<div class="grid grid-example">
  <div class="col col-8">8</div>
  <div class="col col-4">4</div>
</div>
<div class="grid grid-example">
  <div class="col col-12">12</div>
</div>

{% highlight html %}
<div class="grid">
  <div class="col col-8">8</div>
  <div class="col col-4">4</div>
</div>
{% endhighlight %}

---

## Table layout

Now comes the really fun part. With `table-layout: fixed;`, we can drop half our grid classes. **Fixed table layouts render equal-width columns when no other width is set.**

<div class="grid grid-example">
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
</div>
<div class="grid grid-example">
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
  <div class="col">Col</div>
</div>
<div class="grid grid-example">
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
<div class="grid grid-example">
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
<div class="grid grid-example">
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
<div class="grid grid-example">
  <div class="col">Column</div>
</div>

{% highlight html %}
<div class="grid">
  <div class="col">Column</div>
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
{% endhighlight %}


---

## Nested

With or without those extra classes, table grids are easily nestable. Just place a `.grid` with any combination of columns within an existing `.col`.

<div class="grid grid-example">
  <div class="col col-8">
    8
    <div class="grid grid-example">
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div>
  <div class="col col-4">4</div>
</div>

{% highlight html %}
<div class="grid">
  <div class="col col-8">
    8
    <div class="grid">
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div>
  <div class="col col-4">4</div>
</div>
{% endhighlight %}

---

## Grids with gutters

Wrap the `.grid` with `div.grid-padded` to add gutters between columns. Works on any column, even the  `width`-less base class.

The wrapping `.grid-padded` applies negative horizontal margins to account for the gutters. Tables that are 100% wide cannot have negative horizontal margins directly applied to them, so we must use a wrapper.

<div class="grid-padded">
  <div class="grid grid-example">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
<div class="grid-padded">
  <div class="grid grid-example">
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
<div class="grid-padded">
  <div class="grid grid-example">
    <div class="col col-8">8</div>
    <div class="col col-4">4</div>
  </div>
</div>

{% highlight html %}
<div class="grid-padded">
  <div class="grid">
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
{% endhighlight %}

---

## Vertically center content

Add the `.grid-align-middle` class to the `.grid` and voilà. Requires the use of `inline`, `inline-block`, or `table` based elements within a column.

<div class="grid-padded">
  <div class="grid grid-align-middle grid-example">
    <div class="col">
      Free-form text wraps while remaining vertically centered.
    </div>
    <div class="col">
      Nested columns center, too.
      <div class="grid-padded">
        <div class="grid grid-example">
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="inline-block">A `div` with `inline-block` works great, too.</div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="grid-padded">
  <div class="grid grid-align-middle">
    <!-- Columns -->
  </div>
</div>
{% endhighlight %}

---

## Reverse column sorting

Add the `.grid-reverse` class to the `.grid` table and you'll have reversed columns. In the example below, **Column 1** is first in the markup, but appears last when rendered. And because our table grid is responsive, they're stacked in order on mobile, too.

<div class="grid-padded">
  <div class="grid grid-reverse grid-example">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
  </div>
</div>

{% highlight html %}
<div class="grid-padded">
  <div class="grid grid-reverse">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
  </div>
</div>
{% endhighlight %}

---

## Download

Head to GitHub to [download @mdo/table-grid](https://github.com/mdo/table-grid) (includes source Sass and docs).

---

Shoutout tables.

&lt;3
