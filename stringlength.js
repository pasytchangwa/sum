function stringLength(string) {
  if (typeof string === 'string') {
  if (string.length >= 1 && string.length <= 10) {
   return string.length;
  } else {
   return '';
  }
  }
}

module.exports = stringLength;