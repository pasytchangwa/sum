function capitalize(string) {
 let newWord = string[0].toUpperCase();
  string[0] = newWord;
  let newString = string.slice(1, string.length);
  return newWord + newString;
}

module.exports = capitalize;