const capitalize = require('./capitalize');

test('it capitalize', () => {
  expect(capitalize('helloguy')).toBe('Helloguy');
})
