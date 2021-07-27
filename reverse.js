function reverseString(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result = string[i] + result;
  }
  return result;
}

module.exports = reverseString;