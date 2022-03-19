export const onLayout = function (grids) {
  return function layout() {
    grids.forEach((grid) => {
      let initial_height = grid.items[0]._el.getBoundingClientRect().top;

      grid.items.forEach((c) => {
        let rect = c._el.getBoundingClientRect();
        c.off = rect.left;
        grid.colHeights.set(c.off, initial_height);
      });

      if (grid.ncol === grid.colHeights.size) {
        return;
      }

      grid.ncol = grid.colHeights.size;

      grid.items.forEach((c) => c._el.style.removeProperty('margin-top'));

      /* if we have more than one column */
      if (grid.ncol > 1) {
        grid.items.forEach((grid_item) => {
          let rect = grid_item._el.getBoundingClientRect();
          /* get height of masonry-ed column */
          let col_height = grid.colHeights.get(grid_item.off);
          /* set marginTop to different between where it is and where it should be */
          grid_item._el.style.marginTop = `${col_height - rect.top}px`;
          /* update col_height with element height */
          col_height += grid_item._el.offsetHeight + grid.gap;
          grid.colHeights.set(grid_item.off, col_height);
        });
      }
    });
  };
};

export function filterGrids(grids) {
  if (
    grids.length &&
    getComputedStyle(grids[0]).gridTemplateRows !== 'masonry'
  ) {
    grids = grids.map((grid) => ({
      _el: grid,
      gap: parseFloat(getComputedStyle(grid).rowGap),
      items: [...grid.childNodes]
        .filter((c) => c.nodeType === 1)
        .map((c) => ({ _el: c })),
      ncol: 0,
      colHeights: new Map(),
    }));
    return grids;
  }
}
