function getMean(array) {
  var total = 0;
  array.forEach(num => {
    total += num;
  });

  return total / array.length;
}

function getMedian(array) {
  array = array.sort(function(a,b) {return a-b});
  var length = array.length;
  var half = length / 2;

  if(length % 2 === 0)
    return (array[half] + array[half -1]) / 2

  return array[Math.floor(half)];
}

function getMode(array) {

  var arrayObj = {};

  array.forEach(item => {
    if(!arrayObj[item]) arrayObj[item] = 0;
    arrayObj[item]++;
  });

  var modes = [];
  var maxFrequency = 0;

  for(var key in arrayObj) {
    if(arrayObj[key] > maxFrequency) {
      modes = [key];
      maxFrequency = arrayObj[key];
    }
    else if(arrayObj[key] === maxFrequency) modes.push(key);
  }

  if(modes.length === Object.keys(arrayObj).length) modes = [];

  return modes;
}

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}


console.log(meanMedianMode([1,2,3,4,5,4,6,1]));
console.log(meanMedianMode([9,10,23,10,23,9]));
