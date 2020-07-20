// this solution was heavily influenced by 
// https://www.geeksforgeeks.org/check-if-two-given-strings-are-at-edit-distance-one/
const oneAway = (s1, s2) => {
  if(Math.abs(s1.length - s2.length) > 1){
    return false
  }
  
  let countOfEdits = 0;
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length){
    // If current characters don't match 
    if (s1[i] != s2[j]) { 
      if (countOfEdits === 1) 
          return false; 

      // If length of one of the strings is more, only possible edit is to remove a character 
      if (s1.length > s2.length) {
        i++; 
      } 
      else if (s2.length < s1.length) {
        j++; 
      } 
      else { 
        i++; 
        j++; 
      } 
        
      // Increment count of edits  
      countOfEdits++; 
    } 
    // If current characters match move on to the next set of characters
    else  { 
        i++; 
        j++; 
    } 
  }
  return countOfEdits <= 1
}

module.exports = { oneAway };