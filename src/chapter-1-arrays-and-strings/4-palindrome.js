const palindrome = (input) => {
  const string = input.toLowerCase().split(' ').join('');
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

module.exports = { palindrome };
// console.log(palindrome('Taco cat'), 'true');
// console.log(palindrome('Tact boa'), 'false');
