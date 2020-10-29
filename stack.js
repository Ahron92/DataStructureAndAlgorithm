'use strict'
//Stack
// Queue와 다르게 가장 나중에 쌓은 데이터를 가장 먼저 뺄 수 있는 데이터 구조
// LIFO(Last in First out)
// 구조가 단순해서 구현이 쉽고 데이터 저장 읽기 속도가 빠르다.
// 단점으로는 최대의 공간을 미리 확보해 놓아야 한다. (ex)browser의 call stack
// javascript 의 api push, pop을 통해 구현이 가능하다.

var stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack);


//api 사용 안해보기

class Stack {
  constructor(){
    this._arr = [];
  }

  push(data){
    this._arr[this._arr.length] = data;
  }
  pop(){
    var temp = []
    for(var i = 0; i < this._arr.length-1; i++){
      temp[i] = this._arr[i];
    }
    this._arr = temp;
  }
}

var stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(4);
stack.push(5);
stack.pop();
console.log(stack._arr);
