function sumTwo(nums, sum) {
  var pairs = [];
  var lookup = [];

  for(var i = 0; i < nums.length; i++){
    var currNum = nums[i];
    var diff = sum - currNum;

    if(lookup.indexOf(diff) !== -1){
      pairs.push([currNum, diff]);
    }

    lookup.push(currNum);
  }

  return pairs;
}

sumTwo([40, 11, 19, 17, -12], 28);