const reverseString = require("./reverse")

test('string should be reverse', () => {
  expect(reverseString('helloworld')).toBe('dlrowolleh');
});