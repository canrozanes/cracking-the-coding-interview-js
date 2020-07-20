const isSubstring = (s1,s2) => {
  return s1.includes(s2)
}

const stringRotation = (s1,s2) => {
  const mergedStrings = s1 + s2;
  return isSubstring(mergedStrings, s2)
}

module.exports = { stringRotation }