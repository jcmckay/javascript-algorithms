function fibonacci(position) {
  if(position <= 2) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

function fibMemo(index, cache){
  cache = cache || [];

  if(cache[index]) return cache[index];
  else{
    if(index < 3) return 1;
    else {
      return cache[index] = fibMemo(index-1, cache) + fibMemo(index-2, cache);
    }
  }
}