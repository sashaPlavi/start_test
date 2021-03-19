const fun = require('./app');

//console.log(add(1, 2));
//unit test
test('Add', () => {
  expect(fun.add(1, 2)).toBe(3);
});

//integration test
test('total', () => {
  expect(fun.total(2, 10)).toBe('$12');
});

// test('fake two', () => {
//   expect(false).toBeTruthy();
// });
