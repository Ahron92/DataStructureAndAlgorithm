'use strict'
// Queue
// 큐는 컴퓨터에서 가장 핵심적인 소프트웨어 OS 와 네트워크 기능에서 많이 사용된다. (프로세스 스케쥴링)
// 순서를 저장하는 일시적인 buffer에 사용을 많이한다.
// 일종의 줄을 서는 행위와 유사, FIFO(First in First Out) or LILO(Last in Last out) 방식으로 스택과 순서가 반대
// Data 를 넣을 때는 Enqueue 뺄 때는 Dequeue 라고 부른다.

class Queue{
  constructor(){
    this._arr = [];
  }
  enqueue(data){
    this._arr.unshift(data);
  }
  dequeue(){
    this._arr.pop();
  }
}

const queue = new Queue();
queue.enqueue('1')
queue.enqueue('2')
queue.enqueue('3')
queue.dequeue()
console.log(queue._arr);

// Priority queue 우선순위 큐 
// 우선순위에 따라 큐에서 dequeue된다.

class PriorityQueue{
  constructor(){
    this._arr = [];
  }
  enqueue(data, priority){
    const arrItem = [data, priority];
    this._arr.unshift(arrItem);
  }

  dequeue(){
    let priority = 0;
    let arrIndex = 0;
    this._arr.forEach((value, index) =>{
      if(priority < value[value.length-1]){
        priority = value[value.length-1];
        arrIndex = index;
      }
    })
    this._arr.splice(arrIndex, 1);
  }

  head(){
    return this._arr[this._arr.length-1]
  }

  tail(){
    return this._arr[0];
  }
  
  getAllData(){
    return this._arr;
  }
}

const firstData = new PriorityQueue();
firstData.enqueue('ahron', 3);
firstData.enqueue('michael', 4);
firstData.enqueue('crush', 2);
firstData.dequeue();
console.log(firstData.getAllData());
