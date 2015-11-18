# Migrating from responsive-grid to sass-grid

Check out the new grid: [sass-grid](https://github.com/nib-styles/sass-grid)

## Why make the change?

The new sass-grid has a number of advantages over the old.
- 12 columns at every breakpoint for consistency (6 cols is always half) and greater options
- Both a compiled grid and generated mixins usable by header/footer independent of content
- Built using flexbox which means:
  - Easy vertical alignment
  - Columns can fit to their content (`cols:min`) or stretch to take up remaining space (`cols:max`)
  - Grid units can be reordered at different breakpoints so changing the stacking order on mobile can be done without duplication
- Separation of grid/spacing from classes (now uses custom attributes) for cleaner, more readable code

[View the example file](http://digitaledgeit.github.io/sass-grid/example/example.html)

In addition to that, part of our proposed new fed tooling includes utilising the new sass-grid for nib projects. Unfortunately upgrading an existing solution from the old to the new grid is a *very* manual process. This is a guide for how to do this as efficiently as possible.

## Gotch-yas
- Browsers such as IE9 that do not support flexbox fallback to an inline-block grid. This grid has to set font-size:0 to remove extra whitespace between grid__units, and then resets the font size on the grid__units. Any widths on elements within the grid specified in ems will now have 0 width. We want to use rems for widths in layout.
- [Vertical alignment in IE10-11](https://connect.microsoft.com/IE/feedback/details/802625/min-height-and-flexbox-flex-direction-column-dont-work-together-in-ie-10-11-preview)

### 1. Install dependencies
**npm:**

    npm install --save @nib-styles/sass-grid
    npm install --save @nib-styles/sass-spacing

**component:**

    component install nib-styles/sass-grid
    component install nib-styles/sass-spacing

### 2. Straight find and replace

Because the old grid uses classes for everything and the new grid uses custom data-attributes primarily, we are not able to simply find and replace the majority of the grid tags. However there are three that we can:

`rg-Grid` is replaced by `grid`

`rg-Unit` is replaced by `grid__unit`

`rg-Page` is replaced by `content`

### 3. Columns utils

`rg-([0-9]{1,2})of([0-9]{1,2})` finds all column classes e.g. `rg-4of12`

Each of these will need to be replaced by a new attribute specifying the number of cols e.g. `g-xl="cols:4"`. There are some instances where an exact swap is not possible *(for example `rg-5of8` equates to 7.5 cols)* and should be catered for on a case by case basis.

### 4. Display & alignment utils

`rg-([a-z,A-Z]{1,20})At([0-9]{1,2})` finds all display and text-alignment classes e.g. `rg-invisibleAt10` or `rg-textRightAt4`

**Note:** The old grid occasionally relies on rg-textCenterAtX on the rg-Grid class to center the rg-Units. The rg-Units then had to override the text alignment back to the desired alignment. This will still work in the new grid, but there is a better way using `halign:center` on the grid element, which doesn't need to set and reset text alignment.

### 5. Spacing utils

`rg-([a-z]{1,2})([0-6]{1})at([0-9]{1,2})` finds all margin and padding classes e.g. `rg-mt3at6`

## Alternative - find all
Alternatively, simply searching for `rg-` would return all grid related classes. The regex approach helps to segregate the types of classes which would have been helpful if we'd been able to automate this process. Perhaps you might be able to :)