const add = (x, y) => {
  return x + y;
};

const total = (pdv, price) => {
  return '$' + add(pdv, price);
};

//export const multi = (x, y) => x * y;
exports.add = add;
exports.total = total;
