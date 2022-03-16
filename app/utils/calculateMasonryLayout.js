export function layout(grids) {
  grids.forEach((grid) => {
    /* get the post-resize/ load number of columns */
    let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;

    if (grid.ncol !== ncol) {
      grid.ncol = ncol;
      grid.items.forEach((c) => c.style.removeProperty('margin-top'));

      /* if we have more than one column */
      if (grid.ncol > 1) {
        grid.items.slice(ncol).forEach((c, i) => {
          let prev_fin =
              grid.items[i].getBoundingClientRect()
                .bottom /* bottom edge of item above */,
            curr_ini =
              c.getBoundingClientRect().top; /* top edge of current item */

          c.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`;
          console.log(`${prev_fin} ${curr_ini}`);
        });
      }
    }
  });
}

export function calculateMasonryLayout() {
  let grids = [...document.querySelectorAll('.masonry')];

  if (
    grids.length &&
    getComputedStyle(grids[0]).gridTemplateRows !== 'masonry'
  ) {
    grids = grids.map((grid) => ({
      _el: grid,
      gap: parseFloat(getComputedStyle(grid).rowGap),
      items: [...grid.childNodes].filter((c) => c.nodeType === 1),
      ncol: 0,
    }));

    layout(grids); /* initial load */
  }
}
