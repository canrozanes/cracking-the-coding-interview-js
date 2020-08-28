const getCharCounts = (string) => string.split('').reduce((acc, curr) => {
  if (curr in acc) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

const isPermutationNaive = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const charCounts1 = getCharCounts(string1);
  const charCounts2 = getCharCounts(string2);

  const charsArray1 = Object.keys(charCounts1);
  const charsArray2 = Object.keys(charCounts1);

  for (let i = 0; i < charsArray1.length; i++) {
    const char = charsArray1[i];
    if (charCounts1[char] !== charCounts2[char]) {
      return false;
    }
  }
  for (let i = 0; i < charsArray2.length; i++) {
    const char = charsArray2[i];
    if (charCounts2[char] !== charCounts1[char]) {
      return false;
    }
  }
  return true;
};

const isPermutation = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const string1Sorted = string1.split('').sort().join('');
  const string2Sorted = string2.split('').sort().join('');
  return string1Sorted === string2Sorted;
};

module.exports = { isPermutationNaive, isPermutation };
// Tests
// console.log(isPermutation('aba', 'aab'), true);
// console.log(isPermutation('aba', 'aaba'), false);
// console.log(isPermutation('aba', 'aa'), false);
// console.log(isPermutation('abcd', 'abc'), false);
// console.log(isPermutation('abc', 'abcd'), false);
// console.log(isPermutation('abba', 'baba'), false);