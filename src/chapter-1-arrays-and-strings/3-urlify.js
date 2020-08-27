const urlify = (string, len) => string.trim().split(' ').join('%20').substring(0, len);

const urlifyNaive = (string) => {
  const charArray = string.trim().split('');

  const newArray = [];

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === ' ') {
      newArray.push('%20');
    } else {
      newArray.push(charArray[i]);
    }
  }
  return newArray.join('');
};

module.exports = { urlify, urlifyNaive };
