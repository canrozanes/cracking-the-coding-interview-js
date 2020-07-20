const stringCompression = (string) => {
  // if there are no repeated strings, return the original
  if(string.length === [...new Set(string.split(''))].length){
    return string
  }
  let output = [];
  
  for(let i = 0; i < string.length; i++){
    let prevChar = string[i-1];
    let currentChar = string[i];

    if(prevChar !== currentChar){
      output.push(string[i]);
      output.push(1);
    }
    else{
      let newCount = output.pop() + 1;
      output.push(newCount);
    }
  }
  return output.join('');
}

module.exports = { stringCompression };
