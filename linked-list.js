'use strict';
//Linked List
//연결 리스트라고도 함
//배열의 미리 예약된 공간을 할당해야한다는 단점을 해결하기 위해 나타난 자료구조
//링크드 리스트는 저장된 데이터와 함께 다음 데이터 저장공간을 가리키는 공간을 하나의 구성으로 이루어진다(데이터(data)+주소(Pointer) = 노드(Node))
//연결정보를 찾기위해 검색 속도가 느리다
//중간데이터 삭제 시 부가적인 작업이 필요

class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head;
      this.length = 0;
  }

  addNode(data){
    let node = new ListNode(data);
    let current = this.head;
    this.length++;
    if(!current){
      this.head = node;
    }else{
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
  }

  deleteByAddress(position){
    let current = this.head;
    let before;
    let remove;
    let count = 0;    
    if(position == 0){
      remove = this.head;
      this.head = this.head.next;
      this.lenght--;
      return remove;
    }else{
      while(count < position){
        before = current;
        count++;
        current = current.next;
      }
      remove = current; 
      before.next = remove.next;
      this.length--;
      return remove;
    }
  }

  desc(){
    let show = this.head;
    while(show){
      console.log(show.data);
      show = show.next;
    }
  }
}

const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.deleteByAddress(1);
list.deleteByData(2);
list.desc()
