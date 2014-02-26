# Table Grid

Every grid to date uses `float`s or some `inline-block` hackery. That's so 2013 though, and seeing that it's now 2014, we need something newer, faster, and stronger. So, Table Grid was born.

### wtf

This isn't a serious project really, it's just an experiment. I'm curious about the rendering performance of using `display: table;` as opposed to `float`s, `flex-box`, or `display: inline-block;`. Each option has pros or cons, but in particular I'm focused on the con part:

- `float`s require clearing and I have zero idea about rendering performance. They're straightfoward and Just Work&trade;.
- `flex-box` has poor rendering last I heard because browsers have to do a lot of repainting to support it. I have no references to this, it's what I've heard. Plus, browser support and what not.
- `display: inline-block;` is gnarly because it involves resetting `white-space` and that's just silly. We shouldn't be resetting that kind of stuff just for a grid system.

So, based on that, `display: table;` starts to sound kind of interesting.

### Example

Check out the example on GitHub Pages at http://mdo.github.io/table-grid/index.html. Clone this or download it to give it a whirl for yourself.

### Fuck you, where's the real grid?

If you need a nuclear hardened grid system, check out [Bootstrap](http://getbootstrap.com/css/#grid). It's pretty cool I guess.

### License

MIT, (c) Mark Otto.
