function caesarCipher(str, num) {
  num = num % 26;
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var chars = str.toLowerCase().split('');

  var cipher = [];

  for(var i=0; i < chars.length; i++)
  {
    if (alphabet.indexOf(chars[i]) === -1){
      cipher.push(chars[i]);
      continue;
    }

    var index = alphabet.indexOf(chars[i]) + num;
    if (index > 25) index = index - 26;
    if (index < 0) index = index + 26;

    if(str[i] === str[i].toUpperCase())
      cipher.push(alphabet[index].toUpperCase());
    else
      cipher.push(alphabet[index]);
  }

  return cipher.join('');
}

console.log(caesarCipher('Zoo keePer', 2));

console.log(caesarCipher("apple pie, my Favorite", 271));
