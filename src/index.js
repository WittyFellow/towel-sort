
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];

  if (matrix != undefined) {
    matrix.forEach((item, i) => {
      if (i % 2 == 0) {
        arr = arr.concat(item);
      } else {
        arr = arr.concat(item.reverse());
      }
    });
  }

  return arr;
};


