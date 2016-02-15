# Table Grid

Every grid to date uses `float`s or some `inline-block` hackery. That's so 2013 though, and seeing that it's now 2014, we need something newer, faster, and stronger. So, Table Grid was born.

Check out the example on GitHub Pages at **<http://mdo.github.io/table-grid/>**. Clone this or download it to give it a whirl for yourself.

### Wtf

This isn't a serious project really, it's just an experiment. I'm curious about the rendering performance of using `display: table;` as opposed to `float`s, `flex-box`, or `display: inline-block;`. Each option has pros or cons, but in particular I'm focused on the con part:

- `float`s require clearing and I have zero idea about rendering performance. They're straightfoward and Just Work&trade;.
- `flex-box` has poor rendering last I heard because browsers have to do a lot of repainting to support it. I have no references to this, it's what I've heard. Plus, [browser support](http://caniuse.com/#feat=flexbox) and what not.
- `display: inline-block;` is gnarly because it involves resetting `white-space` and that's just silly. We shouldn't be resetting that kind of stuff just for a grid system.

So, based on that, `display: table;` starts to sound kind of interesting. Table layouts, especially ones that include `table-layout: fixed;` render super fast because browsers only need to render the first row of cells to paint the whole table. That's kind of moot with one row grids like this, but it *might* help anyway.

### How it works

As always, there's a container, row, and a series of columns. It's responsive, too. More specifically:

- Center the site contents with `.container`, which has a `max-width: 940px;`.
- Wrap a row of columns with `.grid`. This sets up the table-based grid with `display: table;`, `width: 100%;`, and `table-layout: fixed;`.
- Columns get the `.col` base class and an optional width class, like `.col-1` or `.col-6`. There are 12 available column classes, 1-12, for any variety of column combinations.
- Grid width class is not required. Without them, all columns become equal width via `.col` alone. Tables, baby!
- Grids are nestable—just place a new `.grid` within any `.col`. Bam.
- By default, because of how `display: table;` works, there's no gutters. To add gutters, wrap the `.grid` in `.grid-padded`, which adds gutters with `border-spacing: 1rem 0;`. Sucks, but this *is* experimental.

All this can be seen in action on [the demo page](http://mdo.github.io/table-grid).

### What's included

Table Grid has been rebuilt to use Sass (thanks, Jekyll!). Key CSS bits are broken down in `_sass`:

- `grid-basics.scss` contains the container and basic responsive, equal-width column support.
- `grid-columns.scss` contains specific column width classes for more granular control (e.g, `.col-6` is 50% wide).
- `grid-extras.scss` is for alignment and sorting options.


See <http://mdo.github.io/table-grid/> for details on usage.

### Fuck you, where's the real grid?

If you need a nuclear hardened grid system, check out [Bootstrap](http://getbootstrap.com/css/#grid). It's okay.

### License

MIT, (c) Mark Otto 2014.
