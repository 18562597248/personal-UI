export default {
  methods: {
    setWidth (column) {
      let width = '';
      if (column.width) {
        width = column.width;
      } else if (this.colwidth[column.index]) {
        var chinalength=column.title.length
        var  newwidth=chinalength*13+20
        if ( newwidth> parseInt(this.colwidth[column.index].width)) {
          width = newwidth;
        } else {
          width = parseInt(this.colwidth[column.index].width);
        }
      }
      return width;
    }
  }
};
