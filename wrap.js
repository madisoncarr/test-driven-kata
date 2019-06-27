// const wrap = (line, maxLen) => '';

const wrap = (myString, column) => {
  let str = '';
  // split into words arr
  // loop over each word
  // if first word is less than column, add to str and add \n
  // if \
  let words = myString.split(' ');
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length < column) {
      str += currentWord;
      str += '\n';
    }
  }
  return str;
};

module.exports = wrap;
