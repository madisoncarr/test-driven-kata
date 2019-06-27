// const wrap = (line, maxLen) => '';

const wrap = (line, maxLen) => {
  //   let str = '';
  // split into words arr
  // loop over each word
  // if first word is less than column, add to str and add \n
  // if \
  //   let words = myString.split(' ');
  //   console.log(words);
  //   for (let i = 0; i < words.length; i++) {
  //     let currentWord = words[i];
  //     if (currentWord.length < column) {
  //       str += currentWord;
  //       str += '\n';
  //     }
  //   }
  //   return str;
  // };

  if (line.length <= maxLen) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf('', maxLen);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }
  return (
    line.substring(0, split) +
    '\n' +
    wrap(line.substring(split + offset), maxLen)
  );
};
module.exports = wrap;
