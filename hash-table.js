'use strict';

//hash table
// key에 데이터(value)를 저장하는 데이터 구조
// 일반적으로 배열로 미리 hash table 사이즈 만큼 생성 후에 사용(공간과 탐색 시간을 맞바꾸는 기법)

//hash table 과 관련된 용어
// hash : 임의 값을 고정 길이로 변환 하는 것
// hash table : 키 값의 연산에 의해 직접 접근이 가능한 데이터 구조 (key -> hash 함수 -> hash 주소 -> hash table)
// hashing Function : key에 대해 산술 연산을 이용해 데이터 위치를 찾을 수 있는 함수
// hash value or hash Address : key가 해시함수를 통해 바뀐 주소
// slot : 한개의 데이터를 저장할 수 있는 공간

// 장점 : 1.데이터의 저장 읽기 속도가 빠르다.
//       2.키에 대한 데이터 중복을 확인하기 쉽다.
//단점 : 1. 일반적으로 저장공간이 더 많이 필요하다.
//      2.여러 키에 해당하는 주소가 동일 할 경우 충돌을 해결하기 위한 별도의 자료구조가 필요하다.
//주요 용도: 검색이 많이 필요하고 저장, 삭제, 일기가 빈번한 경우, 캐쉬 구현시...

// 충돌(collision) 
// 해쉬 테이블의 가장 큰 문제는 충돌이며 이 문제를 해쉬 충돌이라고 한다.

class HashTable{
  constructor(size = 10){
    this.storage = [];
    this.size = size;
  }

  hashFunction(key){
    if(key === undefined || key === null) throw new Error('키 값이 존재하지 않습니다.');
    let temp = key;
    let index = 0;
    temp instanceof Number || (temp = temp + '');
    for(let i = 0; i < temp.length; i++){
      index += temp.charCodeAt(i);
    }
    return index % this.size;
  };

  insert(key, value){
    let index = this.hashFunction(key);
    if(this.storage[index] === undefined || this.storage[index] === []){
      this.storage[index] = [[key, value]]
    }else{
      for(let i = 0; i < this.storage[index].length; i++){
        if(this.storage[index][i] !== [key, value]){
          this.storage[index].push([key, value]);        
          break;
        }
      }
    }
    return this.storage[index]
  }
  delete(key, value){
    let index = this.hashFunction(key);
    if(this.storage[index] === undefined){
      return '저장된 데이터가 없습니다.'
    }else{
      for(let i = 0; i < this.storage[index].length; i++){
        if(this.storage[index][i].join() == [key,value].join()){
          console.log(111)
          return this.storage[index].splice(i, 1);
        }
      }
    }
  }

  search(key){
    let index = this.hashFunction(key);
    if(this.storage[index] === undefined){
      return '저장된 데이터가 없습니다.'
    }
    return this.storage[index];
  }
}

const hashTable = new HashTable(30);
hashTable.insert('아론', '111')
hashTable.insert('아론', '115')
hashTable.insert('길동', '222')
hashTable.insert('둘리', '333')
console.log(hashTable.delete('아론', '111'));
console.log(hashTable)


