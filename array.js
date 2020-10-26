'use strict';

// 배열(Array)
var array = [1,2,3,4,5]
console.log(array);
// = [1,2,3,4,5]

// 다차원 배열 multi dimensional array
var array = [[1,2,3],[1,3,5]];
console.log(array[0][1]);
// = 2

// 배열안의 요소 빈도 수 찾기 
var array = [1341414,23415124,'2314515','441231','5124121']
var count = 0;
for(var item of array){
  for(var findItem of item.toString()){
    if(findItem == 3){
      count++
    }
  }
}
console.log(count)
