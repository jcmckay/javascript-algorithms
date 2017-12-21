function isPalindrome(string) {
  var chars = string.toLowerCase().split('');
  var validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArray = [];
  chars.forEach(c => {
    if(validChars.indexOf(c) > -1) lettersArray.push(c);
  });

  return lettersArray.join('') ==  lettersArray.reverse().join('');
}

isPalindrome("coding javascript");