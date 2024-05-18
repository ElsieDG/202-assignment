var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var newNumbers =[];

function processArray(numbers){
  for ( i = 0; i < numbers.length; i++) {
    if(numbers[i]%2 != 0){
      newNumbers.push(numbers[i] * 3);
    }
    else{
      newNumbers.push(numbers[i] **2);
    }
  }
  return newNumbers;
}

console.log(processArray(numbers));

