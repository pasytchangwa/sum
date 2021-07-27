const stringLength = require('./stringlength');

test('count character in string', () => {
  expect(stringLength('hello')).toBe(5);
});

test('it should be >= 1 and <= 10', () => {
  expect(stringLength('fotterhelloowppshet')).toBe('');
});