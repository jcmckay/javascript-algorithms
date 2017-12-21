function reverseWords(str){

  var words = str.split(' ');

  var reversedWords = [];
  words.forEach(word => {

    var chars = word.split('');
    for(var i=0; i<chars.length/2; i++){
      var currChar = chars[i];
      var swapChar = chars[chars.length -(i+1)];

      chars[chars.length -(i+1)] = currChar;
      chars[i] = swapChar;
    }

    reversedWords.push(chars.join(''));

  });

  return reversedWords.join(' ');
}


console.log(reverseWords('Tell me how you know the truth'));
console.log(reverseWords('this is a string of words'));



function reverseArray(array){

  for(var i=0; i < array.length/2; i++) {

    var swapItem = array[array.length-(i+1)];

    array[array.length-(i+1)] = array[i];
    array[i] = swapItem;
  }

  return array;
}

console.log(reverseArray([1,4,3,99,100,0,4,-1, 9]));